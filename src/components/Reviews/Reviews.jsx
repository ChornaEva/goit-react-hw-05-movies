import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmReviews } from '../../services/api';
import { ReviewsHeader, ReviewsList, ReviewsText } from './Reviews.styled';

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

    fetchReviewsFilms(movieId);
  }, [movieId]);

  return (
    <>
      <ReviewsList>
        {reviews?.length ? (
          reviews.map(review => (
            <li key={review.id}>
              <ReviewsHeader>{review.author}</ReviewsHeader>
              <ReviewsText>{review.content}</ReviewsText>
            </li>
          ))
        ) : (
          <ReviewsHeader>No reviews</ReviewsHeader>
        )}
      </ReviewsList>
    </>
  );
};

export default Reviews;
