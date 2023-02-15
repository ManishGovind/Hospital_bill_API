
var express = require('express');
const bill = require('../models/Bill_Model')
var router = express.Router();

/* GET users listing. */


router.post('/items', async (req, res) => {
    await bill.createBill(req.body)
            .then(bill => res.status(201).json({
                message: `The bill  with id ${bill["id"]} has been created`
            }))
            .catch(err => res.status(500).json({ message: err.message }))
    
});

router.get('/items', async (req, res) => {
    await bill.getBills()
        .then(bills => res.json({
            message: `List of All bills`,
            bills: bills
        }))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            } else {
                res.status(500).json({ message: err.message })
            }
        })
   
});

module.exports = router;
