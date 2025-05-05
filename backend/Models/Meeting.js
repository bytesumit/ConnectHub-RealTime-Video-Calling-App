const mongoose = require('mongoose');



const Meeting = mongoose.model('Meeting', new mongoose.Schema({
    meetingId: String,
    participants:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    createdAt: { type: Date, default: Date.now }
  }));


 module.exports = Meeting;