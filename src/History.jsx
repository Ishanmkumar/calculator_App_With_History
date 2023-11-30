import React from 'react';
import './App.css'; 

const History = ({ history,setHistory, addToHistory, setCalculation, handleToggleHistory }) => {
  const handleHistoryClick = (calculation) => {
    setCalculation(calculation.split('=')[0].trim());
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="history">
      <div className="history-header">
        <button onClick={handleToggleHistory}>X</button>
        <span>History</span>
      </div>
      <div className="history-items">
        {history.map((calculation, index) => (
          <div key={index} onClick={() => handleHistoryClick(calculation)}>
            {calculation}
          </div>
        ))}
      </div>
      <button className="clear-btn" onClick={handleClearHistory}>Clear History</button>
    </div>
  );
};

export default History;
