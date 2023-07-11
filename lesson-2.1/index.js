import express from 'express';
import cryto from 'crypto';

import RootRouterV1 from './routers/v1/index.js';

const app = express();
app.use(express.json());

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



app.get('', (req, res) => {
    res.send({
        message: 'hello'
    })
})
app.listen(5001, () => {
    console.log('hello world');
})
