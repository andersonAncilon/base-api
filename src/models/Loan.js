const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

const LoanSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true
  },
  exemplary: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Examplary",
    required: true
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true
  },
  loanDate: {
    type: Date,
    default: new Date()
  },
  devolutionDate: {
    type: Date
  }
});

module.exports = mongoose.model("Loan", LoanSchema);
