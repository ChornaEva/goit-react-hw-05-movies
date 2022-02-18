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
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <input type="text" name="query" autoFocus />
        <button type="submit">Search</button>
      </form>

      <ol>
        {loading && <Loader />}
        {searchFilms.map(
          searchFilm =>
            searchFilm.title && (
              <li key={searchFilm.id}>
                <Link
                  to={`/movies/${searchFilm.id}`}
                  state={{ from: location }}
                >
                  {searchFilm.title}
                </Link>
              </li>
            )
        )}
      </ol>
    </div>
  );
};

export default MoviesPage;
