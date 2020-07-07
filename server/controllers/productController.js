const express = require('express')
const router = express.Router()
const productModel = require('../models/product.model');
//fetch file details  
router.get('/read-csv', (req, res) => {
    productModel.find((err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.json({
                message: "File Read successfully!",
                File: data
            })
        }
    });
});


module.exports = router