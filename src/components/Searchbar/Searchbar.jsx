import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';
import {
  SearchContainer,
  SearchForm,
  FormButton,
  FormInput,
} from 'components/Searchbar/Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    const { value } = e.currentTarget;
    setQuery(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    e.currentTarget.reset();
  };

  return (
    <SearchContainer>
      <SearchForm onSubmit={handleSubmit}>
        <FormButton type="submit">
          <ImSearch style={{ width: 25, height: 25 }} />
        </FormButton>

        <FormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </SearchForm>
    </SearchContainer>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
