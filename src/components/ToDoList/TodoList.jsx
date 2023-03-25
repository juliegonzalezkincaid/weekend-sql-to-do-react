import { useState, useEffect } from 'react';
import axios from 'axios';
import ToDoItem from './ToDoItem';


function ToDoList() {
    const [taskDescription, setTaskDescription] = useState('');
    const [taskMinutes, setTaskMinutes] = useState('');
    const [taskDone, setTaskDone] = useState('');
    const [listToDo, setListToDo] = useState([]);
    const fetchTodoList = () => {
       
}

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
            <h3>Add a Task To Do </h3>
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
            <input className="submitButton"type="submit" />
        </form>
        <ul>
            {
                listToDo.map((task) => (
                    <li key={task.id}>
                       description={description.taskDescription} 
                       minutes={minutes.taskMinutes}
                       done={done.taskDone}
                       fetchToDoList={fetchToDoList}
                    </li>
                ))
            };
        </ul>
        </>


    );


// }//Ends function



export default ToDoList; 