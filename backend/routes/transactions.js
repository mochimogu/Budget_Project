const express = require('express');
const trans = express.Router();

trans.use(express.urlencoded({extended : true}));

const mockArray = []


trans.get('/get', (req, res) => {

    res.status(200).json({'data' : mockArray});


})


trans.post('/insert', (req, res) => {
    console.log(req.body);

    const sending = {
        item : req.body.data.item,
        quantity : req.body.data.quantity,
        amount : req.body.data.amount,
        type : req.body.data.type
    }

    mockArray.push(sending);

    res.status(200).json(sending);

})



module.exports = trans;
