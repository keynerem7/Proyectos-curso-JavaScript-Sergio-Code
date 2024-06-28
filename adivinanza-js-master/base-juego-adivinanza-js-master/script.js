// Selecciona un número al azar
// let numeroAzar = Math.floor(Math.random()*100) + 1

// let numeroEntrada = document.getElementById('numeroEntrada')
// let mensaje = document.getElementById('mensaje')

// // Esta accion se va a ejecutar cuando se toque el botón chequear
// function chequearResultado(){
//     let numeroIngresado = parseInt(numeroEntrada.value)
//     // console.log(numeroAzar)
    
//     if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
//         mensaje.textContent = 'Por favor, introduce un número válido entre 1 y 100'
//         return

//     }

//     if(numeroIngresado === numeroAzar){
//         mensaje.textContent = '¡Felecitaciones! ¡Has adivinado el numero!'
//         mensaje.style.color = 'green'
//         numeroEntrada.disabled = true
//     }else if(numeroIngresado < numeroAzar){
//         mensaje.textContent = '¡Mas alto! El numero es mayor'
//         mensaje.style.color = 'green'
//     }else{
//         mensaje.textContent = '¡Mas bajo!, El número es más bajo'
//         mensaje.style.color = 'red'
//     }
// }



// let numeroAzar = Math.floor(Math.random()*100)+1
// let numeroEntrada = document.getElementById('numeroEntrada')
// let mensaje = document.getElementById('mensaje')
// let intento = document.getElementById('intento')
// let intentos = 0

// function chequearResultado(){
//     console.log(numeroAzar)
//     intentos++
//     document.getElementById('intento'). innerHTML = intentos
//     let numeroIngresado = parseInt(numeroEntrada.value)
//     if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
//         mensaje.textContent = 'Por favor ingresar un número del 1 al 100'
//         mensaje.style.color = 'red'
//         return
//     }

//     if(numeroIngresado === numeroAzar){
//         mensaje.textContent = 'Felicidades adivinaste el número'
//         mensaje.style.color = 'green'
//     }else if(numeroIngresado < numeroAzar){
//         mensaje.textContent = 'El numero es mayor'
//         mensaje.style.color = 'blue'
//     }else{
//         mensaje.textContent = 'El numero es menor'
//         mensaje.style.color = 'violet'
//     }
// }


let nombreAdivinar = ['Keyner', 'Estrada', 'Madrid']
let palabraEntrada = document.getElementById('numeroEntrada')
let intento = document.getElementById('intento')
let mensaje = document.getElementById('mensaje')
let intentos = 0

function chequearResultado(){
    intentos++
    document.getElementById('intento').innerHTML = intentos
    let palabraIngresada = palabraEntrada.value
    console.log(palabraIngresada)
    if(nombreAdivinar.includes(palabraIngresada)){
        mensaje.textContent = 'Adivinanste la palabra'
        mensaje.style.color = 'green'
    }else{
        mensaje.textContent = 'No se encuentra la palabra'
        mensaje.style.color = 'red'
    }
}