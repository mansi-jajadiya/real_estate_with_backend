const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    id: {
      type: String,
    },
    image: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    author: {
      type: String,
      required: true,
    },
    authorImage: {
      type: String,
    },
    date: {
      type: String,
    },
    tag: {
      type: String,
    },
    comments: {
      type: Number,
      default: 0,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("blogs", blogSchema);
