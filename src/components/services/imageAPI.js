import axios from 'axios';

const API_KEY = '34524727-90d44f4deefec722da31ae171';
axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
};

export const getImages = async (query, page) => {
  const { data } = await axios.get('', {
    params: {
      q: query,
      page: page,
      per_page: 12,
    },
  });
  return data;
};
