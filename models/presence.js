const mongoose = require('mongoose');

const presenceModel = new mongoose.Schema(
  {
    studentId: {
      type: Number,
      required: true,
    },
    present: {
      type: Boolean,
      required: true,
    }
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model('Presence', presenceModel);