// Calculator.jsx

import React, { useReducer } from 'react';
import Display from './Display';
import '../App.css';

const Calculator = () => {
  const initState = {
    inputs: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_INPUT":
        return { inputs: state.inputs + action.value };

      case "CALCULATE":
        return { inputs: eval(state.inputs) };

      case "CLEAR":
        return { inputs: "" };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const handleInputs = (value) => {
    // Check if the clicked value is an operator
    const isOperator = ['+', '-', '*', '/'].includes(value);

    // Check if the last input in the state is also an operator
    const lastInputIsOperator = state.inputs.length > 0 && ['+', '-', '*', '/'].includes(state.inputs.slice(-1));

    // Only allow the new operator if the last input is not an operator
    if (isOperator && lastInputIsOperator) {
      return;
    }

    dispatch({ type: "ADD_INPUT", value: value });
  };

  const handleCalculate = () => {
    dispatch({ type: "CALCULATE" });
  };

  const handleClear = () => {
    dispatch({ type: "CLEAR" });
  };

  return (
    <div id="calsi" className="calculator-container">
      <Display inputData={state.inputs} className="display" />
      <div className="button-container">
        <button className="button" onClick={() => handleInputs("1")}>1</button>
        <button className="button" onClick={() => handleInputs("2")}>2</button>
        <button className="button" onClick={() => handleInputs("3")}>3</button>
        <button className="button operator" onClick={() => handleInputs("+")}>+</button>
        <button className="button" onClick={() => handleInputs("4")}>4</button>
        <button className="button" onClick={() => handleInputs("5")}>5</button>
        <button className="button" onClick={() => handleInputs("6")}>6</button>
        <button className="button operator" onClick={() => handleInputs("-")}>-</button>
        <button className="button" onClick={() => handleInputs("7")}>7</button>
        <button className="button" onClick={() => handleInputs("8")}>8</button>
        <button className="button" onClick={() => handleInputs("9")}>9</button>
        <button className="button operator" onClick={() => handleInputs("*")}>*</button>
        <button className="button equal" onClick={() => handleCalculate()}>=</button>
        <button className="button" onClick={() => handleInputs("0")}>0</button>
        <button className="button clear" onClick={() => handleClear()}>C</button>
        <button className="button operator" onClick={() => handleInputs("/")}>/</button>
      </div>
    </div>
  );
};

export default Calculator;
