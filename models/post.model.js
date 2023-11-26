const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true, // removes whitespace
        },
    body: {
        type: String,
        unique: true,        
    },
    stok:{
        type: Number,
        deafult: 0
    },
    date:{
        type: Date,
        default: new Date()
    }
    },
    {
    timestamps: true,
});

module.exports = mongoose.model('Post', postSchema);