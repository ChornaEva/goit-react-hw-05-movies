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
import {
  MovieDetailsHeader,
  MovieDetailsHeading,
  MovieDetailsImg,
  MovieDetailsItem,
  MovieDetailsList,
  MovieDetailsText,
  MovieDetailsWrapper,
} from './MovieDetailsPage.styled';

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
          <BackLink />
          <MovieDetailsWrapper>
            <MovieDetailsImg
              src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path}
              alt={movie.title}
            />
            <div>
              <MovieDetailsHeader>{movie.title}</MovieDetailsHeader>
              <MovieDetailsText>
                User score: {movie.vote_average * 10}%
              </MovieDetailsText>
              <MovieDetailsHeading>Overview</MovieDetailsHeading>
              <MovieDetailsText>{movie.overview}</MovieDetailsText>
              <MovieDetailsHeading>Genres</MovieDetailsHeading>
              {movie.genres &&
                movie.genres.map(genre => (
                  <MovieDetailsText key={genre.id}>
                    {' '}
                    {genre.name}{' '}
                  </MovieDetailsText>
                ))}

              <div>
                <MovieDetailsHeading>
                  Additional information
                </MovieDetailsHeading>
                <MovieDetailsList>
                  <MovieDetailsItem>
                    <Link
                      className="pageLink"
                      to="cast"
                      state={{ from: location.state?.from }}
                    >
                      Cast
                    </Link>
                  </MovieDetailsItem>
                  <MovieDetailsItem>
                    <Link
                      className="pageLink"
                      to="reviews"
                      state={{ from: location.state?.from }}
                    >
                      Reviews
                    </Link>
                  </MovieDetailsItem>
                </MovieDetailsList>
              </div>
            </div>
          </MovieDetailsWrapper>
          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
