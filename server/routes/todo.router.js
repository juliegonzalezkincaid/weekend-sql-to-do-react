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
    let queryText = `SELECT * FROM "todoList" ORDER BY id DESC`;
    pool.query(queryText)
        .then((result) => {
            // console.log(`Got stuff back from the database`, result);
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
    console.log('julie')
    const task = req.body;
    console.log(req.body)
    const queryText =`INSERT INTO "todoList" (description,minutes,done)   VALUES ($1, $2, $3)`;

        let values =[task.description, task.minutes, task.done]         
    pool.query(queryText, values)
        .then((result) => {
            console.log(`Added todoList to the database`, toDoArray);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${queryText}`, error);
            res.sendStatus(500);
        })
})
// PUT
//Take updates from  DOM, send to DB to be udpated and then resent to DOM
router.put('/:id', (req, res) => {
    console.log('In PUT request');
let taskId = req.params.id;
let taskToEdit = req.body;
console.log(taskToEdit)
let toggle;
if (taskToEdit.done === false) {
    toggle= true      
} else if ( taskToEdit.done === true) {
    toggle = false
}
let values= [ toggle, taskId]
let queryText = 'UPDATE "todoList" SET "done" = $1 WHERE "id" = $2' ;
pool.query(queryText,values ).then((result) => {
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
