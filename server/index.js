const fs = require('fs');
const multer = require('multer');
const express = require('express');

let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/";

const csv = require('csvtojson')

const app = express();

global.__basedir = __dirname;

// -> Multer Upload Storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __basedir + '/uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname)
    }
});

const upload = multer({ storage: storage });

// -> Express Upload RestAPIs
app.post('/api/uploadfile', upload.single("uploadfile"), (req, res) => {
    importCsvData2MongoDB(__basedir + '/uploads/' + req.file.filename);
    res.json({
        'msg': 'File uploaded/import successfully!', 'file': req.file
    });
});

// -> Import CSV File to MongoDB database
function importCsvData2MongoDB(filePath) {
    csv()
        .fromFile(filePath)
        .then((jsonObj) => {
            console.log(jsonObj);
            // Insert Json-Object to MongoDB
            MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
                if (err) throw err;
                let dbo = db.db("testDB");
                dbo.collection("customers").insertMany(jsonObj, (err, res) => {
                    if (err) throw err;
                    console.log("Number of documents inserted: " + res.insertedCount);
                    /**
                        Number of documents inserted: 5
                    */
                    db.close();
                });
            });

            fs.unlinkSync(filePath);
        })
}

// Create a Server
app.listen(8080, __ => console.log("App is Running"))
