import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ToDoItem from './ToDoItem';



function ToDoList() {
    const [taskDescription, setTaskDescription] = useState('');
    const [taskMinutes, setTaskMinutes] = useState('');
    const [taskDone, setTaskDone] = useState('');
    const [listToDo, setListToDo] = useState([]);
    
    
    

//GET
const fetchToDoList = () => {
    axios.get('/todoList').then((response) => {
        //update the array
        setListToDo(response.data);
        console.log(listToDo)
    }).catch((error) => {
        console.log(`Error in GET ${error}`);
        alert('Something is wrong.');
    });
}

useEffect(() => {
    fetchToDoList();
}, []);


//POST
const submitForm = (e) => {
    e.preventDefault();
    axios.post('/todoList', {
        description: taskDescription,
        minutes: taskMinutes,
        done: false,
    }).then((response) => {
        //clear inputs
        setTaskDescription('');
        setTaskMinutes(''); 
        setTaskDone('');
        fetchToDoList(); //calls the object
    }).catch((error) => {
        console.log(`Error in POST on ToDoList: ${error}`);
        alert('Something wrong in POST on ToDoList');
    })
};

return (
        <div id="list"> 
            <h3>To Do List </h3>
        <form onSubmit={submitForm}>
               Description:<input type="text"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
               /> 
            
            <br/>

               Minutes: <input type="number"
                    value={taskMinutes}
                    onChange={(e) => setTaskMinutes(e.target.value)}
            
               /> 
            <br />
                <li className ="checked"> Done: </li> 
                
            <input className="submitButton"type="submit" />
        </form>
        <ul>
            {listToDo.map((task) => (
                    < ToDoItem
                       key={task.id}
                       task={task}
                       fetchToDoList={fetchToDoList}
                    />
                ))
            }
        </ul>
        </div>


    );

} //Ends function



export default ToDoList; 