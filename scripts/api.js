export async function obtenerUsuarios() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!response.ok) {
    throw new Error('Error al obtener los datos');
  }

  return await response.json();
}
