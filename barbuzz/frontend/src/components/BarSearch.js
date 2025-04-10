import React, { useState, useEffect } from 'react';
import { fetchBars, fetchWaitTimes } from '../services/api';

const BarSearch = () => {
  const [bars, setBars] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBar, setSelectedBar] = useState(null);
  const [waitTime, setWaitTime] = useState(null);

  useEffect(() => {
    const loadBars = async () => {
      const response = await fetchBars({ search: searchTerm });
      setBars(response.data);
    };
    loadBars();
  }, [searchTerm]);

  const handleBarSelect = async (bar) => {
    setSelectedBar(bar);
    const response = await fetchWaitTimes(bar.id);
    setWaitTime(response.data[0]?.minutes || 'No data');
  };

  return (
    <div className="bar-search">
      <input
        type="text"
        placeholder="Search bars..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <div className="results">
        {bars.map(bar => (
          <div key={bar.id} onClick={() => handleBarSelect(bar)}>
            {bar.name} - {bar.address}
          </div>
        ))}
      </div>

      {selectedBar && (
        <div className="wait-time">
          <h3>{selectedBar.name}</h3>
          <p>Current wait time: {waitTime} minutes</p>
        </div>
      )}
    </div>
  );
};

export default BarSearch;
