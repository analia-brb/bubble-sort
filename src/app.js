/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function alAzar(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function nroALetra(nro) {
  if (nro == "11") {
    return "J";
  }
  if (nro == "12") {
    return "Q";
  }
  if (nro == "13") {
    return "K";
  }
  if (nro == "1") {
    return "A";
  }
  return nro;
}

function dibujarCarta(carta, lienzo) {
  let color = "";
  if (carta.palo == "♥") {
    color = "text-danger";
  }
  if (carta.palo == "♦") {
    color = "text-danger";
  }

  document.getElementById(
    lienzo
  ).innerHTML += `<div class="card m-auto" style="width: 18rem;">
      <div class="card-body ${color}">
          <div class="top ">${carta.palo}</div>
          <div class="number">${nroALetra(carta.numero)}</div>
          <div class="bottom">${carta.palo}</div>
      </div>
  </div>`;
}

function randomCard() {
  const palos = ["♥", "♣", "♠", "♦"];
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  let carta = {
    palo: alAzar(palos),
    numero: alAzar(number)
  };
  return carta;
}

function variasCartas(input) {
  todascartas = [];

  document.getElementById("cards").innerHTML = "";
  for (let i = 1; i <= input; i++) {
    let newCard = randomCard(); //Guardo mi carta en esta variable
    dibujarCarta(newCard, "cards");
    todascartas.push(newCard);
  }
}

let todascartas = [];

const bubbleSort = arr => {
  let wall = arr.length - 1; //iniciamos el wall o muro al final del array
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      //comparar las posiciones adyacentes, si la correcta es más grande, tenemos que intercambiar
      if (arr[index].numero > arr[index + 1].numero) {
        let aux = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
      }
      index++;
    }
    wall--; //disminuir la pared para optimizar
  }
  return arr;
};

window.onload = function() {
  document.getElementById("boton1").addEventListener("click", () => {
    let tomavalor = document.getElementById("input");
    variasCartas(tomavalor.value);
  });

  document.getElementById("boton2").addEventListener("click", () => {
    let nro_cartas = [];
    let orden = bubbleSort(todascartas);
    console.log(orden);
    document.getElementById("cards").innerHTML = "";
    orden.forEach(carta => {
      dibujarCarta(carta, "cards");
    });
  });
};
