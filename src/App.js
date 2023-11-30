import React, { useState, useEffect } from 'react';
import Calculator from './Calculator';
import History from './History';
import './App.css'; 

const App = () => {
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [calculation, setCalculation] = useState('0');

  useEffect(() => {
    const storedHistory = localStorage.getItem('calculatorHistory');
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('calculatorHistory', JSON.stringify(history));
  }, [history]);

  const addToHistory = (calculation) => {
    setHistory([...history, calculation]);
  };

  const handleToggleHistory = () => {
    setShowHistory(!showHistory);
  };


  return (
    <div className="app" >
      <Calculator
        calculation={calculation}
        setCalculation={setCalculation}
        handleToggleHistory={handleToggleHistory}
        addToHistory={addToHistory}
        showHistory={showHistory}
      />
      {showHistory && (
        <History
          history={history}
          setHistory={setHistory}
          addToHistory={addToHistory}
          setCalculation={setCalculation}
          handleToggleHistory={handleToggleHistory}
         
        />
      )}
    </div>
  );
};

export default App;
