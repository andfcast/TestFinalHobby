const comentarios = [];

export async function obtenerComentarios() {
  const response = await fetch('https://testfinalhobby-back.onrender.com/comments');

  if (!response.ok) {
    throw new Error('Error al obtener los datos');
  }

  return await response.json();
}

export async function obtenerEquipos(){
  const equipos = [{"Id": 1, "Name":"Red Bull", "img":"redbull.png"}, {"Id": 2, "Name":"McLaren", "img":"mclaren.png"}, {"Id": 3, "Name":"Mercedes", "img":"mercedes.png"},
    {"Id": 4, "Name":"Ferrari", "img":"ferrari.png"}, {"Id": 5, "Name":"Aston Martin", "img":"astonmartin.png"}, {"Id": 6, "Name":"Williams", "img":"williams.png"},
    {"Id": 7, "Name":"Haas", "img":"haas.png"}, {"Id": 8, "Name":"Racing Bulls", "img":"racingbulls.png"}, {"Id": 9, "Name":"Audi", "img":"audi.png"}, {"Id": 10, "Name":"Alpine", "img":"alpine.png"}
    , {"Id": 11, "Name":"Cadillac", "img":"cadillac.png"}];
  return await equipos;
}
