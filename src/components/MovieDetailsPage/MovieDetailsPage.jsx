import { useState, useEffect } from 'react';
import {
  useParams,
  Link,
  useLocation,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import { getFilmById } from '../../services/api';

import toast from 'react-hot-toast';
import BackLink from '../BackLink/BackLink';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    async function fetchItem() {
      try {
        const singleMovie = await getFilmById(movieId);
        setMovie(singleMovie);
      } catch (error) {
        toast.error('Film is not found.');
      }
    }
    fetchItem();
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <div>
            <BackLink />
            <img
              src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path}
              alt={movie.title}
            />
            <div>
              <h2>{movie.title}</h2>
              <p>User score: {movie.vote_average * 10}%</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              {movie.genres &&
                movie.genres.map(genre => <p key={genre.id}> {genre.name} </p>)}

              <div>
                <h2>Additional information</h2>
                <ul>
                  <li>
                    <Link to="cast" state={{ from: location.state?.from }}>
                      Cast
                    </Link>
                  </li>
                  <li>
                    <Link to="reviews" state={{ from: location.state?.from }}>
                      Reviews
                    </Link>
                  </li>
                </ul>
                <Outlet />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
