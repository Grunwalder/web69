
import cryto from 'crypto';
import express from "express";
const app = express();
const todolist = [];



app.get('/welcome', (req, res) => {
    res.json({
        message: 'Welcome',
        array: [1, 2, 3, 4]
    })
})

app.get('/todolist', (req, res) => {
    res.json({
        message: 'success',
        data: todolist,
        success: true
    })
})

app.get('/todolist/add', (req, res) => {
    const { todoName } = req.query
    if (!todoName) {
        res.json({
            message: 'failed',
            data: todolist,
            success: false
        })
    } else {
        const newTodo = {
            id: cryto.randomUUID(),
            todoName: todoName,
            createAt: new Date().getTime(),
        }

        todolist.push(newTodo)
        res.json({
            message: 'success',
            data: todolist,
            success: true
        })
    }

})

app.get('/todolist/deleteID', (req, res) => {
    const { todoId } = req.query
    if (!todoId) {
        res.json({
            message: 'Delete ID failed',
            data: todolist,
            success: false
        })
    } else {
        const delTodoList = todolist.filter((item) => item.id === !todoId);
        todolist = delTodoList
        res, json({
            message: 'Delete ID success',
            data: todolist,
            success: true
        })
    }

})

app.get('/todolist/search', (req, res) => {
    const { newTodoName } = req.query
    if (!newTodoName) {
        res.json({
            data: todolist,
        })
    } else {
        const searchTodoList = todolist.filter(
            (name) => name.todoName.includes(newTodoName)
        );
        res.json({
            message: 'Search successful',
            data: searchTodoList,
        })
    }
})

app.get('/todolist/deleteAll', (req, res) => {
    todolist.length = 0;
    res.json({
        message: 'Delete all successfully',
        data: todolist,
    })
})

app.get('/todolist/update', (req, res) => {
    const { todoID, updateTodoName } = req.query
    const findID = todolist.findIndex((item) => item.id === todoID);
    if (findID == -1) {
        res.json({
            message: 'No such item',
            data: todolist
        })
    } else {
        const newTodoList = {
            id: todoID,
            todoName: updateTodoName,
            createAt: new Date().getTime(),
        }
        todolist[findID] = newTodoList
        res.json({
            message: 'Updated',
            data: todolist,
        })
    }
})


app.listen(8002, () => {
    console.log('hello world');
})
