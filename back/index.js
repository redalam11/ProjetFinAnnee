const express = require("express");

const app = express();


const port = 3000 || process.env.PORT;

app.listen(port, ()=>{
console.log("Serveur en cours d'execution ...")
})