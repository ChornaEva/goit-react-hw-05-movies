import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingFilms } from '../../services/api';
import Loader from '../Loader';
import {
  TrendingFilmsHeader,
  TrendingFilmsItem,
  TrendingFilmsList,
} from './HomePage.styled';

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
      <TrendingFilmsHeader>Trending Films</TrendingFilmsHeader>
      {loading && <Loader />}
      {!error && (
        <TrendingFilmsList>
          {trendFilms.length &&
            trendFilms.map(
              trendFilm =>
                trendFilm.title && (
                  <TrendingFilmsItem key={trendFilm.id}>
                    <Link
                      className="trendingFilmsLink"
                      to={`/movies/${trendFilm.id}`}
                    >
                      {trendFilm.title}
                    </Link>
                  </TrendingFilmsItem>
                )
            )}
        </TrendingFilmsList>
      )}
    </>
  );
};

export default HomePage;
