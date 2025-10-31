const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: String,
    userName: String,
    email: {
      type: String,
      required: true,
    },
    password: String,
    image: String,
    isDelete: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userSchema);
