const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
require('./src/conf/sync.db');
const productRoutes = require("./src/product.routes");

//Configuration de express
app.use(express.json());
app.use("/products", productRoutes);


app.listen(port, ()=>{
    console.log(`Serveur démarré sur le port ${port}`);
});