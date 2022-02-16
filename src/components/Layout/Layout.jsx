import { NavLink } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </div>
  );
};

export default Layout;
