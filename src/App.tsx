import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Domain from './pages/Domain';
import Milestones from './pages/Milestones';
import Documents from './pages/Documents';
import Presentations from './pages/Presentations';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="domain" element={<Domain />} />
          <Route path="milestones" element={<Milestones />} />
          <Route path="documents" element={<Documents />} />
          <Route path="presentations" element={<Presentations />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;