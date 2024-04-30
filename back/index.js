const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const bddConnect = require("./dbConnnect")



const port = 3000 || process.env.PORT;

app.listen(port, ()=>{
console.log("Serveur en cours d'execution ...")
})

bddConnect();

app.get("/",(request,response)=>{
    response.send("Bonjour reda lambadabar")
})

// lancement sur branche bdd serveur lamdabbar