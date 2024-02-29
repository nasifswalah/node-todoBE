const express = require('express');
const router = express.Router();

const deleted = [];
const todoList = [];

router.get('/gettodolist', (req, res) => {
    res.json(todoList);
})

router.post('/addtodoList', (req, res) => {
    console.log(req.body);
    todoList.push(req.body.todo);
    console.log(todoList);
    res.json({ message: 'Todo list added successfully' });
})

router.delete('/deletetodoList', (req, res) => {
    if (todoList.length > 0) {
        deleted.push(todoList.pop());
        console.log(todoList);
        res.json({ message: "The last item deleted successfully" })
    } else {
        res.json({ message: "There is no task to delete" });
    }
})

router.get('/deletedTasks',(req,res)=>{
    if (deleted.length > 0) {
        res.json(deleted);
    } else {
        res.json({message:"No tasks are deleted yet"});
    }
})

module.exports = router;