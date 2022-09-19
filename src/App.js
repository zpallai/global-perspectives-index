/* eslint-disable react/no-direct-mutation-state */
import React, { useState } from 'react';
import './App.css';
import Table from './Table.js';
import Country from './Country';

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

