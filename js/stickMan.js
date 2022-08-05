import { palabra } from "./funciones.js";
import { modalPerdiste } from "./modales.js";

let iconoContainer = document.querySelector(".ahorcado-icono-container");

export default function mostrarPartesDelCuerpo(numErrores) {
  if (numErrores == 1) {
    iconoContainer.innerHTML += `<div class="cabeza"></div>`;
  } else if (numErrores == 2) {
    iconoContainer.innerHTML += ` 
    <div class="cuerpo"></div>`;
  } else if (numErrores == 3) {
    iconoContainer.innerHTML += `
    <div class="extremidad-der brazo"></div>`;
  } else if (numErrores == 4) {
    iconoContainer.innerHTML += `
    <div class="extremidad-izq brazo"></div>`;
  } else if (numErrores == 5) {
    iconoContainer.innerHTML += ` 
    <div class="extremidad-der pierna"></div>`;
  } else if (numErrores == 6) {
    iconoContainer.innerHTML += `
    <div class="extremidad-izq pierna"></div>`;
  } else {
    modalPerdiste(palabra);
  }
}
