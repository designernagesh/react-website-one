import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Components from './pages/Components';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/About" element={<About />} />
      <Route path="/Pricing" element={<Pricing />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Components" element={<Components />} />
      <Route path="*" element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />  
    </Routes>
    <Header />
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);
