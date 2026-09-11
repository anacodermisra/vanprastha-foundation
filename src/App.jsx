import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

import Contribute from './pages/Contribute';

// Additional pages
import Volunteer from './pages/Volunteer';
import InitiativeDetails from './pages/InitiativeDetails';
import Awards from './pages/Awards';
import Media from './pages/Media';
import Governance from './pages/Governance';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import RefundPolicy from './pages/RefundPolicy';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contribute" element={<Contribute />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/awards-and-recognition" element={<Awards />} />
            <Route path="/media" element={<Media />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/initiative/:id" element={<InitiativeDetails />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
