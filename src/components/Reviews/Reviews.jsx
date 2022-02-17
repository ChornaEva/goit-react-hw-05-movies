import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmReviews } from '../../services/api';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    async function fetchReviewsFilms(movieId) {
      try {
        const filmReview = await getFilmReviews(movieId);

        setReviews(filmReview.results);
      } catch (error) {
        setError(error);
      }
    }
    // if (movieId) {
    //   fetchReviewsFilms(movieId);
    // }

    fetchReviewsFilms(movieId);
  }, [movieId]);

  return (
    <>
      <ul>
        {reviews?.length ? (
          reviews.map(review => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <h2>No reviews</h2>
        )}
      </ul>
    </>
  );
};

export default Reviews;
