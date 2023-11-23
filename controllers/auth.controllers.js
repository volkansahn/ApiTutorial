const userModel = require('../models/user.model.js');

const register = async (req,res) => {
    const { username, email, password } = req.body;
    const name = userModel.findOne({ username });
    if(name){
        return res.status(500).jsom({ message: 'Username already exist'});
    }
    const userEmail = userModel.findOne({ email });
    if(userEmail){
        return res.status(500).jsom({ message: 'Email already exist'});
    }
    
    const user = new userModel({ username, email, password });
} // register function

const login = async (req,res) => {
    
} // login function

modeule.exports = { register, login }; // export the functions