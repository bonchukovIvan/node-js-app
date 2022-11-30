const express = require("express");

const { getPost,
        deletePost,
        EditPost, 
        getPosts,
        AddPost,
} = require("../controllers/api-post-controller")

const router = express.Router();

//get all posts
router.get('/api/posts', getPosts);
//add new post
router.post('/api/post', AddPost);
//get post by id
router.get('/api/posts/:id', getPost);
//delete post
router.delete('/api/post/:id', deletePost);
//update post
router.put('/api/post/:id', EditPost);

module.exports = router;