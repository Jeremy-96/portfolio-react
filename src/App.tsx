import { Main } from './layouts/Content/Main';
import { Footer } from './layouts/Footer/Footer';
import { Header } from './layouts/Header/Header';
import './styles/App.css';

export const App = () => {
  return (
    <div className="AppWrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
