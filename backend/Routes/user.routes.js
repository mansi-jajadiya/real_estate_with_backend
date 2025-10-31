const express = require("express");
const { registerUser, getAll, loginUser } = require("../controller/user.controller");
const userRoutes = express.Router();

userRoutes.post("/registeruser", registerUser);

userRoutes.post("/loginUser", loginUser);

userRoutes.get("/allusers", getAll);


module.exports = userRoutes;