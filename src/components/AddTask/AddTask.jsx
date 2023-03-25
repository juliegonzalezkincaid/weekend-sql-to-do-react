// import { useState, useEffect } from 'react';
// // import DeleteTask from '../DeleteTask/DeleteTask.jsx';
// import './AddTask.css';
// import axios from 'axios';


// function AddTask () {
//     const [taskDescription, setTaskDescription] = useState('');
//     const [taskMinutes, setTaskMinutes] = useState('');
//     const [taskDone, setTaskDone] = useState('');
//     const [toDoArray, settoDoArry] = useState([]);
//     const fetchAddtask = () => {
       
//      axios.get('/toDoList').then((response) => {
//         settoDoArry(response.data);
//     }).catch((error) => {
//         console.log(`Error in GET ${error}`);
//         alert('Something wrong in GET');
//     });
// }

// useEffect(() => {
//      fetchAddtask();
//   }, []);
   
//     const submitForm = (e) => {
//         e.preventDefault();
//         console.log(`The task is ${taskDescription} and the minutes it takes is  ${taskMinutes}`);


//         axios.post('/toDoList', {
//             description: taskDescription,
//             minutes: taskMinutes,
//             done: taskDone
//         }).then((response) => {
//             setTaskDescription('');
//             setTaskMinutes('');
//             setTaskDone('');
//             fetchAddtask();
//         }).catch((error) => {
//             console.log(`Error in POST ${error}`)
//             alert('Something is wrong in POST');
//         })
//     }
  

// return (
//     <section className="add-task-section">
//     <form onSubmit={submitForm}>
//       <label>Description:</label>
//             <input id="name-input" value={taskDescription} onChange={e => taskDescription(e.target.value)} />
//             <br></br>
//       <label>Minutes it takes:</label>
//             <input id="minutes-input" value={taskMinutes} onChange={e => taskMinutes(e.target.value)} />
//             <br></br>
//       <input type="submit"/>
//     </form>
//     <p>
//       {taskDescription} takes  "{taskMinutes}".
//     </p>
//     <ul>
     
    
//       {JSON.stringify(toDoArray)}
       
//       {
//      toDoArray.map((todo) => {
//           console.log(todo);
//           return <li key={todo.description}>{todo.minutes}</li>
//         })

//       }
//     </ul>
//   </section>
// );
//   }

// export default AddTask;



{/* // function deleteItem () { */}


{/* // const fetchdeleteItem = () => { */}
/* //     axios.delete('/shoppingList').then((response) => {
//         //update the array
//         setShoppingList(response.data);
//     }).catch((error) => {
//         console.log(`Error in GET ${error}`);
//         alert('Something wrong in GET');
//     });
// } */
