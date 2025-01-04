
import { useState, useEffect } from 'react';

export const HeaderDateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState('2025-01-04 19:02:36');

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
            <span>Current Date and Time (UTC): {currentDateTime}</span>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
}