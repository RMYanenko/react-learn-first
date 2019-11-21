import React from 'react';
import Car from './Car/Car'
// import logo from './logo.svg';
import './App.css';

function App() {
  const divStyle = {
    'textAlign': 'center',
    'fontSize': '25px'
  }

  return (
    <div style={divStyle}>
      <h1 style={{color: 'green'}}>Hello, Wold</h1>
      <Car name={'Ford'} year={2018}>
        <p style={{color:'red'}}>COLOR</p>
      </Car>

      <Car name={'Audi'} year={2016}>
      <p style={{color:'green'}}>COLOR</p>
      </Car>
      <Car name={'BMW'} year={2017}>
        <p style={{color:'orange'}}>COLOR</p>
      </Car>
    </div>
    
  );
}

export default App;
