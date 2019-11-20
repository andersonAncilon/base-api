const Book = require("../models/Book");

module.exports = {
  async save(req, res) {
    try {
      if (await Book.findOne({ title: req.body.title })) {
        return res.status("404").send({ message: "Livro já existe!" });
      }

      await Book.create(req.body);
      return res.status("200").send("Livro criado!");
    } catch (error) {
      return res
        .status("500")
        .send({ message: "Não foi possível adicionar o Livro", error });
    }
  },
  async edit(req, res) {
    try {
      const { id } = req.query;

      Book.findOneAndUpdate(
        { _id: id },
        { $set: req.body },
        { new: true },
        (error, doc) => {
          if (error) {
            res
              .status("500")
              .send({ message: "Falha ao realizar alteração!", error });
          }

          res.status("200").send("Livro alterado!");
        }
      );
    } catch (error) {
      res
        .status("500")
        .send({ message: "Falha ao realizar alteração!", error });
    }
  },
  async remove(req, res) {
    try {
      const { id } = req.query;
      console.log(req.query);
      if (await Book.findByIdAndDelete(id))
        res.status("200").send("Livro deletado");
      else return res.status("500").send({ message: "Livro não encontrado" });
    } catch (error) {
      return res
        .status("500")
        .send({ message: "Não foi possível remover o Livro", error });
    }
  },
  async list(req, res) {
    try {
      const books = await Book.find();

      res.status(200).send(books);
    } catch (erro) {
      return res
        .status("500")
        .send({ message: "Não foi possível recuperar os dados", error });
    }
  }
};
