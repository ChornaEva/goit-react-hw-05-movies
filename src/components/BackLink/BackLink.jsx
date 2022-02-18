import { Link, useLocation } from 'react-router-dom';
import { BackLinkButton } from './BackLink.styled';
import { IoIosArrowRoundBack } from 'react-icons/io';

const BackLink = () => {
  const location = useLocation();
  return (
    <Link to={location?.state?.from ?? '/'}>
      <BackLinkButton type="button">
        <IoIosArrowRoundBack />
        Go back
      </BackLinkButton>
    </Link>
  );
};

export default BackLink;
