import { useState, useEffect } from 'react';
import { useParams, NavLink, Link } from 'react-router-dom';
import { getFilmById, getFilmCast, getFilmReviews } from '../../services/api';

import toast from 'react-hot-toast';
import Reviews from '../Reviews';
import Cast from '../Cast';

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

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
            <Link to="/">
              <button type="button">Go back</button>
            </Link>

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

              {/* <ul >
                <li>
                  <NavLink
                    
                    to={{ pathname: `${url}/cast`, state: { from: location.state?.from } }}
                  >
                    cast
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    
                    to={{ pathname: `${url}/reviews`, state: { from: location.state?.from } }}
                  >
                    reviews
                  </NavLink>
                </li>
              </ul> */}

              <Reviews movieId={movieId} />
              <Cast movieId={movieId} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
