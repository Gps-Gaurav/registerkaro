// src/components/CompanyList.js
import React from 'react';

const CompanyList = ({ companies, onCompanyClick }) => {
  return (
    <ul className="company-list">
      {companies.map(company => (
        <li key={company.id} onClick={() => onCompanyClick(company)}>
          {company.name}
        </li>
      ))}
    </ul>
  );
};

export default CompanyList;