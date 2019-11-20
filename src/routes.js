const express = require("express");

const routes = express.Router();

const AuthorController = require("./controllers/AuthorController");
const BookController = require("./controllers/BookController");
const ExemplaryController = require("./controllers/ExemplaryController");
const LoanController = require("./controllers/LoanController");

routes.post("/saveAuthor", AuthorController.save);
routes.delete("/removeAuthor", AuthorController.remove);
routes.put("/editAuthor", AuthorController.edit);
routes.get("/listAuthors", AuthorController.list);

routes.post("/saveBook", BookController.save);
routes.delete("/removeBook", BookController.remove);
routes.put("/editBook", BookController.edit);
routes.get("/listBooks", BookController.list);

routes.post("/saveExemplary", ExemplaryController.save);
routes.delete("/removeExemplary", ExemplaryController.remove);
routes.get("/listExemplaries", ExemplaryController.list);

routes.post("/lend", LoanController.lend);
routes.put("/giveItBack", LoanController.giveItBack);

module.exports = routes;
