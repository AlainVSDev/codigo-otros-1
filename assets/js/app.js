//Este ejercicio obtiene la informacion de un usuarui en GitHub a traves de su API
//se define la constante baseEndpoint como la URL a la API de Github
const baseEndpoint = 'https://api.github.com';
//La constante usersEndpoint se define para obtener la informacion de los usuarios de gitHub 
const usersEndpoint = `${baseEndpoint}/users`;
//se obtienen tres elementos HTML para mostrar la infromacion del usuario
const $n = document.querySelector('.name'); //'name' -> '.name' de lo contrario no se refiere a un elemento HTML valido. dando como resultado que '$n' sea null
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

//Se le agrega 'async' debido a que 'await' solo puede ser usado dentro de funciones marcadas como 'async'
async function displayUser(username) { //displayUser toma el nombre de un usuario como arg 
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`); // con el uso de 'fetch' se hace la solicitud a la API de Github y se almacena en la constante 'response', y mediante el metodo JSON se obtienen los datos del usuario en este formato, almacenandose en 'data'
  console.log(data);
  //se actualiza el contenido de los elementos HTML usando la propiedad 'textContent'
  $n.textContent = `${data.name}`;  //Las comillas simples no son correctas aqui ya que para interpolacion deben usarsde acento grave (`)
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}
//handleError  se utilizara para manejar los errores que puedan existir al hacer la solicitud a la API de Github, si el error existe, se mostrara en lugar del nombre de Usuario
function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}` //'n.textContent' no existe, esta debera llamarse de la misma manera como se llamo en la variable 'async function displayUser()', quedando de la siguiente manera '$n.textContent'
}
//vemos la informacion del usuario 'stolinski'
displayUser('stolinski').catch(handleError);