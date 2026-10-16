import React from 'react';
import './App.css';
import Portfolio from './components/Portfolio';

// If you prefer to manage your own project data you can pass a `projects` prop
// to the <Portfolio> component, otherwise it uses the `sampleProjects` array
// defined inside `src/components/Portfolio.js`.

export default function MyApp() {
  return (
    <div className="App">
      <div className="social-buttons">
        <a href="https://www.linkedin.com/in/garrett-grossner/" target="_blank" rel="noopener noreferrer" className="social-btn">LinkedIn</a>
        <a href="https://github.com/ggrossne" target="_blank" rel="noopener noreferrer" className="social-btn">GitHub</a>
        <a href={`${process.env.PUBLIC_URL}/Grossner_Resume.pdf`} target="_blank" rel="noopener noreferrer" className="social-btn">Resume</a>
      </div>
      <h1>Garrett Grossner's Portfolio</h1>
      <h2>ggrossner.work@gmail.com <br /> (707) 349-4492</h2>
      <Portfolio />
    </div>
  );
}
