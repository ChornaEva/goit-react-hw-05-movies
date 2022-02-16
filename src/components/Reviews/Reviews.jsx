import { useEffect, useState } from 'react';
import { getFilmReviews } from '../../services/api';

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchReviewsFilms(movieId) {
      try {
        const filmReview = await getFilmReviews(movieId);
        setReviews(filmReview.results);
      } catch (error) {
        setError(error);
      }
    }
    fetchReviewsFilms(movieId);
  }, [movieId]);

  return (
    <>
      <ul>
        {reviews?.results?.length ? (
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
