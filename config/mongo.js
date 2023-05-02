const mongoose = require("mongoose");

const dbConect = () => {
  const DB_URL = process.env.DB_URL;

  mongoose.set('strictQuery', false)
  mongoose.connect(
    DB_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, res) => {
      if (!err) {
        console.log("**** CONEXION CORRECTA ****");
      } else {
        console.log("**** ERROR DE CONEXION ****");
      }
    }
  );
};

module.exports = dbConect;
