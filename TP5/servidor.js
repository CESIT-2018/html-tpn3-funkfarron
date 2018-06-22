const PORT = 5000;
const express=require('express'); //importamos express
const app=express(); //creamos una instancia

app.set('view engine','ejs');

app.get('/', (req , res ) => {

    res.render('index');   
});

app.get('/productos', (req , res , next) => {

    const productosArr = [  
                            {   
                            nombre: 'Alfajores de maicena', descripcion: 'Apto para celiacos', cantidad: 'Hasta agotar stock', precio: '$20'
                            },
                            {   
                            nombre: 'Baterias de auto', descripcion: 'Verdini, la ventaja total!', cantidad: 03, precio: '$2900'
                            },
                            {  
                            nombre: 'Estufas a kerosene', descripcion: 'Adminiculo de metal sin combustible', cantidad: 00, precio: '$650'
                            },
                            {  
                            nombre: 'Escapadas a Cordoba',descripcion: 'Que espera para descanzar?',cantidad: 10, precio: '$4500'
                            },
                        ];

    res.render('productos', {productos: productosArr});
});

app.get('/perfil', (req , res ) => {

    res.render('perfil');   
});

app.get('/servicios', (req , res ) => {

    res.render('servicios');  
});

app.get('/form', (req , res ) => {

    res.render('form');  
});

app.use(express.static('public')); //accedemos a public

app.listen(PORT , () => console.info('iniciando en puerto '+ PORT));



