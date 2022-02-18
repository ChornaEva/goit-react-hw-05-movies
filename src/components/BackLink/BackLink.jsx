import { Link, useLocation } from 'react-router-dom';

const BackLink = () => {
  const location = useLocation();
  return (
    <Link to={location?.state?.from ?? '/'}>
      <button type="button">Go back</button>
    </Link>
  );
};

export default BackLink;
