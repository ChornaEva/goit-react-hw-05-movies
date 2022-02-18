import { NavLink } from 'react-router-dom';
import { LayoutWrapper } from './Layout.styled';

const Layout = () => {
  return (
    <LayoutWrapper>
      <NavLink to="/" className="pageLink">
        Home
      </NavLink>
      <NavLink to="/movies" className="pageLink">
        Movies
      </NavLink>
    </LayoutWrapper>
  );
};

export default Layout;
