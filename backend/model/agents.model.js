const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
    },
    name: { type: String },
    title: { type: String },
    cname: { type: String },
    description: { type: String },
    image: {
      data: Buffer,
      contentType: String,
    },
    verified: {
      type: Boolean,
      default: true,
    },
    office: { type: String },
    mobile: { type: String },
    fax: { type: String },
    email: { type: String },
    location: { type: String },
    role: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("agents", agentSchema);
