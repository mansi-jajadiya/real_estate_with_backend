const express = require("express");
const postRoutes = express.Router();

const {
  uploadPost,
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost,
} = require("../controller/posts.controller");

const { verifyToken } = require("../helpers/verifyToken");

// ====== Routes ======
postRoutes.post("/upload", verifyToken, uploadPost);

postRoutes.get("/getall", verifyToken, getAllPosts);

postRoutes.get("/getsingle/:id", verifyToken, getSinglePost);

postRoutes.put("/update/:id", verifyToken, updatePost);

postRoutes.delete("/delete/:id", verifyToken, deletePost);

module.exports = postRoutes;
