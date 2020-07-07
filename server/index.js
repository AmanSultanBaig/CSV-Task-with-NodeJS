const express = require('express');
const multer = require('multer');
const path = require('path');
const productModel = require('./models/product.model');
const csv = require('csvtojson');
const bodyParser = require('body-parser');
const productController = require('./controllers/productController')

require('./config/db.config')

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

let uploads = multer({ storage: storage });

//init app  
let app = express();

//fetch data from the request  
app.use(bodyParser.urlencoded({ extended: false }));

//static folder  
app.use(express.static(path.resolve(__dirname, 'public')));
app.use('/api', productController)

app.post('/upload-csv', uploads.single('csv'), (req, res) => {
    //convert csvfile to jsonArray     
    csv()
        .fromFile(req.file.path)
        .then((jsonObj) => {
            //insertmany is used to save bulk data in database.
            //saving the data in collection(table)
            productModel.insertMany(jsonObj, (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    res.redirect('/');
                }
            });
        });
});

//assign port  
let port = process.env.PORT || 3000;
app.listen(port, __ => console.log(`server run at port ${port}`)); 