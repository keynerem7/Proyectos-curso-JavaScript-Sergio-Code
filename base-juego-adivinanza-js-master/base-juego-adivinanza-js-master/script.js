// Selecciona un número al azar
let numeroAzar = Math.floor(Math.random()*100) + 1

let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')

// Esta accion se va a ejecutar cuando se toque el botón chequear
function chequearResultado(){
    let numeroIngresado = parseInt(numeroEntrada.value)
    // console.log(numeroAzar)
    
    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'Por favor, introduce un número válido entre 1 y 100'
        return

    }

    if(numeroIngresado === numeroAzar){
        mensaje.textContent = '¡Felecitaciones! ¡Has adivinado el numero!'
        mensaje.style.color = 'green'
        numeroEntrada.disabled = true
    }else if(numeroIngresado < numeroAzar){
        mensaje.textContent = '¡Mas alto! El numero es mayor'
        mensaje.style.color = 'green'
    }else{
        mensaje.textContent = '¡Mas bajo!, El número es más bajo'
        mensaje.style.color = 'red'
    }
}
