// src/Modal.tsx
import React from 'react';
import classsname from './modal.module.scss'
interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={classsname['modal-overlay']}>
      <div className={classsname['modal-content']}>
        <button className={classsname['close-button']} onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
