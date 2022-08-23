import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Routes, 
} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Donate from './components/Donate';
import Header from './components/Header';
import Footer from './components/Footer';
import Donationform from './components/Donationform';
import Contact from './components/Contact';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
      </Routes>
      <Routes>
        <Route path="Donationform" element={<Donationform />} />
      </Routes>
      <Routes>
        <Route path="about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="donation" element={<Donate />} />
      </Routes>
      <Routes>
        <Route path="contact" element={<Contact />} />
      </Routes>
      < Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);