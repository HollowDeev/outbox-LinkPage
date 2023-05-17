let button = document.getElementById('switch')
let body = document.getElementById('body')
let logo = document.getElementById('logo')

button.addEventListener('click', () => {

    body.classList.toggle('body-light-theme')

    if (logo.classList.contains('logo-dark-theme')) {

        logo.src="images/logo/logo-preta.png"
        button.src="images/switch-light.png"

        body.style.setProperty('--card-background-color', 'rgba(0, 0, 0, 0.1)')
        body.style.setProperty('--card-border-color', 'rgba(0, 0, 0, 0.5)')
        body.style.setProperty('--primary-color', '#131313')
        body.style.setProperty('--secondary-color', '#FFFF')

        logo.classList.toggle('logo-dark-theme')

    } else {

        logo.src="images/logo/logo-branca.png"
        button.src="images/switch-dark.png"

        body.style.setProperty('--card-background-color', 'rgba(255, 255, 255, 0.1)')
        body.style.setProperty('--card-border-color', 'rgba(255, 255, 255, 0.5)')
        body.style.setProperty('--primary-color', '#FFFF')
        body.style.setProperty('--secondary-color', '#000')

        logo.classList.toggle('logo-dark-theme')

    }

})
