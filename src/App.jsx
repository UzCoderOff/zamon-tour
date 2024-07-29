import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useParams, useNavigate } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './LanguageContext';
import Home from './components/Home';

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/:lng" element={<LanguageComponent />} />
          <Route path="*" element={<Navigate to="/en" replace />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
};

const LanguageComponent = () => {
  const navigate = useNavigate();
  const { lng } = useParams();
  const { changeLanguage, translations } = useLanguage();

  useEffect(() => {
    if (!['en', 'ru', 'uz'].includes(lng)) {
      navigate('/en', { replace: true });
    } else {
      changeLanguage(lng);
    }
  }, [lng, navigate, changeLanguage]);

  return <Home />;
};

export default App;
