// let main = document.querySelector(".main")
let body = document.querySelector(".body")
let form = document.querySelector('#post');
let main = document.body

let name = document.querySelector("#name")
let email = document.querySelector("#email")
let handle = document.querySelector("#handle")

let submit = document.querySelector(".submit")
let divTag = document.createElement("div")
let pTag = document.createElement("p")

submit.addEventListener("click", function () {

    pTag.textContent = name.value
    divTag.appendChild(pTag)

    pTag.textContent = email.value
    divTag.appendChild(pTag)

    pTag.textContent = handle.value
    divTag.appendChild(pTag)
    console.log("We are here")

    document.body.innerHTML = "";
    document.body.style.backgroundImage = "none"
    document.body.style.backgroundColor = "Yellow"

});