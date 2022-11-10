import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Header from './TK/Header';
import Footer from './TK/Footer';
import Section from './TK/Section';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header></Header>
    <Section></Section>
    <Footer></Footer>
  </React.StrictMode>
);

reportWebVitals();
