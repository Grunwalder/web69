import express from 'express';
import cryto from 'crypto';
import dotenv from 'dotenv';
import RootRouterV1 from './routers/v1/index.js';

dotenv.config();
const app = express();
app.use(express.json());

export const mapApi = `${process.env.API_DB_HOST_DEV}:${process.env.API_DB_HOST_PORT}`

export const todoList = [
    {
        id: cryto.randomUUID(),
        todoName: 'abc',
        date: new Date()
    },
    {
        id: cryto.randomUUID(),
        todoName: '123',
        date: new Date()
    },
    {
        id: cryto.randomUUID(),
        todoName: '456',
        date: new Date()
    }
]

app.use('/api/v1', RootRouterV1);



app.get('', (_, res) => {
    res.send({
        message: 'hello'
    })
})
app.listen(5001, () => {
    console.log('hello world');
})
