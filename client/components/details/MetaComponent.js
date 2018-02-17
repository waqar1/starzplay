/*
    ./client/components/details/MetaComponent.jsx
*/
import React from 'react';
//import '../app.css';

const MetaComponent = ({ movieDetails }) => {
  return (
    <div className="meta-details">
      <div>
        <h1>{movieDetails.original_title}</h1>
        <div>
          <span>{movieDetails.release_date}</span>&nbsp;|&nbsp; 
          <span>{parseFloat(movieDetails.popularity).toFixed(2)}</span>&nbsp;|&nbsp; 
          <span>{movieDetails.runtime} minutes</span>
        </div>
        <p>{movieDetails.overview}</p>
      </div>
    </div>
  );
};

export default MetaComponent;