let buttonSwitch = document.getElementById('switch-button')
let button = document.querySelector('#switch-button img')
let body = document.getElementById('body')
let logo = document.getElementById('logo')

setTheme = (type) => {

    switch (type) {
        case "storage":
            storageTheme = localStorage.getItem('theme')

            if(storageTheme == "light") {
                body.classList.toggle('light')

                buttonSwitch.classList.remove('switch-dark')
                buttonSwitch.classList.add('switch-light')
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
                logo.src="images/logo/logo-preta.png"
                button.src="images/switch-light.png"

                localStorage.setItem('theme', 'light')
            
            } else {

                buttonSwitch.classList.remove('switch-light')
                buttonSwitch.classList.add('switch-dark')
                logo.src="images/logo/logo-branca.png"
                button.src="images/switch-dark.png"
                
                localStorage.setItem('theme', 'dark')
            }
            break
    }       
}
