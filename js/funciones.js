import diccionario from "./diccionario.js";
export let palabra = "";
let errores = 0;
export let letrasElegidas = [];
export let displayPalabra = [];
let guardadoDeLetras = document.querySelector(".guardado-de-letras");
let containerPalabraIncognita = document.querySelector(
  ".container-palabra-incognita"
);
let iconoContainer = document.querySelector(".ahorcado-icono-container");
let inputValue = document.querySelector(".letra-input");

export function elegirPalabra() {
  let randomNum = Math.round(Math.random() * (diccionario.length - 1));
  palabra = diccionario[randomNum];
}

export function mostrarPalabra() {
  let ul = "";
  for (let el of displayPalabra) {
    let li = `<div class='cada-letra'>${el}</div>`;
    ul += li;
  }
  containerPalabraIncognita.innerHTML = ul;
}

export function obtenerIndicesLetra(letraElegida) {
  if (palabra.includes(letraElegida)) {
    let index = [];
    for (let i = 0; i < palabra.length; i++) {
      if (palabra[i] == letraElegida) {
        index.push(i);
      }
    }
    return index;
  } else {
    return null;
  }
}

export function agregarLetra(index, letraElegida) {
  for (let el of index) {
    displayPalabra[el] = letraElegida;
  }
}

export function guardarLetras(letra) {
  letrasElegidas.push(letra);
  guardadoDeLetras.innerHTML = letrasElegidas;
}

export function reiniciar() {
  elegirPalabra();
  displayPalabra = [];
  for (let i = 0; i < palabra.length; i++) {
    displayPalabra.push(" ");
  }
  guardadoDeLetras.innerHTML = "";
  iconoContainer.innerHTML = `<div class="madera-cabezal"></div>
  <div class="madera-mastil"></div><div class="madera-trasversal"></div>`;
  errores = 0;
  inputValue.value = "";
  letrasElegidas = [];
  mostrarPalabra();
}

export function sumarError() {
  return (errores += 1);
}
