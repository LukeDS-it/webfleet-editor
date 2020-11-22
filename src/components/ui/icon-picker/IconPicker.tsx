import React, {useState} from 'react';
import useSWR from 'swr/esm/use-swr';
import './IconPicker.scss';
import chooseIcon from '../../../assets/choose-icon.png';

export function IconPicker(props: IconPickerProps) {

  const [currImg, setCurrImg] = useState<string>(chooseIcon);
  const [panelOpen, setPanelOpen] = useState<boolean>(false);

  const panelClass = panelOpen ? 'picker-panel open' : 'picker-panel closed';

  const getAllIcons = async () => {
    return fetch(props.imageIndex).then(r => r.json()).then(p => p as IconIndex);
  };

  const {data} = useSWR(props.imageIndex, getAllIcons);

  const togglePicker = () => {
    if (panelOpen) {
      if (props.onClosePicker) {
        props.onClosePicker();
      }
    } else {
      if (props.onOpenPicker) {
        props.onOpenPicker();
      }
    }
    setPanelOpen(!panelOpen);
  };

  if (!data) {
    return <div>loading...</div>;
  }

  const makeSection = (baseUrl: string, section: string, icons: Array<string>) => {
    const imageClick = (url: string) => {
      setCurrImg(url);
      props.onImageSelect(url);
      togglePicker();
    };

    const makeImage = (iconName) => {
      const url = baseUrl.replace('{file}', iconName);
      return <img key={iconName} src={url} alt={'iconName'} onClick={() => imageClick(url)}/>;
    };

    return <div className='icons-section' key={section}>
      <h3>{section}</h3>
      <div className='icons-present'>
        {icons.map(i => makeImage(i))}
      </div>
    </div>;
  };

  const sections = Object
  .entries(data.icons)
  .map(([section, icons]) => makeSection(data.baseUrl ? data.baseUrl : props.baseUrl, section, icons));

  return (
      <div className='icon-picker'>
        <div className='icon-preview' onClick={togglePicker}>
          <img src={currImg} alt='Open or close the picker'/>
          Choose an image
        </div>
        <div className={panelClass}>
          {sections}
        </div>
      </div>
  );
}

interface IconPickerProps {
  onImageSelect: (string) => void
  imageIndex: string
  baseUrl?: string
  defaultImage?: string
  onOpenPicker?: () => void
  onClosePicker?: () => void
}

interface IconIndex {
  baseUrl: string
  icons: Map<string, Array<string>>
}
