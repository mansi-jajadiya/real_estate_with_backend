const bcrypt = require("bcrypt");
const User = require("../model/user.model");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
  try {
    const { email, userName, password } = req.body;

    const existingUser = await User.findOne({
      email,
      isDelete: false,
    });

    if (existingUser) {
      return res
        .status(400)
        .send({ message: "User already exists with this email." });
    }

    const existingUserName = await User.findOne({
      userName,
      isDelete: false,
    });

    if (existingUserName) {
      return res.status(400).send({ message: "Username should be unique." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      ...req.body,
      password: hashedPassword,
    });

    // Generate JWT token
    const accessToken = jwt.sign(
      { userID: newUser._id },
      process.env.JWT_SECREATE
    );

    res.status(201).send({
      message: "User successfully registered",
      userName: newUser.userName,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      _id: newUser._id,
      email: newUser.email,
      password: newUser.password,
      role: newUser.role,
      bio: newUser.bio,
      image: newUser.image || null,
      accessToken,
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

exports.loginUser = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email, isDelete: false });
    console.log("user is:", user);
    if (!user) {
      return res
        .status(404)
        .send({ message: "Incorrect email ID or password" });
    }

    let comparepassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!comparepassword) {
      return res
        .status(404)
        .send({ message: "Incorrect email ID or password" });
    }

    let token = await jwt.sign({ userID: user._id }, process.env.JWT_SECREATE);

    return res.status(200).send({
      message: "User logged in successfully",
      accessToken: token,
      _id: user._id,
      userName: user.userName,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      bio: user.bio,
      image: user.image,
      role: user.role,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

exports.getAll = async (req, res) => {
  try {
    const allusers = await User.find();
    res.send(allusers);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};
