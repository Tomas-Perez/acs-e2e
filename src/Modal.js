import React from "react";
import './Modal.css';

const Modal = ({show, onDismiss, children}) => {
  if (!show) return null;

  return (
    <div className='app-modal' onClick={onDismiss}>
      <div onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
