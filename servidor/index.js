const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");
//creo el servidor
const app= express();
// Conecto a la DB
conectarDB();
app.use(cors());


app.use(express.json());
app.use('/api/productos',require('./routes/producto'));
// definino la ruta principal
//app.get('/', (req,res)=>{
//    res.send('Hola mundo!')
//})

app.listen(4000,()=>{
    console.log("El servidor esta corriendo perfectamente")
})