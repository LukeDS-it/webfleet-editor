import React, {useCallback, useEffect} from 'react';
import './Modal.scss';

export function Modal(props: ModalProps) {

  const className = props.open ? 'modal open' : 'modal';
  
  const handleEscape = useCallback((event) => {
    if (event.keyCode === 27) {
      props.closeModalHook();
    }
  }, [props]);

  useEffect(() => {
    document.addEventListener("keydown", handleEscape, false);

    return () => {
      document.removeEventListener("keydown", handleEscape, false);
    }
  })

  return (
      <div className={className} onClick={props.closeModalHook}>
        <div className={'modal-content'}>
          <div className={'modal-header'}>
            <span>{props.title}</span>
            <span onClick={props.closeModalHook}>&times;</span>
          </div>
          <div>
            Hello world :)
          </div>
        </div>
      </div>
  );

}

interface ModalProps {
  title: string
  open: boolean
  closeModalHook: () => void
}