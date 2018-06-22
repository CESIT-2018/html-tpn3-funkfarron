const express=require('express'); //importamos express
const app=express(); //creamos una instancia

app.get("/usuarios",(req,res)=>{

    let html="<h1>Buen dia!!</h1>";

    if (req.query && req.query.nombre){ 
        html +=`usted es ${req.query.nombre}`;

    }
    res.send(html);


});

app.listen(3000,()=>console.info("Iniciando en puerto 3000"));
