import React from 'react';

import './Modal.scss'

const Modal = ({active, setActive, children}) => {

  return (
    <div className={active ? 'modal active' : 'modal'}>
      <div className="modal__overlay" onClick={() => setActive(false)}>
        <div className="modal__body" onClick={(e) => e.stopPropagation()}>
          <div className="modal__close" onClick={() => setActive(false)}></div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;