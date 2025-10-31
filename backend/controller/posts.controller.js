const Post = require("../model/post.model");
const Message = require("../helpers/Message");

// ========== Upload Post ==========
exports.uploadPost = async (req, res) => {
  try {
    let imageData = {};

    if (req.file) {
      imageData = {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      };
    }

    const post = await Post.create({
      ...req.body,
      image: imageData,
    });

    res.status(201).send({ post, message: Message.POST_ADDED });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: Message.INTERNAL_SERVER_ERROR });
  }
};

// ========== Update Post ==========
exports.updatePost = async (req, res) => {
  try {
    let updateData = { ...req.body };

    if (req.file) {
      updateData.image = {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      };
    }

    const updatedPost = await Post.findByIdAndUpdate(req.params.id, updateData, { new: true });

    if (!updatedPost) {
      return res.status(404).send({ message: Message.POST_NOT_FOUND });
    }

    res.status(200).send({ updatedPost, message: Message.POST_UPDATED });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: Message.INTERNAL_SERVER_ERROR });
  }
};

// ========== Delete Post ==========
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, { isDelete: true }, { new: true });

    if (!post) {
      return res.status(404).send({ message: Message.POST_NOT_FOUND });
    }

    res.status(200).send({ post, message: Message.POST_DELETED });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: Message.INTERNAL_SERVER_ERROR });
  }
};

// ========== Get All Posts ==========
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({ isDelete: false }).sort({ createdAt: -1 });

    const formattedPosts = posts.map(post => ({
      ...post._doc,
      image: post.image?.data
        ? `data:${post.image.contentType};base64,${post.image.data.toString("base64")}`
        : null,
    }));

    res.status(200).send({ posts: formattedPosts });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: Message.INTERNAL_SERVER_ERROR });
  }
};

// ========== Get Single Post ==========
exports.getSinglePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findOne({ _id: id, isDelete: false });

    if (!post) {
      return res.status(404).send({ message: Message.POST_NOT_FOUND });
    }

    const formattedPost = {
      ...post._doc,
      image: post.image?.data
        ? `data:${post.image.contentType};base64,${post.image.data.toString("base64")}`
        : null,
    };

    res.status(200).send(formattedPost);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: Message.INTERNAL_SERVER_ERROR });
  }
};
