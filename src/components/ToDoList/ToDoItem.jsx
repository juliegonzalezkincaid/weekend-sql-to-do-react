import axios from 'axios'
import {useState} from 'react'


function ToDoItem ({ task, fetchToDoList}) {
    const[done, setTaskDone] = useState("Nope")


//PUT

const checkDone =(e) => {
    console.log(task.id)
    axios.put(`/todolist/donestatus/${task.id}`, task).then(response => {fetchToDoList();
    }).catch((error) => {
        console.log(`Error in checkDone ${error} `);
        alert('Something wrong in checkDone.');
    })
}
    return (
        <>
        
        </>
    )
}
export default ToDoItem;