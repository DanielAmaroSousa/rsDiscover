const express = require('express');
const app = express();

//configurar o servidor
app.set("view engine", "ejs"); //estamos a falar para o express que o visualizador (renderizador) será o ejs

app.get("/", function (req, res){
    const items = [
    {
        title: "D",
        message: "esenvolver",
    },
    {
        title: "E",
        message: "JS",
    },
    {
        title: "M",
        message: "ais",
    },
    {
        title: "A",
        message: "vançado",
    },
    {
        title: "I",
        message: "novador",
    },
    {
        title: "S",
        message: "erviço",
    }
    ];
    const subtitle = "EJS by Discover RocketSeat"
    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle
    }); //o ejs tem de estar na pasta views
}) //estamos a criar a rota principal no express

app.get("/sobre", function (req, res){
    res.render("pages/about");
}) //estamos a criar outra rota no express

//iniciar no localhost:8080
app.listen(8080)
console.log("Rodando")