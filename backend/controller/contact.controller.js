const Contact = require("../model/contact.model");
const Message = require("../helpers/Message");

exports.addContact = async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;

    if (!firstName || !lastName || !email || !message) {
      return res.status(400).send({ message: "All fields are required" });
    }

    const newContact = new Contact({
      firstName,
      lastName,
      email,
      message,
    });

    await newContact.save();
    res.status(201).send({ message: "Contact added successfully", contact: newContact });
  } catch (error) {
    console.error("Error adding contact:", error);
    res.status(500).send({ message: Message.INTERNAL_SERVER_ERROR });
  }
};

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).send({ contacts });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).send({ message: Message.INTERNAL_SERVER_ERROR });
  }
};

exports.deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Contact.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).send({ message: "Contact not found" });
    }

    res.status(200).send({ message: "Contact deleted successfully" });
  } catch (error) {
    console.error("Error deleting contact:", error);
    res.status(500).send({ message: Message.INTERNAL_SERVER_ERROR });
  }
};
