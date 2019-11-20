const Exemplary = require("../models/Exemplary");

module.exports = {
  async save(req, res) {
    try {
      if (await Exemplary.findOne({ code: req.body.code })) {
        return res.status("404").send({ message: "Exemplar já existe!" });
      }

      await Exemplary.create(req.body);
      return res.status("200").send("Exemplar criado!");
    } catch (error) {
      return res
        .status("500")
        .send({ message: "Não foi possível adicionar o Exemplar", error });
    }
  },
  async remove(req, res) {
    try {
      const { id } = req.query;
      console.log(req.query);
      if (await Exemplary.findByIdAndDelete(id))
        res.status("200").send("Exemplar deletado");
      else
        return res.status("500").send({ message: "Exemplar não encontrado" });
    } catch (error) {
      return res
        .status("500")
        .send({ message: "Não foi possível remover o Exemplar", error });
    }
  },
  async list(req, res) {
    try {
      const Exemplarys = await Exemplary.find();

      res.status(200).send(Exemplarys);
    } catch (erro) {
      return res
        .status("500")
        .send({ message: "Não foi possível recuperar os dados", error });
    }
  }
};
