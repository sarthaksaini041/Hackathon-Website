import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/ui/ScrollProgress';
import ScrollToTop from './components/ui/ScrollToTop';
import FloatingRegisterButton from './components/ui/FloatingRegisterButton';
import LoadingScreen from './components/ui/LoadingScreen';
import { useTheme } from './hooks/useTheme';
import Home from './pages/Home';

export default function App() {
  const { dark, toggle } = useTheme();

  return (
    <BrowserRouter>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar dark={dark} toggleTheme={toggle} />
      <Home />
      <Footer />
      <ScrollToTop />
      <FloatingRegisterButton />
    </BrowserRouter>
  );
}
