import { todoList } from "../index.js"
import cryto from "crypto"
import mapApi from "../global/index.js"

const todoListController = {
    getALL: async (req, res) => {

        const data = await (await fetch(`${mapApi}/TodoList`)).json();

        console.log('line 8', data)
        res.send({
            message: 'connection successful',
            data: data,
            status: true
        });
    },
    getOneById: (req, res) => {
        const { id } = req.params
        const crrTodo = todoList.find((item) => {
            return item.id === id;
        });
        res.send({
            message: 'success',
            data: crrTodo,
            status: true
        });
    },
    create: async (req, res) => {
        try {
            const { todoName } = req.body;
            if (!todoName) throw new Error('Invalid name');


            const newTodo = {
                id: cryto.randomUUID(),
                todoName: todoName,
                date: (new Date).getTime()
            };
            const insert = await (await fetch('${mapApi}/todoList', {
                method: 'post',
                body: JSON.stringify(newTodo),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })).json();
            if (!insert) throw new Error('Không thành công');
            res.status(201).send({
                message: "Thành công!",
                data: insert,
                success: false
            });
        } catch (error) {
            res.status(403).send({
                message: error.message,
                data: null,
                success: false
            });
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params
            const { todoName, date } = req.body;
            const updateTodo = await (await fetch(`${mapApi}/todoList/${id}`), {
                method: 'PUT',
                body: JSON.stringify({
                    todoName,
                    date
                }),
                headers: {
                    "content-type": "application/json; charset=utf-8",
                }
            }.JSON());
            res.status(201).send({
                data: updateTodo,
                message: successful,
                status: true
            })


        } catch (error) {
            console.log(error.message);
            res.status(500).send({
                message: error.message,
                data: null,
                status: false
            })
        }
    }

}



export default todoListController;