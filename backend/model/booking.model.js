const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema(
  {
    SrNo: {
      type: Number,
      trim: true,
    },
    Name: {
      type: String,
      trim: true,
    },
    Quantity: {
      type: String,
      trim: true,
    },
    Price: {
      type: String,
      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true, 
  }
);

module.exports = mongoose.model("Booking", bookingSchema);
