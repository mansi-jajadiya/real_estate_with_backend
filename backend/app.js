const express = require("express");
const env = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
env.config();
const app = express();
const port = process.env.PORT || 1155;
const userRoutes = require("./Routes/user.routes");
const cardRoutes = require("./Routes/cards.routes");
const blogRoutes = require("./Routes/blog.routes");
const agentRoutes = require("./Routes/agents.routes");
const serviceRoutes = require("./Routes/service.routes");
const contactRoutes = require("./Routes/contact.routes");
const bookingRoutes = require("./Routes/booking.routes");


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connection established successfully..."))
  .catch((err) => console.log(err));

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/cards", cardRoutes);
app.use("/user", userRoutes);
app.use("/blogs", blogRoutes);
app.use("/agents", agentRoutes);
app.use("/services", serviceRoutes);
app.use("/contacts", contactRoutes);
app.use("/bookings", bookingRoutes);
app.get("/", (req, res) => {
  res.send("<h1>Welcome to server</h1>");
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

module.exports = app;
