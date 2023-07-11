import { todoList } from "../index.js"
import cryto from "crypto"
const todoListController = {
    getALL: async (req, res) => {

        const data = await (await fetch('http://localhost:3000/todoList')).json();

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
            await fetch('http://localhost:3000/todoList', {
                method :'post',
                body: JSON.stringify(newTodo),
                headers: {
                    "Content-Type": 'application/json; charset=UTF-8'
                }
            }).then((rs) => {
                return rs.json();
            }); 
            res.send({
                message: 'success',
                data: todoList,
                inserted: newTodo,
                status: true
            })
        } catch (error) {
            res.status(403).send({
                message: error.message,
                data: null,
                status: false
            })
        }
    }
}
export default todoListController;