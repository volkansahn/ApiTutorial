const postModel = require('../models/post.model.js');

// CREATE
const createPost = async (req, res) => {
    try {
        const post = req.body;
        const newPost = new postModel(post);
        await newPost.save();
        res.status(201).json({
            status: 'OK',
            newPost
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}; // createPost function

// READ
const getPosts = async (req, res) => {
    try {
        const posts = await postModel.find();
        res.status(200).json({
            status: 'OK',
            posts
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}; // getPosts function

// READ DETAIL
const getPostDetail = async (req, res) => {
    try {
        const id = req.params.id;
        const post = await postModel.findById(id);
        res.status(200).json({
            status: 'OK',
            post
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}; // getPostDetail function

const updatePost = async (req, res) => {
    try{
        const id = req.params.id;
        const post = await postModel.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json({
            status: 'OK',
            post
        });
    }catch(err){
        res.status(500).json({message: err.message});
    }   
}; // updatePost function

const deletePost = async (req, res) => {
    try{
        const id = req.params.id;
        const post = await postModel.findByIdAndDelete(id);
        res.status(200).json({
            status: 'OK',
            post
        });
    }catch(err){
        res.status(500).json({message: err.message});
    }   
}; // deletePost function
