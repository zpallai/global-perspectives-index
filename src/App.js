import React from 'react';
import './App.css';
import Table from './Table.js';
import Country from './Country';
import { cpi } from './CPI';

function App() {
  return (
    <>
      <div className='App'>
        <Title />
        <div className='Sections'>
          <p>+ About</p>
          <p>+ Country in Detail</p>
            <Country />
          <p>+ Rankings</p>
        </div>
        <Table />
      </div>
    </>
  );
}

function Title() {
  return (
  <div className='Title'> 
    <p>
      Global Perspectives Index
    </p>
  </div>
  );
}


export default App;

