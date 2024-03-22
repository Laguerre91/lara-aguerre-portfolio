import React, { useState, useEffect } from 'react';
import AppRoutes from './routes/AppRoutes';
import Navbar from './Components/NavBar/NavBar';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';

function App() {
  const [showTitle, setShowTitle] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitle(false);
      setShowContent(true);
    }, 3500)

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className='container'>
        {showTitle && (
          <h2 className='fadeInCenter'>
            Lara Aguerre Portfolio
          </h2>
        )}
        {showContent && (
          <>
            <AppRoutes />
            <Navbar />
          </>
        )}
      </div>
      <footer>Lara Aguerre &copy; 2024 - made with ❤️</footer>
    </>
  );
}

export default App;
