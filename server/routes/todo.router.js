const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// let toDoArray =[];
// GET
// When you fetch all things in these GET routes, strongly encourage ORDER BY
    // so that things always come back in a consistent order 
    
router.get('/', (req, res) => {
    
    console.log(`Get request for /toDoList`);
    let queryText = `SELECT * FROM "toDoList"`;
    pool.query(queryText)
        .then((result) => {
            console.log(`Got stuff back from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${queryText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})
let toDoArray =[];
//POST
//Setup a POST route to add a new creature to the database
// Let sql sanitize your inputs (NO Bobby Drop Tables here!)
// the $1, $2, etc get substituted with the values from the array below
router.post('/', (req, res) => {
    const AddTask = req.body;
    const queryText =`INSERT INTO toDoList (description, minutes)
                     VALUES ($1, $2)`;
    pool.query(queryText, [AddTask.description, AddTask.minutes])
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
router.put('/:id', (req, res) => {
    console.log('In PUT request');
let taskId = req.params.id;
let taskToEdit = req.body;
let queryText = 'UPDATE "toDoList" SET "description" = $1, "minutes" = $2, "done" = $3';
pool.query(queryText, [taskToEdit.taskDescription, taskToEdit.minutes, taskToEdit.taskDone ]).then((result) => {
    res.sendStatus(200);
}).catch((error) => {
    console.log(`Error in PUT: ${error} `);
    res.sendStatus(500);
})
});


// DELETE
router.delete('/:id', (req, res) => {
    const deleteIndex = Number(req.params.id);
    let queryText = `DELETE FROM "toDoList" WHERE "id" = $1`;
    pool.query(queryText, [deleteIndex]).then((result) => {
    res.sendStatus(200);
}).catch((error) => {
    console.log(`Error in DELETE: ${error}`)
    res.sendStatus(500);
})
});

module.exports = router;
