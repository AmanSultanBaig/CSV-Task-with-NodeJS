const mongoose = require('mongoose');

//connect to db
mongoose.connect('mongodb://localhost:27017/testDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to db'))
    .catch((err) => console.log(err))


module.exports = mongoose;