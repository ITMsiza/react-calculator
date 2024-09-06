import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    setDisplay((prev) => prev + value);
  };

  const handleClear = () => {
    setDisplay('');
  };

  const handleEquals = () => {
    try {
      const result = evaluate(display);
      setDisplay(result.toString());
    } catch {
      setDisplay('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="CalcContent">
        <div className="display">{display}</div>
        <div className="buttons">
          <button onClick={handleClear}>C</button>
          <button onClick={() => handleClick('X')}>X</button>
          <button onClick={() => handleClick('%')}>%</button>
          <button onClick={() => handleClick('/')}>/</button>
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('*')}>*</button>
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('-')}>-</button>
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('+')}>+</button>
          <button className="zero" onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button onClick={handleEquals}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
