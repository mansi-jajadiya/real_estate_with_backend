const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    date: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
    image: {
      data: Buffer,
      contentType: String,
    },
    author: {
      type: String,
      required: true,
    },
    isDelete: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("posts", postSchema);
