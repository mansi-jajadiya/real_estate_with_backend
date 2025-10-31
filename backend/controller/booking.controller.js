const Booking = require("../model/booking.model");
const Message = require("../helpers/Message");

// ➕ Add Booking
exports.addBooking = async (req, res) => {
  try {
    const { Name, Quantity, Price } = req.body;

    // Validation
    if ( !Name || !Quantity || !Price) {
      return res.status(400).send({ message: "All fields are required" });
    }
const lastBooking = await Booking.findOne().sort({ SrNo: -1 });
    const nextSrNo = lastBooking ? lastBooking.SrNo + 1 : 1;
    const newBooking = new Booking({
      SrNo:nextSrNo,
      Name,
      Quantity,
      Price,
    });

    await newBooking.save();
    res
      .status(201)
      .send({ message: "Booking added successfully", booking: newBooking });
  } catch (error) {
    console.error("Error adding booking:", error);
    res.status(500).send({ message: Message.INTERNAL_SERVER_ERROR });
  }
};

// 📋 Get All Bookings
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: 1 });
    res.status(200).send({ bookings });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).send({ message: Message.INTERNAL_SERVER_ERROR });
  }
};

// ❌ Delete Booking
exports.deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Booking.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).send({ message: "Booking not found" });
    }

    res.status(200).send({ message: "Booking deleted successfully" });
  } catch (error) {
    console.error("Error deleting booking:", error);
    res.status(500).send({ message: Message.INTERNAL_SERVER_ERROR });
  }
};
