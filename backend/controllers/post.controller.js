const PostModel = require("../models/post.model");

module.exports.getPosts = async (req, res) =>{
 const post = await PostModel.find();
 res.status(200).json(posts)   
}

module.exports.setPosts = async (req, res) => {
if (!req.body.message) {
    res.status(400).json({ message : "donnez une information svp"})
}

const post = await PostModel.create({
    message : req.body.message,
    author: req.body.author
})
res.status(300).json(post);
};

module.exports.editPost = async (req,res) => {
    const post = await PostModel.findById(res.param.id)

    if (!post) {
        res.status(400).json({ message: "ce post n'exixte pas"})
    }

    const updatePost = await PostModel.findByIdAndUpdate(
        post,
        req.body,
        {new: true}
    
    )
    res.status(400).json(updatePost);
};

module.exports.delePost =async (req,res) => {
    const post = await PostModel.findById(res.param.id) 
    if (!post) {
        res.status(400).json({ message: "ce post n'exixte pas"})
    } 
    await post.remove();
    res.status(400).json("message supprime" + post);
};