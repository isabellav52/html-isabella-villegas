document.addEventListener("DOMContentLoaded", () => {
  const cardsAdj = [
    {
      name: `foto1`,
      img: `imagenes/foto1.jpg`
    },
    {
      name: `foto2`,
      img: `imagenes/foto2.jpg`
    },
    {
      name: `foto3`,
      img: `imagenes/foto3.jpeg`
    },
    {
      name: `foto4`,
      img: `imagenes/foto4.jpg`
    },
    {
      name: `foto5`,
      img: `imagenes/foto5.jpg`
    },
    {
      name: `foto6`,
      img: `imagenes/foto6.jpg`
    },
    {
      name: `foto7`,
      img: `imagenes/foto7.jpg`
    },
    {
      name: `foto8`,
      img: `imagenes/foto8.jpg`
    }
  ];
  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];

  //----------------- lecture_03 ----------------------------------//
  function crearTablero() {
    for (let i = 0; i < cardsAdj.length; i++) {
      // Loop que inicia en i=0, se incrementa de 1 en 1 (i++) y finaliza
      // cuando i=cardAdj.length, es decir, 12.
      var carta = document.createElement("img"); // Crea elemento img cada vez que se ejecuta la función.
      carta.setAttribute("src", "imagenes/reverso.png"); //Asignar nuevo atributo a cada carta
      //igual a la imagen 'reverso'.
      carta.setAttribute("data-id", i); //Asignar como atributo a cada carta creada, el id=i.
      carta.addEventListener("click", voltearCarta); //Detectar si la carta asignada recibe un click y ejecuta
      //la función voltearCarta.
      cuadricula.appendChild(carta); // Relaciona la carta creada con la variable cuadricula enlazada con la clase
      // cuadricula de html para que se imprima la carta creada en el div de html.
    }
  }

  function verificarPareja() {
    var cards = document.querySelectorAll("imgenes");
    const opcionUnoId = cartasEscogidasId[0];
    const opcionDosId = cartasEscogidasId[1];
    if (opcionUnoId === opcionDosId) {
      cards[opcionUnoId].setAttribute("src", "imgenes/reverso.png");
      cards[opcionDosId].setAttribute("src", "imgenes/reverso.png");
      alert("¡Diste click a la misma imagen!");
    } else if (cartasEscogidas[0] === cartasEscogidas[1]) {
      cards[opcionUnoId].setAttribute("src", "imgenes/blank.png");
      cards[opcionDosId].setAttribute("src", "imgenes/blank.png");
      cards[opcionUnoId].removeEventListener("click", voltearCarta);
      cards[opcionDosId].removeEventListener("click", voltearCarta);
      cartasGanadas.push(cartasEscogidas);
    } else {
      cards[opcionUnoId].setAttribute("src", "imgenes/reverso.png");
      cards[opcionDosId].setAttribute("src", "imgenes/reverso.png");
      alert("¡Intenta de nuevo!");
    }
    cartasEscogidas = [];
    cartasEscogidasId = [];

    resultado.textContent = cartasGanadas.length;

    if (cartasGanadas.length === cardsAdj.length / 2) {
      resultado.textContent = "¡Felicidades, encontraste todos los pares!";
    }

 
  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardsAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardsAdj[cardId].img);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarPareja, 1500);
    }
  }
  crearTablero();
});

