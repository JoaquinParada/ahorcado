import { reiniciar } from "./funciones.js";

let modalVictoriaContainer = document.querySelector(
  ".modal-victoria-container"
);
let modalPerdisteContainer = document.querySelector(
  ".modal-perdiste-container"
);
let modal = document.querySelector(".modal");
export function abrirModal() {
  modal.style.display = "flex";
}

export function cerrarModal() {
  modal.style.display = "none";
}

function cerrarModalVictoria() {
  reiniciar();
  modalVictoriaContainer.style.display = "none";
}
function cerrarModalLost() {
  reiniciar();
  modalPerdisteContainer.style.display = "none";
}
export function evaluarVictoria(displayPalabra, palabra) {
  let palabraIncognita = displayPalabra.join("");
  modalVictoriaContainer.innerHTML = "";
  if (palabraIncognita == palabra) {
    modalVictoriaContainer.style.display = "flex";
    let modalVictoria = `
    
      <div class="modal-tarjeta">
        <h2>Ganaste</h2>
        <button class="btn btn-victoria btn-modal">cerrar</button>
        <p>La haz logrado descifrar ${palabra}</p>
      </div>
    `;
    modalVictoriaContainer.innerHTML = modalVictoria;
    let btnVictoria = document.querySelector(".btn-victoria");
    btnVictoria.addEventListener("click", cerrarModalVictoria);
  }
}

export function modalPerdiste(palabra) {
  modalPerdisteContainer.style.display = "flex";
  let modalLost = `

  <div class="modal-tarjeta">
    <h2>Perdiste</h2>
    <button class="btn btn-lost btn-modal">cerrar</button>
    <p>no haz logrado descifrar ${palabra}</p>
  </div>
  `;
  modalPerdisteContainer.innerHTML = modalLost;
  let btnLost = document.querySelector(".btn-lost");
  btnLost.addEventListener("click", cerrarModalLost);
}
