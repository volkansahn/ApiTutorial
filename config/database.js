const mongoose = require('mongoose'); 
const dotenv = require('dotenv');

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
// Database Connection 
const db = () => {
    mongoose.connect(MONGO_URI,{ 
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }).then(() => {
        console.log('Database connected');
    }).catch((err) => {
        console.log(err);
    });
} 

module.exports = db;