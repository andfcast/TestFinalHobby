import { obtenerUsuarios } from './api.js';
import { renderizarUsuarios } from './dom.js';

const boton = document.getElementById('btn-cargar');
const lista = document.getElementById('lista-usuarios');

boton.addEventListener('click', async () => {
  try {
    const usuarios = await obtenerUsuarios();
    renderizarUsuarios(usuarios, lista);
  } catch (error) {
    alert('No fue posible cargar los usuarios');
  }
});
