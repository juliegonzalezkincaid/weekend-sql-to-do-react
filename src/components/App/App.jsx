import {useState} from 'react';
import React from 'react';
import './App.css';
import AddTask from '../AddTask/AddTask.jsx'; 
// import DeleteTask from '../DeleteTask/DeleteTask.jsx';
import Header from '../Header/Header.jsx'
import axios from 'axios';

function App () {
  
  return (
    <div>
      <h1>TO DO APP</h1>
      <Header/>
      <AddTask/>
      {/* <DeleteTask/> */}
    </div>



  );

}

export default App
