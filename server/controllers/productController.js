const express = require('express')
const router = express.Router()
const productModel = require('../models/product.model');
//fetch file details  
router.get('/read-csv', (req, res) => {
    productModel.find()
        .then(data => {
            res.status(200).json({
                message: 'Data Retrived',
                result: data
            })
        })
        .catch(err => {
            res.status(401).json({
                message: "read-csv file Error",
                error: err
            })
        })
});

// get product by its id 
router.get('/product/:productId', (req, res) => {
    productModel.findById(req.params.productId)
        .then(product => {
            res.status(200).json({
                message: 'Product ByID Retrived',
                result: product
            })
        })
        .catch(err => {
            res.status(403).json({
                message: "productby Id file Error",
                error: err
            })
        })
})

module.exports = router