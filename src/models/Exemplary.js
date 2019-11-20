const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

const ExemplarySchema = new mongoose.Schema({
  code: {
    type: String,
    required: true
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: true
  }
});

module.exports = mongoose.model("Exemplary", ExemplarySchema);
