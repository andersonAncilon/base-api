const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Author", AuthorSchema);
