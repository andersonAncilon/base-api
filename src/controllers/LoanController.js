const Loan = require("../models/Loan");
const Exemplary = require("../models/Exemplary");

module.exports = {
  async lend(req, res) {
    try {
      const { code } = req.body;

      let loanNumber = await Loan.find({ customer: req.body.customer });
      let hasLend = await Loan.findOne({ code });
      let exemplary = await Exemplary.findOne({ code });

      if (loanNumber.length == 3) {
        return res.status("404").send({
          message: "Quantidade de empréstimo para este cliente foi excedida!"
        });
      }
      if (hasLend) {
        return res.status("404").send({
          message: "O exemplar já foi emprestado"
        });
      }

      if (!Exemplary) {
        return res.status("404").send({
          message: "Nenhum exemplar encontrado!"
        });
      }

      req.body.exemplary = exemplary._id;
      console.log(req.body);

      await Loan.create(req.body);
      return res.status("200").send("Empréstimo realizado!");
    } catch (error) {
      return res
        .status("500")
        .send({ message: "Não foi possível adicionar o Livro", error });
    }
  },

  async giveItBack(req, res) {
    try {
      const { id } = req.query;

      if (await Loan.findByIdAndUpdate(id, { devolutionDate: new Date() }))
        res.status("200").send("Devolução realizada");
      else
        return res.status("500").send({ message: "Empréstimo não encontrado" });
    } catch (error) {
      return res
        .status("500")
        .send({ message: "Não foi possível devolver o livro", error });
    }
  }
};
