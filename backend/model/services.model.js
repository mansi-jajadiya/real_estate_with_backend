const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema(
  {
    id: {
      type: String,
    },
    title: {
      data: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("services", serviceSchema);
