import './App.css';
import React, { useState } from 'react';
import { BarChart, Bar, ResponsiveContainer,XAxis, YAxis, LabelList } from 'recharts';
import Button from './Button';
import TextField from './TextField';



function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownD, setShowDropdownD] = useState(false);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  }; 

  const handleIncrement = (value) => {
    setCount(count + value);
  };

  const handleDecrement = (num) => {
    setCount(count - num);
  };
  const BARGRAPH = () => {
  const data = [
    {name: "pushup", value: count + 0.7},
    {name: "situps", value: count + 1}
  ];
    return(
      <div className="graph">
    <h1>how many calories you would lose in each per rep in a differet exercise</h1>
    <ResponsiveContainer width="100%" height={100}>
      <BarChart width={150} height={40} data={data}>
      <XAxis dataKey="name" />
      <Bar dataKey="value" fill="#8884d8" />
      <YAxis />
      <LabelList dataKey="value" position="top" />
      </BarChart>
    </ResponsiveContainer>
      </div>

    );
};
  

  const handleReset = () => {
    setCount(0);
  };
  const getSVGGraphic = () => {
      if (count <= 10) {
      return <svg width="2000" height="1000">
      <rect x="992" y="50" width="310" height="80" fill="green" stroke="yellow" />

      <text x="992" y="100" fontFamily="blocky" fontSize="50" fill="yellow" >

      KEEP GOING
      </text>
      </svg>
  }else{
    if(count > 10)
    return <svg width="2000" height="1000">
    <rect x="890" y="50" width="410" height="80" fill="yellow" stroke="red" />

    <text x="890" y="100" fontFamily="flame" fontSize="50" fill="red" >

    FEEL 
    THE BURN
    </text>
    </svg>
  }
  
  };

  return (
    <div className="App">
    <div className="stuff-left">
    <h1>amount of reps: {count}</h1>
    <button onClick={() => setShowDropdown(!showDropdown)}>
    Increment
    </button>
    {showDropdown && (
    <div className="incrementdropdown">
    <Button label="Increment1" onClick={() => handleIncrement(1)} />
    <Button label="Increment5" onClick={() => handleIncrement(5)} />
    <Button label="increment10" onClick={() =>handleIncrement(10)} />
    <Button label="Increment100" onClick={() => handleIncrement(100)} />
    </div>
    )}
    <button onClick={() => setShowDropdownD(!showDropdownD)}>
    Decrement
    </button>
    {showDropdownD && (
    <div className="decrementdropdown">     
    <Button label="Decrement1" onClick={() =>handleDecrement(1)} />
    <Button label="Decrement5" onClick={() =>handleDecrement(5)} />
    <Button label="Decrement10" onClick={() =>handleDecrement(10)} />
    <Button label="Decrement100" onClick={() =>handleDecrement(100)} />
    </div>
    )}
    <Button label="Reset" onClick={handleReset} />
    </div>
      <div className="text">
      <h1>You are doing : {inputValue}</h1>
      <TextField value={inputValue} onChange={handleChange} />
      </div>
      <div className="graphic">
      {getSVGGraphic()}
      </div>
      <div className="Bar">
      <BARGRAPH />
      </div>
      </div>
    );
}



export default App;
