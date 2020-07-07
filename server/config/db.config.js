const mongoose = require('mongoose');

//connect to db
mongoose.connect('mongodb://localhost:27017/CSV-DB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB Connection Established'))
    .catch((err) => console.log(err))

module.exports = mongoose;