document.addEventListener("DOMContentLoaded");
const cardsAdj = [
  {
    name: `dulces1`,
    img: `img/dulces1.webp`
  },
  {
    name: `dulces2`,
    img: `img/dulces2.jpg`
  },
  {
    name: `dulces3`,
    img: `img/dulces3.jpg`
  },
  {
    name: `dulces4`,
    img: `img/dulces3.jpg`
  },
  {
    name: `dulces5`,
    img: `img/dulces5.jpg`
  },
  {
    name: `dulces6`,
    img: `img/dulces6.jpg`
  },
  {
    name: `dulces7`,
    img: `img/dulces7.jpg`
  },
  {
    name: `dulces8`,
    img: `img/dulces8.jpg`
  }
];
const cuadricula = document .querySelector (" cuadricula");
const resultado = document .querySelector ("#resultado");
var cartasEscogidas = [];
var cartasEscogidasId = [];
var cartasGanadas = [];

//-----lecture_03-----------------------------//

function crearTablero () {
  for (let i = 0; i < cardAdj. length; i++) {
    var carta = document .createElement ('img') ;
    carta.setAttribute("src`,'images/reverso-png");
    carta.setAttribute('data-id', i);
    carta.addEventlistener(`click`, voltearCarta);
    cuadricula.appendChild(carta);