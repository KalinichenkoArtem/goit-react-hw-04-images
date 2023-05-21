import PacmanLoader from 'react-spinners/PacmanLoader';
import { LoaderContainer } from 'components/Loader/Loader.styled';

const Loader = () => (
  <LoaderContainer>
    <PacmanLoader color="blue" size="150px" />
  </LoaderContainer>
);

export default Loader;
