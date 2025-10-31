const express = require("express");
const agentRoutes = express.Router();
const multer = require("multer");
const upload = multer(); // memory storage

const {
  uploadAgent,
  getAllAgents,
  getSingleAgent,
  updateAgent,
  deleteAgent,
} = require("../controller/agents.controller");

const { verifyToken } = require("../helpers/verifyToken");

// 👇 multer middleware added before controller
agentRoutes.post("/upload", verifyToken, upload.single("image"), uploadAgent);

agentRoutes.get("/getall", verifyToken, getAllAgents);
agentRoutes.get("/getsingle/:id", verifyToken, getSingleAgent);
agentRoutes.put("/update/:id", verifyToken, upload.single("image"), updateAgent);
agentRoutes.delete("/delete/:id", verifyToken, deleteAgent);

module.exports = agentRoutes;
