import { obtenerEquipos, obtenerUsuarios } from './api.js';
import { renderizarEquipos, renderizarUsuarios } from './dom.js';

const boton = document.getElementById('btn-cargar');
const carrusel = document.getElementById('carruselEquipos');
const divCarousel = document.getElementById('intCarrusel');

window.addEventListener('load', function() {
  console.log('La página y todos sus recursos han cargado por completo');
  // Tu código aquí
});

boton.addEventListener('click', async () => {
  try {
    const equipos = await obtenerEquipos();
    carrusel.style.display = "block";
    renderizarEquipos(equipos, divCarousel);
  } catch (error) {
    alert('No fue posible cargar los equipos');
  }
});
