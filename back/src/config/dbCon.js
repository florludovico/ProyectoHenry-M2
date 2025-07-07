require("dotenv").config();

const mongoose = require("mongoose");

const dbCon = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("conexion exitosa a la base de datos");
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error);
  }
};

module.exports = dbCon;
