const express=require('express'); //importamos express
const app=express(); //creamos una instancia

app.set("view engine", "ejs");

app.get("/productos", (req, res,next) => {
const productosArr=[{nombre:"Producto 1",cantidad:150},{nombre:"Producto 2",cantidad:200},{nombre:"Producto 3",cantidad:250},{nombre:"Producto 4",cantidad:350}];

    res.render(`productos`,{productos:productosArr});    

});
 
app.use (express.static("pubic")); //accedemos a public

app.listen(5000, () => console.info("Iniciando en puerto 5000"));