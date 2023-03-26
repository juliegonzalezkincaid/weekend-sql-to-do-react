const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// Data base connection weekend-to-do-app
let toDoArray =[];

// GET
// When you fetch all things in these GET routes, strongly encourage ORDER BY
    // so that things always come back in a consistent order 
    
router.get('/', (req, res) => {
    
    console.log(`Get request for /todoList`);
    let queryText = `SELECT * FROM "todoList"`;
    pool.query(queryText)
        .then((result) => {
            console.log(`Got stuff back from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query , ${error}`);
            res.sendStatus(500); // Good server always responds
        })
})

//POST
//Setup a POST route to add a new task to the database

router.post('/', (req, res) => {
    const task = req.body;
    const queryText =`INSERT INTO "todoList" (taskdescription, taskminutes, taskdone)
                     VALUES ($1, $2, $3)`;
        let values =[task.description, task.minutes, task.done]         
    pool.query(queryText, values)
        .then((result) => {
            console.log(`Added toDoList to the database`, toDoArray);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${queryText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})
// PUT
//Take updates from  DOM, send to DB to be udpated and then resent to DOM
router.put('/:id', (req, res) => {
    console.log('In PUT request');

let taskToEdit = req.body;
let taskDone;
if (taskToEdit.taskDone === false) {
    taskDone = true      
} else if ( taskToEdit.taskDone === true) {
    taskDone = false
}
let queryText = 'UPDATE "todoList" SET "description" = $1, "minutes" = $2, "done" = $3';
pool.query(queryText, [taskToEdit.id]).then((result) => {
    res.sendStatus(200);
}).catch((error) => {
    console.log(`Error in PUT: ${error} `);
    res.sendStatus(500);
})
});


// DELETE
router.delete('/:id', (req, res) => {
    const deleteIndex = Number(req.params.id);
    let queryText = `DELETE FROM "todoList" WHERE "id" = $1`;
    pool.query(queryText, [deleteIndex]).then((result) => {
    res.sendStatus(200);
}).catch((error) => {
    console.log(`Error in DELETE: ${error}`)
    res.sendStatus(500);
})
});

module.exports = router;
