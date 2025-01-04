// src/components/CompanyDetails.js
import React from 'react';

const CompanyDetails = ({ company, directors }) => {
  return (
    <div className="company-details">
      {company && (
        <>
          <h2>{company.name}</h2>
          <p>{company.details}</p>
          <h3>Directors</h3>
          <ul>
            {directors.map(director => (
              <li key={director.id}>{director.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default CompanyDetails;