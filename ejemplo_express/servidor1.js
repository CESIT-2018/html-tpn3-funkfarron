const express=require('express'); //importamos express
const app=express(); //creamos una instancia

const getHomeCallBack=(req,res)=>{  //se crea una funcion y se le asigna a una constante
    console.info("Hola Moncho desde Express");//imprimo mensaje
    res.send("Hola cosita linda");


};

app.get("/",getHomeCallBack);//

app.get("/productos",(req,res)=>{
let html="<h1>Productos</h1>";
res.send(html);

});

app.use(express.static("public"));

app.listen(3000,()=>console.info("Iniciando en puerto 3000"));
