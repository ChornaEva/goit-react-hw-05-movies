import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingFilms } from '../../services/api';
import Loader from '../Loader';

const useFetchTrendFilms = () => {
  const [trendFilms, setTrendFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTrendFilms() {
      setLoading(true);
      try {
        const data = await getTrendingFilms();
        setTrendFilms(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchTrendFilms();
  }, []);

  return { trendFilms, loading, error };
};

const HomePage = () => {
  const { trendFilms, loading, error } = useFetchTrendFilms();
  return (
    <>
      <h1>Trending Films</h1>
      {loading && <Loader />}
      {!error && (
        <ol>
          {trendFilms.length &&
            trendFilms.map(
              trendFilm =>
                trendFilm.title && (
                  <li key={trendFilm.id}>
                    <Link to={`/movies/${trendFilm.id}`}>
                      {trendFilm.title}
                    </Link>
                  </li>
                )
            )}
        </ol>
      )}
    </>
  );
};

export default HomePage;
