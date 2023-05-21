import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContainer } from './App.styled';
import { getImages } from '../services/imageAPI';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }
    setIsLoading(true);
    getImages(query, page)
      .then(({ hits, totalHits }) => {
        if (!hits?.length) {
          toast.error(`Sorry, there are no images ${query}. Please try again.`);
          return;
        }
        setImages(images => [...images, ...hits]);
        if (page === 1) {
          toast.success(`Hooray! We found ${totalHits} images`);
        }

        if (page > 1 && page >= Math.ceil(totalHits / 12)) {
          toast.info(
            `We're sorry, but you've reached the end of search "${query}". Please start a new search`
          );
        }
        setShowBtn(page < Math.ceil(totalHits / 12));
      })
      .catch(() =>
        toast.error(`Whoops, something went wrong! Please try again later!`)
      )
      .finally(() => setIsLoading(false));
  }, [page, query]);

  const handleFormSubmit = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const onLoadMore = () => {
    setPage(page => page + 1);
  };

  return (
    <AppContainer>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery images={images} />
      {isLoading && <Loader />}
      {showBtn && <Button onClick={onLoadMore} />}
      <ToastContainer />
    </AppContainer>
  );
};
