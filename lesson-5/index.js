import express from "express";
import mongoose from "mongoose";
import TodoModel from './models/todolist.js';
import { getProjection } from "./utilities/index.js";

const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/web69').then((rs) => {
    console.log('connection established');
}).catch((err) => {
    console.log(err);
});

app.get('/api/v1/todo', async (req, res) => {
    try {
        const projection = req.query;
       
       
        const listTodo = await TodoModel.find({
            isDrop: false
        },getProjection(projection));
           
        res.status(200).send({
            message: 'success',
            data: listTodo,
            success: true

        })
    } catch (err) {
        res.status(500).send({
            message: err.message,
            success: false,
            data: null
        })
    }
});

app.post('/api/v1/todo', async (req, res) => {
    try {
        const data = req.body;
        const createdData = await TodoModel.create(data)
        res.status(201).send({
            message: 'success',
            data: createdData,
            success: true
        })

    } catch (err) {
        res.status(403).send({
            message: err.message,
            data: null,
            success: false
        });
    }
});

app.put('/api/v1/todo/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updateField = req.body
        const updateTodo = await TodoModel.findByIdAndUpdate(id, {
            _id: id
        }, {
            ...updateField
        }, {
            new: true
        });

        res.status(201).send({
            message: 'success',
            data: updateTodo,
            success: true
        })

    } catch (err) {
        res.status(403).send({
            message: err.message,
            data: null,
            success: false
        });
    }
});

app.listen(3010, () => {
    console.log('server is running')
});