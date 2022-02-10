import './App.css';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div>
      Navigation
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </header>
    </div>
  );
}

export default App;
