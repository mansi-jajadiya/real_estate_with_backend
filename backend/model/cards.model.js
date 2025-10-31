const mongoose = require("mongoose");

const cardSchema = mongoose.Schema(
  {
     id: {
      type: String,
    },
    title: {
      type: String,
      // required: true,
    },
    price: {
      type: Number,
      // required: true,
    },
    category: {
      type: String,
      // required: true,
    },
    bedrooms: {
      type: Number,
      // required: true,
    },
    bathrooms: {
      type: Number,
      // required: true,
    },
    cars: {
      type: Number,
      default: 0,
    },
    area: {
      type: String,
      // required: true,
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

module.exports = mongoose.model("cards", cardSchema);
