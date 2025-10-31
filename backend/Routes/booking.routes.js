const express = require("express");
const router = express.Router();
const {
  addBooking,
  getAllBookings,
  deleteBooking,
} = require("../controller/booking.controller");
const { verifyToken } = require("../helpers/verifyToken");

// POST - Add Booking
router.post("/add", verifyToken, addBooking);

// GET - Get All
router.get("/getall", verifyToken, getAllBookings);

// DELETE - Delete Booking
router.delete("/delete/:id", verifyToken, deleteBooking);

module.exports = router;
