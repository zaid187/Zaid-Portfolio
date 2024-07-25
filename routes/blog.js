const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createBlog, getBlogs, getBlogById, updateBlog, deleteBlog, addComment, getComments } = require('../controllers/blogController');

// @route    POST api/blog
// @desc     Create a blog post
// @access   Private
router.post('/', auth, createBlog);

// @route    GET api/blog
// @desc     Get all blog posts
// @access   Public
router.get('/', getBlogs);

// @route    GET api/blog/:id
// @desc     Get blog post by ID
// @access   Public
router.get('/:id', getBlogById);

// @route    PUT api/blog/:id
// @desc     Update blog post by ID
// @access   Private
router.put('/:id', auth, updateBlog);

// @route    DELETE api/blog/:id
// @desc     Delete blog post by ID
// @access   Private
router.delete('/:id', auth, deleteBlog);

// @route    POST api/blog/comment/:id
// @desc     Add comment to blog post
// @access   Public
router.post('/comment/:id', addComment);

// @route    GET api/blog/comment/:id
// @desc     Get comments for blog post
// @access   Public
router.get('/comment/:id', getComments);

module.exports = router;
