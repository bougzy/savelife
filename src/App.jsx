import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import Home from './Home';
import Donations from './Donations';
import DonateForm from './DonateForm';
import SubscribeForm from './SubscribeForm';
import ContactForm from './ContactForm';
import GetInvolved from './GetInVolved';
import FAQ from './FAQ';
import Donate from './Donate';
import Footer from './Footer';
import ProgramsSection from './ProgramSection';

function App() {
  return (
    <>
      <Navigation />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Donations />} />
          <Route path="/blog" element={<DonateForm />} />
          <Route path="/subscribe" element={<SubscribeForm />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/get" element={<GetInvolved />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/pro" element={<ProgramsSection />} />
        </Routes>
          <Footer />
      </div>
    </>
  );
}

export default App;
