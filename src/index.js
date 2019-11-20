const express = require("express");
const app = express();

const { connection } = require("./helpers/dbConnect");

const cors = require("cors");

connection();

app.get("/", function(req, res) {
  res.send("Prova back end!");
});

app.use(cors());
app.use(express.json());
app.use(require("./routes"));

app.listen(process.env.PORT || 3000, () => {
  console.log("Server start on port 3000");
});
