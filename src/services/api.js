import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '533b247956f8a3b1c427ebef4fa4398f';

// /trending/get-trending - список самых популярных фильмов на сегодня для создания коллекции на главной странице.

export const getTrendingFilms = async () => {
  const response = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
  return response.data;
};

// /search/search-movies - поиск кинофильма по ключевому слову на странице фильмов.

export const getSearchFilms = async movieId => {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
  );
  return response.data;
};

// /movies/get-movie-details - запрос полной информации о фильме для страницы кинофильма.
export const getFilmById = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};
// /movies/get-movie-credits - запрос информации о актёрском составе для страницы кинофильма.

export const getFilmCast = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};
// /movies/get-movie-reviews - запрос обзоров для страницы кинофильма.

export const getFilmReviews = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data;
};
