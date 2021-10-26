const  express  =  require ( 'express' ) ;
const  app =  express ( ) ;
const  port =  3000 ;
const  col_movies  =  [
    {

    codigo : 01 ,
    nombre : "Venom: Carnage liberado", 
    año : 2021, 
    genero : ["Accion, Ciencia ficcion", "Aventura"," Comic Books", "Pelicula de superheroes"], 
    director : "Andy Serkis", 
    audiencia : 250.000,

    },
    {

    codigo : 02 , 
    nombre : "Halloween Kills", 
    año : 2021, 
    genreo : ["terror","gore","suspenso"], 
    director : "David Gordon Gree", 
    audiencia : "200.000",

    },
    {

    codigo : 03, 
    nombre : "Los locos Addams 2", 
    año : 1993, 
    genero : ["Comedia de terror"], 
    director : "Barry Sonnenfeld", 
    audiencia : 90.000,

    },
    {

    codigo : 04, 
    nombre : "Shamg-Chi y la leyenda de los Diez anillos", 
    año : 2021, 
    genero : ["Accion", "Fantacia", "Aventura", "Comic Book", "Pelicula de superheroes"], 
    director : "Destin Daniel Cretton", 
    audiencia : 240.000,

    },
    {

    codigo : 05, 
    nombre : "La casa oscura", 
    año : 2020, 
    genero : ["Terror", "Suspenso", "horror"], 
    director : "David Bruckner", 
    audiencia : 100.000,

    },
    {

    codigo : 06, 
    nombre : "Nadie", 
    año : 2021, 
    genero : ["Accion", "Suspenso", "llya Naishuller"], 
    audiencia : 70.000,

    },
    {

    codigo : 07, 
    nombre : "Bad Boys para siempre", 
    año : 2020, 
    genero : ["Accien", "Comedia", "Buddy cop"], 
    director : "Bilall Fallah y Adil El Arbi", 
    audiencia : 240.000,

    },
    {

    codigo : 08, 
    nombre : "Aves de presa", 
    año : 2020, 
    genero : ["Accion", "Pelicula de superheroes"], 
    director : "Cathy Yan", 
    audiencia : 200.000,

    },
    {

    codigo : 09, 
    nombre : "Kate", 
    año : 2021, 
    genero : ["Accion", "Suspenso"], 
    director : "Cedric Nicolas-Troyan", 
    audiencia : 100.000,

    },
    {

    codigo : 10, 
    nombre : "John Wick 3: Parabellum", 
    año : 2019, 
    genero : ["Accion", "Suspenso"],
    director : "Chad Stahelski", 
    audiencia : 280.000

    }
    ]
aplicación . get ( '/' , function ( req , res )  {
    res . enviar ( arr_movies ) ;    
} )

aplicación . get ( '/ movies /: code' , function ( req , res )  {
    let  i  =  req . params . codigo ;
    res . enviar ( col_movies . buscar ( e => e . codigo == i ) ) ;
} )

aplicación . get ( '/ películas' , function ( req , res ) {
    res . enviar ( col_movies . sort ( function ( a , b ) {
        return  b . audiencia - a . audiencia ;
    } ) ) ;
} )

aplicación . escuchar ( puerto ,  function ( ) {
    console.log( `Su servidor está funcionando en http: // localhost: $ { port } ` )
} )

