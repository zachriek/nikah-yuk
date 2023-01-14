import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './contexts/AuthContext';
import Router from './routes';
import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  Aos.init({
    duration: 1000,
    offset: 100,
    once: false,
  });

  return (
    <BrowserRouter>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
