const mongoose = require('mongoose');

const donor = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  typeoffood: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
});

const formModel = mongoose.model('donorSchema', donor);
module.exports = formModel;
