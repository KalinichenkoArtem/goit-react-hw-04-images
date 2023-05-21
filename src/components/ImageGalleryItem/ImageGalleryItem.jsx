import { useState } from 'react';
import Modal from '../Modal/Modal';
import { ItemContainer, ImageGallery } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ id, webformatURL, tags, largeImageURL }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <ItemContainer key={id} onClick={toggleModal}>
        <ImageGallery src={webformatURL} alt={tags} />
      </ItemContainer>
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      )}
    </>
  );
};

export default ImageGalleryItem;
