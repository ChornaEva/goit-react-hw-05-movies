import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import { getSearchFilms } from '../../services/api';
import FilmList from '../FilmList/FilmList';
import Loader from '../Loader';
import {
  FilterInput,
  InputButton,
  InputForm,
  InputWrapper,
} from './MoviesPage.styled';

const MoviesPage = () => {
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchFilms, setSearchFilms] = useState([]);
  const query = searchParams.get('query');

  useEffect(() => {
    async function fetchSearchFilms(query) {
      setLoading(true);
      try {
        const searchMovies = await getSearchFilms(query);
        setSearchFilms(searchMovies.results);
      } catch (error) {
        toast.error('Film is not found.');
      } finally {
        setLoading(false);
      }
    }
    if (query !== '' && query) {
      console.log(query);
      fetchSearchFilms(query);
    }
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: event.currentTarget.elements.query.value });
  };

  return (
    <InputWrapper>
      <InputForm onSubmit={handleSubmit} autoComplete="off">
        <FilterInput type="text" name="query" autoFocus />
        <InputButton type="submit">Search</InputButton>
      </InputForm>
      <FilmList filmsArray={searchFilms} />

      {loading && <Loader />}
    </InputWrapper>
  );
};

export default MoviesPage;
