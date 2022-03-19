import { Global } from '@emotion/react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { globalStyles } from './theme';
import copy from './assets/copy/'
import Navbar from './components/Navbar.jsx';

import Home from './pages/Home.jsx';
import Calculator from './pages/calculator/Calculator.jsx';
import Eligibility from './pages/Eligibility.jsx';
import About from './pages/About.jsx';
import Resources from './pages/Resources.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Language lang="en" />} />
          <Route path="/en/*" element={<Language lang="en" />} />
          <Route path="/es/*" element={<Language lang="es" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Language( {lang} ) {
  copy.setLanguage(lang);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home copy={copy.home}  />} />
        <Route path="calculator" element={<Calculator copy={copy.calculator} />} />
        <Route path="eligibility" element={<Eligibility copy={copy.eligibility} />} />
        <Route path="about" element={<About copy={copy.about} />} />
        <Route path="resources" element={<Resources copy={copy.resources} />} />
        <Route path="*" element={<NotFound copy={copy.notFound} />} />
      </Routes>
    </>
  );
}

export default App;
