import { obtenerComentarios, obtenerEquipos } from './api.js';
import { renderizarComentarios, renderizarEquipos } from './dom.js';

const botonCarga = document.getElementById('btn-cargar');
const carrusel = document.getElementById('carruselEquipos');
const divCarousel = document.getElementById('intCarrusel');
const listaComentarios = document.getElementById('lista-comentarios');
const botonAgregar = document.getElementById('boton-agregar');
const url = 'https://testfinalhobby-back.onrender.com/comments';


window.addEventListener('DOMContentLoaded', async() => {
  const comentarios = await obtenerComentarios();
  renderizarComentarios(comentarios, listaComentarios);
});

botonCarga.addEventListener('click', async () => {
  try {
    const equipos = await obtenerEquipos();
    carrusel.style.display = "block";
    renderizarEquipos(equipos, divCarousel);
  } catch (error) {
    alert('No fue posible cargar los equipos');
  }
});

botonAgregar.addEventListener('click', async() =>{
  let comments = document.getElementById('txtComentario').value;
  document.getElementById('txtComentario').value = '';
  let datos = {
    Comments: comments
  }
  fetch(url,{
    method: 'POST', headers: {
        'Content-Type': 'application/json'
    }, body: JSON.stringify(datos)
  })
  .then(response => response.json())
  .then(info => window.location.reload())
  .catch(error => console.error('Error:', error));
}
);