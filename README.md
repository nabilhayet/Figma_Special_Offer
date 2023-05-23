![GitHub Repo stars](https://img.shields.io/github/stars/nabilhayet/Figma_Special) ![GitHub forks](https://img.shields.io/github/forks/nabilhayet/Figma_Special) ![GitHub followers](https://img.shields.io/github/followers/nabilhayet) ![Bitbucket open issues](https://img.shields.io/bitbucket/issues/nabilhayet/Figma_Special)                                          
                                        <h1>:bomb: Figma Special Offer :bomb: </h1>
                                                      
This project lets a user submit a form and view the background color being changed!
<a href="https://www.youtube.com/watch?v=zzajWnG05uU">Demo</a>

Table of Contents
- [Features](#features)
- [Tech-Stack](#tech-stack)
- [Installing](#installing)
- [Challenges](#challenges)
- [Future-Implementation](#future-implementation)
- [Code-Snippet](#code-snippet)
                               
## Features
<ul>
 <li>Submit a UI Form.</li>
 <li>View Background color being changed</li>
</ul>

## Form Submission
![figma](https://github.com/nabilhayet/Figma_Special_Offer/assets/33500404/362a1791-e95f-4d3d-9acb-fbbf00af89a1)



## Tech-Stack
<p>This web app makes use of the following:</p>

* html: 5,	
*	css: 3,
*	javascript


## Installing
<ul>
<li> Clone this repo to your local machine by using the command git clone <this-repo-url></li>
<li> run open index.html or right click on the html file.</li>
</ul>
        
## Challenges
<ul>
<li> Setting up UI form fields according to figma design. </li>
<li> Remove background image and change color.</li>
<li> Change background color</li>
</ul>

## Future-Implementation
<ul>
<li> Add bootstrap to make the UI more appealing</li>
<li> Add logical condition for error handling in javascript</li>
<li> Add sperate UI for error or output</li>
</ul> 

## Code-Snippet 

```
 <div class="form-wrap">
            <form id="post">
                <div class="first_form_part">
                    <input class="name" type="text" placeholder="Name" id="name">
                    <input class="email" type="email" placeholder="Email" id="email">
                </div>
                <div class="second_form_part">
                    <input class="handle" type="password" placeholder="Handle" id="handle">
                </div>
                <p class="footer">By entering the above information you are agreeing to receive<br> emails from or on
                    behalf of SPECIAL
                    OFFER.</p>
                <div class="submit_form_part">
                    <input class="submit" type="button" value="Submit">
                </div>

            </form>
        </div>
```

```
.form-wrap {
    width: cover;
    height: cover;
    margin-left: 0%;
    padding: 20px 0px;
}
```

```
let name = document.querySelector("#name")
let email = document.querySelector("#email")
let handle = document.querySelector("#handle")

let submit = document.querySelector(".submit")
let divTag = document.createElement("div")

submit.addEventListener("click", function () {
    document.body.innerHTML = "";
    document.body.style.backgroundImage = "none"
    document.body.style.backgroundColor = "bisque"

    pTag.innerText += "Your name is" + " " + name.value
    pTag.appendChild(brTag)
    divTag.appendChild(pTag)
    main.appendChild(divTag)
```

