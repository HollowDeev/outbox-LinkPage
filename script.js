let buttonContainer = document.getElementById('switch-container')
let buttonSwitch = document.getElementById('switch-button')
let button = document.querySelector('#switch-button img')
let body = document.getElementById('body')
let logo = document.getElementById('logo')

buttonContainer.addEventListener('click', () => {

    body.classList.toggle('light')
    
    if (body.classList.contains('light')) {

        buttonSwitch.classList.remove('switch-dark')
        buttonSwitch.classList.add('switch-light')
        logo.src="images/logo/logo-preta.png"
        button.src="images/switch-light.png"
    
    } else {

        buttonSwitch.classList.remove('switch-light')
        buttonSwitch.classList.add('switch-dark')
        logo.src="images/logo/logo-branca.png"
        button.src="images/switch-dark.png"
        
    }

})
