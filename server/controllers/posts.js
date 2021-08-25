const PostMessage = require("../models/posts");

 
const getAll = async (req, res) => {
    const allPost = await PostMessage.find()
    try {
        res.status(200).json(allPost);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}
const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage({
        ...post
    })
    try {
         await newPost.save();
        res.status(200).json(newPost);
    } catch (error) {
        res.status(500).json("post is not completed");
    }
}

const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const newPost = req.body;
    try {
        const updatePost = await PostMessage.findByIdAndUpdate(_id, newPost,{
            new:true
        })
        res.status(200).json(updatePost);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const deletePost = async (req, res) => {
    const { id: _id } = req.params
    try {
        await PostMessage.findByIdAndRemove(_id)
        res.status(201).json({message:"delete successfully"})
    } catch (error) {
        res.send(error.message)
    }
}
module.exports = {getAll,createPost,updatePost,deletePost}