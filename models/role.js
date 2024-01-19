const mongoose = require('mongoose');

const roleModel = new mongoose.Schema(
  {
    name: {
      _id: mongoose.Schema.Types.ObjectId,
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model('Role', roleModel);