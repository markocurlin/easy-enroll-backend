const mongoose = require('mongoose');

const presenceModel = new mongoose.Schema(
  {
    _id: {
      type: Number,
      required: true,
    },
    studentId: {
      type: Number,
      required: true,
    },
    present: {
      type: Boolean,
      required: true,
    }
  },
);

module.exports = mongoose.model('Presence', presenceModel);