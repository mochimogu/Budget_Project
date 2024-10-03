const PORT = 4321;
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const transaction = require('./routes/transactions')
const server = express();

server.use(cors())
server.use(express.json())


server.use('/api/v1/transaction', transaction);

server.get('/', (req, res) => {
    res.status(200);
})




server.listen(PORT, ()=> {
    console.log(`LISTENING TO PORT : ${PORT }`)
})
