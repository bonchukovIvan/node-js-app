const Post = require("../models/post");

const handleError = (res, error) => {
    res.status(500).send(error.message);
}

const getPost = (req, res) => {
    Post
    .findById(req.params.id)
    .then((post) => res.status(200).json(post))
    .catch((error) => handleError(res, error));
};

const deletePost = (req, res) => {
    Post
    .findByIdAndDelete(req.params.id)
    .then((post) => res.status(200).json(req.params.id))
    .catch((error) => handleError(res, error));
}

const EditPost = (req, res) => {
    const {title, author, text} = req.body;
    const { id } = req.params;
    Post
    .findByIdAndUpdate(id, {title, author, text})
    .then((post) => res.status(200).json(post))
    .catch((error) => handleError(res, error));
}

const getPosts = (req, res) => {
    Post
        .find()
        .sort({createdAt: -1})
        .then((posts) => res.status(200).json(posts))
        .catch((error) => handleError(res, error));
}

const AddPost = (req, res) => {
    const { title, author, text } = req.body;
    const post = new Post({ title, author, text }, {new: true});
    post
    .save()
    .then((post) => res.status(200).json(post))
    .catch((error) => handleError(res, error));
}

module.exports = {
    getPost,
    deletePost,
    EditPost,
    getPosts,
    AddPost,
}