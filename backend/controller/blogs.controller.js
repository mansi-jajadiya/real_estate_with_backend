const Blog = require("../model/blog.model");
const Message = require("../helpers/Message");

exports.uploadBlog = async (req, res) => {
  try {
    let imageData = {};
    let authorImageData = {};

    if (req.files) {
      if (req.files.image) {
        imageData = {
          data: req.files.image[0].buffer,
          contentType: req.files.image[0].mimetype,
        };
      }
      if (req.files.authorImage) {
        authorImageData = {
          data: req.files.authorImage[0].buffer,
          contentType: req.files.authorImage[0].mimetype,
        };
      }
    }

    const blog = await Blog.create({
      ...req.body,
      image: imageData,
      authorImage: authorImageData,
    });

    res.status(201).send({ blog, message: Message.BLOG_ADDED });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: Message.INTERNAL_SERVER_ERROR });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    let updateData = { ...req.body };

    if (req.files) {
      if (req.files.image) {
        updateData.image = {
          data: req.files.image[0].buffer,
          contentType: req.files.image[0].mimetype,
        };
      }
      if (req.files.authorImage) {
        updateData.authorImage = {
          data: req.files.authorImage[0].buffer,
          contentType: req.files.authorImage[0].mimetype,
        };
      }
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).send({ message: Message.BLOG_NOT_FOUND });
    }

    res.status(200).send({ updatedBlog, message: Message.BLOG_UPDATED });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: Message.INTERNAL_SERVER_ERROR });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { isDelete: true },
      { new: true }
    );

    if (!blog) {
      return res.status(404).send({ message: Message.BLOG_NOT_FOUND });
    }

    res.status(200).send({ blog, message: Message.BLOG_DELETED });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: Message.INTERNAL_SERVER_ERROR });
  }
};

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).send({ blogs: blogs });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: Message.INTERNAL_SERVER_ERROR });
  }
};

exports.getSingleBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findOne({ _id: id, isDelete: false });

    if (!blog) {
      return res.status(404).send({ message: Message.BLOG_NOT_FOUND });
    }

    const formattedBlog = {
      ...blog._doc,
      image: blog.image?.data
        ? `data:${blog.image.contentType};base64,${blog.image.data.toString(
            "base64"
          )}`
        : null,
      authorImage: blog.authorImage?.data
        ? `data:${
            blog.authorImage.contentType
          };base64,${blog.authorImage.data.toString("base64")}`
        : null,
    };

    res.status(200).send(formattedBlog);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: Message.INTERNAL_SERVER_ERROR });
  }
};
