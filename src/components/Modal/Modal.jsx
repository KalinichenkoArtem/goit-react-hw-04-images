import React, { Component } from 'react';
import { Overlay, ModalContainer } from 'components/Modal/Modal.styled';
import PropTypes from 'prop-types';

class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handelClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handelClick);
  }

  handelClick = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClickOnBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleClickOnBackdrop}>
        <ModalContainer>{this.props.children}</ModalContainer>
      </Overlay>
    );
  }
}

export default Modal;
