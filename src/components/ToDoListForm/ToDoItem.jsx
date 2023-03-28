import axios from 'axios'
import {useState} from 'react'
import '../App/App.css';

function ToDoItem ({task, fetchToDoList}) {
    const[done, setTaskDone] = useState("Nope")


//PUT
const checkDone =(e) => {
    console.log(task.id)
    axios.put(`/todolist/${task.id}`, task).then(response => {
        setTaskDone(true);
        fetchToDoList();
    }).catch((error) => {
        console.log(`Error in checkDone ${error} `);
        alert('Something wrong in checkDone.');
    })
}// end of checkDone function


//DELETE

const deleteTask =(e) => { 
    console.log(`delete task ${task.id}`);
    axios.delete(`/todolist/${task.id}`).then((response) => {
        fetchToDoList();
    }).catch((error) => {
        console.log(`Error in deleteTask ${error}`);
        alert('Something went wrong in deleteTask');
    
    })
}//end of delete function
let taskDone;
    if (task.taskDone === true) {
        taskDone = "Yes"
    } else if (task.taskDone=== false) {
         taskDone= "No"
    }; 


const changeColor = () => {
    if (taskDone === "Yes") {
        return 'green'
    } else {
        return 'none'
    };
} //end changeColor()

let toggle
if (task.done=== true) {
toggle= 'no'

} else if (task.done=== false){
    toggle= 'yes'
}
return (
    <>
    <li style={{backgroundColor: changeColor()}} className='toDoItem'>
    <p>{task.description}</p>
    <p>{task.minutes}</p>
    <p>{toggle}</p>
    
    <button className='done-button' onClick={(e) =>checkDone (e)} >Check Done </button>
  
    <button className='delete-button' onClick= {(e) => deleteTask(e)}>Delete 
       </button>
</li>
    </>
)

}
export default ToDoItem;