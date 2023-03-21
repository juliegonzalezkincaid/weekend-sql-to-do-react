import { useState, useEffect } from 'react';
import axios from 'axios';

function ToDoList() {
    const [listToDo, settoDoList] = useState([])
    const fetchtoDoList = () => {
   
     axios.get('/toDoList').then((response) => {
        //update the array
        settoDoList(response.data);
    }).catch((error) => {
        console.log(`Error in GET ${error}`);
        alert('Something is wrong.');
    });
}
}
useEffect(() => {
    fetchtoDoList();
}, []);
// const AddTask =(evt) =>{
//     evt.preventDefault();
   
// }

return (
        <> 
            <h3>Add a Task To Do </h3>
        <form >
               <th> Description:</th>
            
            <br/>

                <th></th>Minutes: 
                
            <br/>
                Done: 
            <input type="submit" />
        </form>
        <ul>
            {
                listOfTasks.map((task) => (
                    <li key={task.id}>
                       Description: {description.taskDescription} 
                       Minutes: {minutes.taskMinutes}
                       Done: {done.completionStatus}
                    </li>
                ))
            };
        </ul>
        </>


    );


// }//Ends function



export default ToDoList; 