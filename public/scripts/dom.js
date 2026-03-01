export function renderizarUsuarios(usuarios, contenedor) {
  contenedor.innerHTML = '';

  usuarios.forEach(usuario => {
    const li = document.createElement('li');
    li.textContent = usuario.name; 
    contenedor.appendChild(li);
  });
}

export function renderizarEquipos(equipos, contenedor) {
  contenedor.innerHTML = '';
  let i = 1;
  equipos.forEach(equipo => {
    const divElement = document.createElement('div');
    divElement.classList.add('carousel-item');
    if(i==1){
      divElement.classList.add('active');
    }
    const imgElement = document.createElement('img');
    debugger;
    imgElement.src = 'img/' + equipo.img;
    imgElement.classList.add('d-block');
    imgElement.classList.add('w-100');
    imgElement.alt = equipo.Name;
    divElement.appendChild(imgElement);
    contenedor.appendChild(divElement);
    i+=1;
  });
}
