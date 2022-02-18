import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import {
  Link,
  useParams,
  useSearchParams,
  useLocation,
} from 'react-router-dom';
import { getSearchFilms } from '../../services/api';
import Loader from '../Loader';
import {
  FilterInput,
  InputButton,
  InputForm,
  InputWrapper,
  SearchFilmsItem,
  SearchFilmsList,
} from './MoviesPage.styled';

const MoviesPage = () => {
  const location = useLocation();
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

      <SearchFilmsList>
        {loading && <Loader />}
        {searchFilms.map(
          searchFilm =>
            searchFilm.title && (
              <SearchFilmsItem key={searchFilm.id}>
                <Link
                  className="searchFilmsLink"
                  to={`/movies/${searchFilm.id}`}
                  state={{ from: location }}
                >
                  {searchFilm.title}
                </Link>
              </SearchFilmsItem>
            )
        )}
      </SearchFilmsList>
    </InputWrapper>
  );
};

export default MoviesPage;
