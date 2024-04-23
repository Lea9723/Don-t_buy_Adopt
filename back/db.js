const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost", // ou l'adresse de votre serveur MySQL
  user: "root",
  password: "",
  database: "adopt_dont_shop",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connecté à la base de données MySQL!");
});

module.exports = connection;
