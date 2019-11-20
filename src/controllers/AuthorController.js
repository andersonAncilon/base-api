const Author = require("../models/Author");

module.exports = {
  async save(req, res) {
    try {
      if (await Author.findOne({ name: req.body.name })) {
        return res.status("404").send({ message: "Autor já existe!" });
      }

      const { name } = req.body;

      await Author.create({ name });
      return res.status("200").send("Autor criado!");
    } catch (error) {
      return res
        .status("500")
        .send({ message: "Não foi possível adicionar o autor" });
    }
  },
  async edit(req, res) {
    try {
      const { id } = req.query;
      const { name } = req.body;
      console.log(id, name);

      Author.findOneAndUpdate(
        { _id: id },
        { $set: { name } },
        { new: true },
        (err, doc) => {
          if (err) {
            res.status("500").send({ message: "Falha ao realizar alteração!" });
          }

          res.status("200").send({ message: "Falha ao realizar alteração!" });
        }
      );
    } catch (error) {
      res.status("500").send({ message: "Falha ao realizar alteração!" });
    }
  },
  async remove(req, res) {
    try {
      const { id } = req.query;
      if (await Author.findByIdAndDelete({ _id: id }))
        res.status("200").send("Autor deletado");
      else return res.status("500").send({ message: "Autor não encontrado" });
    } catch (error) {
      return res
        .status("500")
        .send({ message: "Não foi possível remover o autor" });
    }
  },
  async list(req, res) {
    try {
      const authors = await Author.find();

      res.status(200).send(authors);
    } catch (erro) {
      return res
        .status("500")
        .send({ message: "Não foi possível recuperar os dados" });
    }
  }
};
