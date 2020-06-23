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

  const handleSubmit = () => {
    props.onSubmit();
    props.onClose();
  }

  const handleCancel = () => {
    props.onCancel();
    props.onClose();
  }

  const closeOverlay = (e) => {
    if (e.target === e.currentTarget) {
      props.onClose();
    }
  }

  const submit = (props.onSubmit) ? <button className={'submit'} onClick={handleSubmit}>{props.submitText ? props.submitText : 'Submit'}</button> : '';
  const cancel = (props.onCancel) ? <button className={'cancel'} onClick={handleCancel}>{props.cancelText ? props.cancelText : 'Cancel'}</button> : '';
  const footer = (props.onSubmit || props.onCancel) ? <div className={'modal-footer'}>{submit}{cancel}</div> : ''

  return (
      <div className={className} onMouseDown={closeOverlay}>
        <div className={'modal'}>
          <div className={'modal-header'}>
            <h2>{props.title}</h2>
            <span className={'closeButton'} onClick={props.onClose}>&times;</span>
          </div>
          <div className={'modal-content'}>
            {props.children}
          </div>
          {footer}
        </div>
      </div>
  );

}

interface ModalProps extends PropsWithChildren<any> {
  title: string
  open: boolean
  onClose: () => void
  onSubmit?: () => void
  onCancel?: () => void
  submitText?: string
  cancelText?: string
}
