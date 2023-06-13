let buttonSwitch = document.getElementById('switch-button')
let button = document.querySelector('#switch-button img')
let body = document.getElementById('body')

let logo = document.getElementById('logo')
// let instagram = document.getElementById('img-instagram')

let github = document.querySelectorAll(".img-github")
let linkedin = document.querySelectorAll(".img-linkedin")
let curriculum = document.querySelectorAll(".img-curriculum")

setTheme = (type) => {

    switch (type) {
        case "storage":
            storageTheme = localStorage.getItem('theme')

            if(storageTheme == "light") {
                body.classList.toggle('light')

                buttonSwitch.classList.remove('switch-dark')
                buttonSwitch.classList.add('switch-light')

                github.forEach( (el) => {
                    if (el.className === "img-github") {
                      el.src="images/botoes/github-light.png"
                    }
                }) 
                
                
                linkedin.forEach( (el) => {
                    if (el.className === "img-linkedin") {
                      el.src="images/botoes/linkedin-light.png"
                    }
                }) 
                
                curriculum.forEach( (el) => {
                    if (el.className === "img-curriculum") {
                      el.src="images/botoes/curriculo-light.png"
                    }
                }) 

                // instagram.src="images/botoes/instagram-light.png"
                logo.src="images/logo/logo-preta.png"
                button.src="images/switch-light.png"

                localStorage.setItem('theme', 'light')
            }
            break

        case "sistem":
            body.classList.toggle('light')
    
            if (body.classList.contains('light')) {

                buttonSwitch.classList.remove('switch-dark')
                buttonSwitch.classList.add('switch-light')

                github.forEach( (el) => {
                    if (el.className === "img-github") {
                      el.src="images/botoes/github-light.png"
                    }
                }) 
                
                
                linkedin.forEach( (el) => {
                    if (el.className === "img-linkedin") {
                      el.src="images/botoes/linkedin-light.png"
                    }
                }) 
                
                curriculum.forEach( (el) => {
                    if (el.className === "img-curriculum") {
                      el.src="images/botoes/curriculo-light.png"
                    }
                })

                // instagram.src="images/botoes/instagram-light.png"
                logo.src="images/logo/logo-preta.png"
                button.src="images/switch-light.png"

                localStorage.setItem('theme', 'light')
            
            } else {

                buttonSwitch.classList.remove('switch-light')
                buttonSwitch.classList.add('switch-dark')

                github.forEach( (el) => {
                    if (el.className === "img-github") {
                      el.src="images/botoes/github.png"
                    }
                }) 
                
                
                linkedin.forEach( (el) => {
                    if (el.className === "img-linkedin") {
                      el.src="images/botoes/linkedin.png"
                    }
                }) 
                
                curriculum.forEach( (el) => {
                    if (el.className === "img-curriculum") {
                      el.src="images/botoes/curriculo.png"
                    }
                })

                // instagram.src="images/botoes/instagram-dark.png"
                logo.src="images/logo/logo-branca.png"
                button.src="images/switch-dark.png"
                
                localStorage.setItem('theme', 'dark')
            }
            break
    }       
}
