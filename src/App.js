import React from 'react';
import './App.css';
import Table from './Table.js';
import About from './About';
import { cpi } from './CPI';

function App() {
  return (
    <>
      <div className='App'>
        <Title />
        <div className='Sections'>
          <About />
          <Table />
        </div>
      </div>
    </>
  );
}

function Title() {
  return (
  <div className='Title'> 
    <p id="title-text">
      Global Perspectives Index
    </p>
    <hr id="title-line"></hr>
  </div>
  );
}


export default App;

