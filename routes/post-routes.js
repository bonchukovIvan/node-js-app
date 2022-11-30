const express = require("express");

const { getPost,
        deletePost,
        getEditPost,
        EditPost, 
        getPosts,
        AddPost,
        getAddPost,
} = require("../controllers/post-controller")

const router = express.Router();

router.get('/posts/:id', getPost);

router.delete('/posts/:id', deletePost);

router.get('/edit/:id', getEditPost);

router.put('/edit/:id', EditPost);

router.get('/posts', getPosts);

router.post('/add-post', AddPost);

router.get('/add-post', getAddPost,);

module.exports = router;