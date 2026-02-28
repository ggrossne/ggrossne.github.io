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
      </div>
      <h1>Garrett's Portfolio</h1>
      <Portfolio />
    </div>
  );
}
