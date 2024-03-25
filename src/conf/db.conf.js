const mongoose = require("mongoose");

const connectDB =  async ()=>{

    try{
        const conn = await mongoose.connect(process.env.DATABASE_URI,{
            dbName:process.env.DATABASE_NAME,
        })
        console.log(`Connecté à la base de données MongoDB: ${conn.connection.name} `);
    }catch(error){
        console.error(`Erreur de connexion: ${error} `);
        process.exit(1);
    }

}

module.exports = connectDB