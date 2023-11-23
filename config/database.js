const mongoose = require('mongoose'); 
const dotenv = require('dotenv');

dotenv.config();
const db = process.env.MONGO_URI;
// Database Connection 
mongoose.connect(,{ 
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true
}); 
