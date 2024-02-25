const mongoose = require('mongoose');

const querySchema = new mongoose.Schema({
  queryText: {
    type: String,
    required: true,
  },
  // You can add more fields related to queries if needed
});

const contactDetailsSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobilenumber: {
    type: String,
    required: true,
  },
  queries: [querySchema], // Array of queries associated with this contact
});

const Contact = mongoose.model('Contact', contactDetailsSchema);
module.exports = Contact;
