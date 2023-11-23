const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true, // removes whitespace
        },
    email: {
        type: String,
        required: true,
        unique: true,        
    },
    password: {
        type: String,
        required: true,
    },
    },
    {
    timestamps: true,
});

module.export = mongoose.model('User', userSchema);