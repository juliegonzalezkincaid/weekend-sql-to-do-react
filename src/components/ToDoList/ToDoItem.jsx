import axios from 'axios'
import {useState} from 'react'


function ToDoItem ({ task, fetchToDoList}) {
    const[done, setTaskDone] = useState("Nope")


//PUT
const checkDone =(e) => {
    console.log(task.id)
    axios.put(`/todolist/${task.id}`, task).then(response => {fetchToDoList();
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

//LINE THROUGH DECORATION
const getDecoration = () => {
    if(task.complete === true) {
        return 'line-through';
    }else {
        return 'none';
    }
}
return (
    <>
    </>
)

}
export default ToDoItem;