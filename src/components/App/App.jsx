import {useState} from 'react';
import React from 'react';
import './App.css';
import AddTask from '../AddTask/AddTask.jsx'; 
// import DeleteTask from '../DeleteTask/DeleteTask.jsx';
import Header from '../Header/Header.jsx'
import axios from 'axios';
import ToDoList from '..ToDoList/ToDoList';

function App () {
  const[headerText, setHeaderText] = useState('')
  return (
    <div>
      {/* headerTextProp is the name of our prop 
      {headerText} is the value we are assigning to the prop*/}
      <h1>TO DO APP</h1>
      <Header headerTextProp={headerText}/>
      <AddTask/>
      <ToDoList />
      {/* <DeleteTask/> */}
    </div>



  );

}

export default App
