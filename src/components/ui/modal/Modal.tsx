import React, {PropsWithChildren, useCallback, useEffect} from 'react';
import './Modal.scss';

export function Modal(props: ModalProps) {

  const className = props.open ? 'overlay open' : 'overlay';
  
  const handleEscape = useCallback((event) => {
    if (event.keyCode === 27) {
      props.onClose();
    }
  }, [props]);

  useEffect(() => {
    document.addEventListener("keydown", handleEscape, false);

    return () => {
      document.removeEventListener("keydown", handleEscape, false);
    }
  })

  return (
      <div className={className} onClick={props.onClose}>
        <div className={'modal'}>
          <div className={'modal-header'}>
            <h2>{props.title}</h2>
            <span className={'closeButton'} onClick={props.onClose}>&times;</span>
          </div>
          <div className={'modal-content'}>
            {props.children}
          </div>
        </div>
      </div>
  );

}

interface ModalProps extends PropsWithChildren<any> {
  title: string
  open: boolean
  onClose: () => void
}