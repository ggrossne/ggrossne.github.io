import React, { useState } from 'react';
import './Portfolio.css';

export default function ProjectCard({ title, date, description, imageUrl, url }) {
  const [imageLoaded, setImageLoaded] = useState(true);

  return (
    <div className="project-card">
      {imageUrl && imageLoaded && (
        <img
          src={imageUrl}
          alt=""
          className="project-image"
          onError={() => setImageLoaded(false)}
        />
      )}
      <div className="project-info">
        <h2 className="project-title">{title}</h2>
        <p className="project-date">{date}</p>
        <p className="project-description">{description}</p>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-btn"
          >
            Visit
          </a>
        )}
      </div>
    </div>
  );
}
