import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PortfolioHero, ScrollToTop } from './components';
import { SalesforcePage, WriterPage, ChasePage, ChorusPage } from './pages';
import './styles/global.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<PortfolioHero />} />
          <Route path="/salesforce" element={<SalesforcePage />} />
          <Route path="/writer" element={<WriterPage />} />
          <Route path="/chase" element={<ChasePage />} />
          <Route path="/chorus" element={<ChorusPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
