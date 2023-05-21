import React, { useEffect } from 'react';
import { Overlay, ModalContainer } from 'components/Modal/Modal.styled';
import PropTypes from 'prop-types';

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handelClick = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handelClick);

    return () => {
      window.removeEventListener('keydown', handelClick);
    };
  }, [onClose]);

  const handleClickOnBackdrop = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleClickOnBackdrop}>
      <ModalContainer>{children}</ModalContainer>
    </Overlay>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
