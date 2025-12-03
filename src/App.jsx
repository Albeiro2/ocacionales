import React, { useState, useEffect } from 'react';
import HomePage from './page/HomePage/HomePage';
import MenuBar from './components/Menu/MenuBar';
import AboutV from './page/AboutV/AboutV';
import Footer from './page/Footer/Footer';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#vitreum') {
        setCurrentPage('vitreum');
        // Hacer scroll al top cuando se va a Vitreum
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 0);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div>
      <MenuBar />
      {currentPage === 'home' ? (
        <HomePage />
      ) : (
        <div>
          <AboutV />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;