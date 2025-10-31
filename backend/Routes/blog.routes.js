const express = require('express');
const blogRoutes = express.Router();

const {
  uploadBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
} = require('../controller/blogs.controller');

const { verifyToken } = require('../helpers/verifyToken');

blogRoutes.post(
  '/upload',
  verifyToken,
  uploadBlog
);

blogRoutes.get('/getall', verifyToken, getAllBlogs);

blogRoutes.get('/getsingle/:id', verifyToken, getSingleBlog);

blogRoutes.put(
  '/update/:id',
  verifyToken,
  updateBlog
);

blogRoutes.delete('/delete/:id', verifyToken, deleteBlog);

module.exports = blogRoutes;
