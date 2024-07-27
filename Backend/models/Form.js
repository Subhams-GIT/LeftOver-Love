const mongoose = require('mongoose');

const donor = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  typeoffood: {
    type: String,
  },
  quantity: {
    type: String,
  }
});


const formModel = mongoose.model('donorSchema', donor);
module.exports = formModel;