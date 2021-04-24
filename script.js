// EJERCÍCIO 1
// const nombre = prompt('Ingrese un nombre');
// const saludo=document.querySelector('h1')
// saludo.innerHTML = (`Hola ${nombre}!`);
// saludo.style.fontSize = '45px';
// saludo.style.textAlign = 'center';
// saludo.style.fontFamily = 'Courier New';
// saludo.style.color = 'red';

//EJERCICIO 2
// const color = prompt('Ingrese un color');
// const cambio=document.querySelector('body')
// cambio.style.background = color

//EJERCICIO 3
// const rojo = prompt('Ingrese un numero entre 0 y 255');
// const verde = prompt('Ingrese otro numero entre 0 y 255');
// const azul = prompt('Ingrese un ultimo numero entre 0 y 255');
// const cambio=document.querySelector('body')
// cambio.style.background = `rgb(${rojo}, ${verde}, ${azul})`

//EJERCICIO 4
// const tamano = prompt('Quieres la imagen chica, mediana o grande?')
// const image = document.querySelector('img')
// if (tamano=='chica'){
//     image.style.width = '200px'
// }
// else if (tamano=='mediana'){
//     image.style.width = '500px'
// }
// else if (tamano=='grande'){
//     image.style.width = '800px'
// }

//EJERCICIO 5
// const temperatura = prompt(`Cual es la temperatura actual?`)
// const termometro = document.querySelector(`h1`)
// termometro.innerText= `Temperatura actual: ${temperatura}º.`
// if (temperatura<0){
//     termometro.style.color = `#75B9D1`
// }
// else if (temperatura>=0 && temperatura<15){
//     termometro.style.color = `#3887A3`
// }
// else if (temperatura>= 15 && temperatura<25){
//     termometro.style.color = `green`

// }
// else if (temperatura>=25 && temperatura<30){
//     termometro.style.color = `#FFDD01`
// }
// else if (temperatura>=30 && temperatura<35){
//     termometro.style.color = `#FF3B0A`
// }
// else if (temperatura>=35){
//     termometro.style.color = `#F50101`
// }

//EJERCICIO 6
// const percentual = prompt(`Cuanto progresaste hoy en porcentaje?`)
// const number = parseInt(percentual)+'%'
// const progreso = document.getElementById('div2')
// progreso.style.width = number


//EJERCÍCIO 9
// const animal = prompt('Animal gato, perro o loro')
// const image = document.querySelector('img')
// if (animal=='gato'){
//     image.src='https://ichef.bbci.co.uk/news/640/cpsprodpb/10E9B/production/_109757296_gettyimages-1128004359.jpg'
// }
// else if(animal=='perro'){
//     image.src='http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg'
// }
// else if (animal=='loro'){
//     image.src='https://upload.wikimedia.org/wikipedia/commons/d/dd/Scarlet_Macaw_and_Blue-and-gold_Macaw.jpg'
// }



//ejercicio 11
//En un documento `html` crear una lista desordenada con al menos 10 items que consistan en oraciones, frases o citas. Hacer un programa que al iniciarse pregunte mediante un `prompt` por una palabra y destaque en rojo y en negrita aquellos items de la lista cuyo texto contenga dicha palabra.

//Guardo la palabra que hay que buscar
//const palabra = prompt("ingrese su comida");
//Guardo el texto donde aparece
//const text = document.getElementById("text");

//text.textContent optengo el texto del html,es decir,que tengo un string con el texto
//const textHTML = text.textContent;

//text.innerHTML voy a modificar el html
//replaceAll voy a tomar lo que ingreso el usuario y agrarle la etiqueta de span
//text.innerHTML = textHTML.replaceAll(palabra,`<span style="color:red;font-weight:bold">${palabra}</span>`);
{/* <p id="text">Lorem casa ipsum dolor sit amet, consectetur adipisicing elit. At optio, odio earum temporibus atque debitis, nihil error assumenda maxime sunt magni inventore expedita neque, exercitationem voluptatum illo recusandae sequi esse? casa</p> */}