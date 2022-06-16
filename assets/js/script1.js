document.getElementById("doggy").addEventListener("click", cambiaBorder)

function cambiaBorder() {
    let dog = document.getElementById("doggy")

    if (doggy.style.border != "") {
        doggy.style.border = ""
    } else {
        doggy.style.border = "solid 2px red"
    }

}