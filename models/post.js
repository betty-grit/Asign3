const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  Author: {
    type: String,
    required: true
  },
  Date: {
    type: String,
    default:Date.now
  },
  Content: {
    type: String,
    required: true
  },
  Upvotes: {
    type: Number,
    default:0

  },
  Downvotes:{
    type: Number,
    default:0
  }
});
module.exports= mongoose.model('post', postSchema);
