const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },
    message: {
      type: String,
      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true, // adds createdAt and updatedAt
  }
);

module.exports = mongoose.model("contacts", contactSchema);
