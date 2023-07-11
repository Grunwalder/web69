const express = require('express');
const app = express();
const PORT = 8003
const router = require('./router');

app.use(express.json())
app.use(router)


app.listen(PORT, () => {
    console.log('server is listening on port')
})