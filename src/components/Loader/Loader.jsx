import { TailSpin } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Loader = () => {
  return <TailSpin heigth="42" width="42" color="orange" ariaLabel="loading" />;
};

export default Loader;
