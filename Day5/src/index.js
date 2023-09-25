import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/*
import React from 'react';
import './CV.css';

const CV = () => {
  return (
    <div className="cv-container">
      <div className="photo-section">
        <img className="photo" src="sw.jpg" alt="sw" />
        <div className="info-section">
          <h1 className="name">Katie Reed</h1>
          <h2 className="job-title">Web develober & Designer</h2>
          <button className="contact-button">Contact Me</button>
        </div>
      </div>
      {/* Other sections of your CV */
   // </div>
  //);
//};

//export default CV;
