const express = require('express');
const { getAll, createPost, updatePost, deletePost } = require('../controllers/posts');
const router = express.Router();

router.get('/', getAll)
router.post("/posts", createPost)
router.patch("/posts/:id", updatePost)
router.delete("/posts/:id", deletePost)

module.exports = router;