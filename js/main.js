import {
  elegirPalabra,
  mostrarPalabra,
  obtenerIndicesLetra,
  agregarLetra,
  guardarLetras,
  reiniciar,
  palabra,
  displayPalabra,
  letrasElegidas,
  sumarError,
} from "./funciones.js";
import { abrirModal, cerrarModal, evaluarVictoria } from "./modales.js";
import mostrarPartesDelCuerpo from "./stickMan.js";

let LetraInput = document.querySelector(".letra-input");
let btnLetraInput = document.querySelector(".btn-letra-input");
let btnReiniciar = document.querySelector(".btn-reiniciar");
let btnCerrarModal = document.querySelector(".cerrar-modal");
let btnInfo = document.querySelector(".btn-info");
let form = document.querySelector(".container-letra-input");

elegirPalabra();

for (let i = 0; i < palabra.length; i++) {
  displayPalabra.push(" ");
}

mostrarPalabra();

/*---------------------------------------------------------------------------
-----------------  EVENTOS CLICK ENVIAR LETRA --------------------------------
----------------------------------------------------------------------------*/
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let padre = e.target;
  let inputValue = padre.querySelector(".letra-input").value;

  let letraRegex = /[A-Za-z]/;
  let validarLetra = letraRegex.test(inputValue);
  if (validarLetra) {
    inputValue = inputValue.toLowerCase();
    let index = obtenerIndicesLetra(inputValue);
    if (index) {
      agregarLetra(index, inputValue);
      mostrarPalabra();
    } else {
      if (letrasElegidas.includes(inputValue)) {
      } else {
        let err = sumarError();
        mostrarPartesDelCuerpo(err);
      }
    }
    if (letrasElegidas.includes(inputValue)) {
    } else {
      guardarLetras(inputValue);
    }
  }
  LetraInput.value = "";
  LetraInput.focus();
  evaluarVictoria(displayPalabra, palabra);
});

btnReiniciar.addEventListener("click", reiniciar);

/*---------------------------------------------------------------------------
-----------------  EVENTOS CLICK DE LOS MODALES DE COMO JUGAR----------------
----------------------------------------------------------------------------*/

btnInfo.addEventListener("click", abrirModal);
btnCerrarModal.addEventListener("click", cerrarModal);
