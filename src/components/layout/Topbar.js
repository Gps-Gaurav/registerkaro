// src/components/Layout/Topbar.js
import { useState, useEffect } from 'react';

const Topbar = () => {
  const [currentDateTime, setCurrentDateTime] = useState('');
  const currentUser = {
    login: 'gps-rajput',
    lastLogin: '2025-01-04 18:20:00'
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentDateTime(now.toISOString().slice(0, 19).replace('T', ' '));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-100 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center py-2 text-sm text-gray-600">
          <div className="mb-2 sm:mb-0">
            <span className="font-medium">Current Date and Time (UTC):</span>{' '}
            {currentDateTime}
          </div>
          <div className="flex items-center gap-4">
            <span className="font-medium">Current User s Login:</span>{' '}
            {currentUser.login}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;