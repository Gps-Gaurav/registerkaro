import React, { useState, useEffect } from 'react';

// CompanyDetails component remains the same
const CompanyDetails = ({ company, onClose }) => {
  if (!company) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{company.name}</h2>
        <p className="text-gray-700 mb-4">{company.details}</p>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Directors:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          {company.directors.map((director, index) => (
            <li key={index} className="text-base">{director.name}</li>
          ))}
        </ul>
        <button
          className="mt-6 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition duration-200"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

// Modified Companies component with dynamic data fetching
const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all companies on component mount
  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const response = await fetch('/api/companies');
      if (!response.ok) {
        throw new Error('Failed to fetch companies');
      }
      const data = await response.json();
      setCompanies(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCompanySelect = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/companies?id=${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch company details');
      }
      const companyData = await response.json();
      setSelectedCompany(companyData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setSelectedCompany(null);
  };

  if (loading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 p-4">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Companies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((comp) => (
          <div key={comp.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{comp.name}</h2>
            <p className="text-gray-600 mb-4">{comp.details}</p>
            <button
              className="text-blue-600 hover:text-blue-800"
              onClick={() => handleCompanySelect(comp.id)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {selectedCompany && (
        <CompanyDetails company={selectedCompany} onClose={closeModal} />
      )}
    </div>
  );
};

export default Companies;