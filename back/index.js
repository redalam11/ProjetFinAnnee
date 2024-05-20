const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const bddConnect = require("./dbConnnect");
const userRoutes = require('./routes/userRoutes');

// Middlewares globaux
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connexion à la base de données
bddConnect();

// Définition des routes
app.use("/user", userRoutes);

// Route de base
app.get("/", (request, response) => {
    response.send("Bonjour reda lambadabar");
});

// Lancement du serveur
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log("Serveur en cours d'exécution sur le port " + port);
});
