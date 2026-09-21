import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const ServicioPage = lazy(() => import('./pages/ServicioPage.jsx'));
const Proyectos = lazy(() => import('./pages/Proyectos.jsx'));
const Contacto = lazy(() => import('./pages/Contacto.jsx'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function RevealObserver() {
  const { pathname } = useLocation();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!('IntersectionObserver' in window)) {
        document.querySelectorAll('.rev').forEach(el => el.classList.add('on'));
        return;
      }
      const io = new IntersectionObserver(
        entries => {
          entries.forEach(en => {
            if (en.isIntersecting) {
              en.target.classList.add('on');
              io.unobserve(en.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      document.querySelectorAll('.rev').forEach(el => {
        el.classList.remove('on');
        io.observe(el);
      });
      return () => io.disconnect();
    }, 100);
    return () => clearTimeout(timer);
  }, [pathname]);
  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <RevealObserver />
      <Header />
      <main>
        <Suspense fallback={<div style={{ minHeight: '60vh', background: '#0D0D0D' }} />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios/:slug" element={<ServicioPage />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
