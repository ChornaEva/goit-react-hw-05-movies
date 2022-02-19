import { Link } from 'react-router-dom';
import { MoviesItem, MoviesList } from './FilmList.styled';

const FilmList = ({ filmsArray }) => {
  return (
    <MoviesList>
      {filmsArray.length
        ? filmsArray.map(
            film =>
              film.title && (
                <MoviesItem key={film.id}>
                  <Link className="trendingFilmsLink" to={`/movies/${film.id}`}>
                    {film.title}
                  </Link>
                </MoviesItem>
              )
          )
        : null}
    </MoviesList>
  );
};

export default FilmList;
