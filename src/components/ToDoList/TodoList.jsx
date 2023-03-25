import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ToDoItem from './ToDoList/ToDoItem.jsx';



function ToDoList() {
    const [taskDescription, setTaskDescription] = useState('');
    const [taskMinutes, setTaskMinutes] = useState('');
    const [taskDone, setTaskDone] = useState('');
    const [listToDo, setListToDo] = useState([]);
    
    
    

//GET
const fetchToDoList = () => {
    axios.get('/toDoList').then((response) => {
        //update the array
        setListToDo(response.data);
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
    axios.post('/todolist', {
        taskdescription: taskDescription,
        minutes: taskMinutes,
        done: false,
    }).then((response) => {
        //clear inputs
        setTaskDescription('');
        setTaskMinutes(''); 
        setTaskDone('');
        fetchToDoList(); //calls the object
    }).catch((error) => {
        console.log(`Error in POST on TaskList: ${error}`);
        alert('Something wrong in POST on TaskList');
    })
};

return (
        <> 
            <h3>To Do LIst </h3>
        <form onSubmit={submitForm}>
               <th> Description:<input type="text"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                /></th>
            
            <br/>

                <th>Minutes: <input type="text"
                    value={taskMinutes}
                    onChange={(e) => setTaskMinutes(e.target.value)}
             /></th>
                
            <br/>
                Done: 
                value={taskDone}
            <input className="submitButton"type="submit" />
        </form>
        <ul>
            {
                listToDo.map((task) => (
                    <li key={task.id}>
                       Description={ToDoList.taskDescription} 
                       Minutes={ToDoList.taskMinutes}
                       Done={ToDoList.taskDone}
                       fetchToDoList={fetchToDoList}
                    </li>
                ))
            };
        </ul>
        </>


    );

} //Ends function



export default ToDoList; 