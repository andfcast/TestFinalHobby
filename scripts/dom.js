export function renderizarUsuarios(usuarios, contenedor) {
  contenedor.innerHTML = '';

  usuarios.forEach(usuario => {
    const li = document.createElement('li');
    li.textContent = usuario.name; 
    contenedor.appendChild(li);
  });
}
