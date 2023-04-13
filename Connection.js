const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/Store'; 
/* 'mongodb+srv://ElianDev04:Elianpassword@cluster0.wipsa61.mongodb.net/?retryWrites=true&w=majority';   */

mongoose.connect(uri)
.catch(err => console.log(err))

const db = mongoose.connection


db.on('open', () => {
    console.log('Database is connected to', uri)
})

db.on('error', (err) => {
    console.log(err)
})