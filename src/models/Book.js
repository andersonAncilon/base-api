const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
    required: true
  },
  publishDate: {
    type: Date,
    required: true
  },
  publishCompany: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Book", BookSchema);
