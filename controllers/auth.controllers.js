const userModel = require('../models/user.model.js');
const bcrypt = require('bcryptjs');

const register = async (req,res) => {
    const { username, email, password } = req.body;
    const name = await userModel.findOne({ username });
    if(name){
        return res.status(500).json({ message: 'Username already exist'});
    }
    const userEmail = await userModel.findOne({ email });
    if(userEmail){
        return res.status(500).json({ message: 'Email already exist'});
    }
    if(password.length < 6){
      return res.status(500).json({message: 'Password must be at least 6 characters'
      });
    }
    const hashedPassword = bcrypt.hash(password, 12);
    const user = new userModel({ username, email, password: hashedPassword});
    await user.save((err, result) => {
      if(err){
        return res.status(500).json({ message: 'Error saving user'});
      }
      res.status(201).json({
        status:'OK',
        message: user
      });
    });
      
} // register function

const login = async (req,res) => {
  try{
    const {email, password} = req.body;
    const user = userModel.FindOne({email: email});

    if(!user){
      res.status(500).json({message: 'No user with this email'});
    }
    const comparePassword = bcrypt.compare(password, user.password);
    if(!comparePassword){
      res.status(500).json({message: 'Password is incorrect'});
    }
    const token = jwt.sign({id: user.id}, process.env.SECRETKEY);
    res.status(200).json({
      status: 'OK',
      user,
      token
    });
  }catch(err){
    res.status(500).json({message: err.message});
  }
} // login function

module.exports = { register, login }; // export the functions