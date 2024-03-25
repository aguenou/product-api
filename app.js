const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./src/conf/db.conf");
const port = process.env.PORT;
//Connexion à la base de données
connectDB();

//Configuration de express
app.use(express.json());

//Routes


app.listen(port, ()=>{
    console.log(`Serveur démarré sur le port ${port}`);
});