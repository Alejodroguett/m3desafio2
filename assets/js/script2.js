document.getElementById("boton").addEventListener("click", mifuncion)

function mifuncion() {
    let num1 = Number(document.getElementById("valor1").value)
    let num2 = Number(document.getElementById("valor2").value)
    let num3 = Number(document.getElementById("valor3").value)
    let total = num1 + num2 +num3

    if (num1 + num2 +num3 < "10"){
        msg.innerText = "Llevas " + total + " stickers."
    } else if (num1 + num2 + num3 == "10"){
        msg.innerText = "Perfecto! llevas tus 10 stickers."
    } else {
        msg.innerText = "Llevas demasiados stickers."
    } 
}