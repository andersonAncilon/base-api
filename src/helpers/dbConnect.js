const mongoose = require("mongoose");

module.exports = {
  async connection() {
    try {
      const cnct = await mongoose.connect(
        `mongodb://prova:prova123@ds347298.mlab.com:47298/prova`,
        {
          useNewUrlParser: true,
          useCreateIndex: true
        }
      );
      console.log("Conexão com o DB bem sucedida!");
    } catch (err) {
      console.log("Conexão com o DB mal sucedida!", err);
    }
  }
};
