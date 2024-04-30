const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
        const uri = 'mongodb+srv://redalamdabbar2004:SoDwPragSVps9S2y@cluster0.rmcvqjn.mongodb.net/'; 
        const connexionBDD = await mongoose.connect(uri);
        console.log("BDD connectée avec succès");
    } catch (error) {
        console.error("Échec de la connexion à la BDD :", error);
    }
}

module.exports = dbConnect;
