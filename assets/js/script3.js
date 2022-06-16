document.getElementById("boton1").addEventListener("click", pass)

function pass() {
    let num1 = document.getElementById("number1").value
    let num2 = document.getElementById("number2").value
    let num3 = document.getElementById("number3").value

    if (num1 + num2 + num3 == "911"){
        msg.innerText = "Password 1 correcto."
        document.getElementById("msg").style = "none"
    } else if (num1 + num2 + num3 == "714"){
        msg.innerText = "Password 2 correcto."
        document.getElementById("msg").style = "none"
    } else {
        msg.innerText = "Password incorrecto."
        document.getElementById("msg").style.backgroundColor = "#ff0000"
        document.getElementById("msg").style.color = "#ffffff"
    }
}