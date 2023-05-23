let body = document.querySelector(".body")
let main = document.body

let name = document.querySelector("#name")
let email = document.querySelector("#email")
let handle = document.querySelector("#handle")

let submit = document.querySelector(".submit")
let divTag = document.createElement("div")
divTag.className = "form-info"
let pTag = document.createElement("p");
let li = document.createElement('li');
let brTag = document.createElement('br')

submit.addEventListener("click", function () {
    document.body.innerHTML = "";
    document.body.style.backgroundImage = "none"
    document.body.style.backgroundColor = "bisque"

    pTag.innerText += "Your name is" + " " + name.value
    pTag.appendChild(brTag)
    divTag.appendChild(pTag)
    main.appendChild(divTag)

    pTag.innerText += "Your email is" + " " + email.value
    pTag.appendChild(brTag)
    divTag.appendChild(pTag)
    main.appendChild(divTag)

    pTag.innerText += "Your handle is" + " " + handle.value
    pTag.appendChild(brTag)
    divTag.appendChild(pTag)
    main.appendChild(divTag)
})