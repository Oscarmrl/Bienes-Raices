// tan pronto el documento este listo procedera a ejecutar la funcion de dark mode
document.addEventListener('DOMContentLoaded', function () {

    eventListeners();

    darkMode();
})

function darkMode() {

    // identifica si prefiere modo claro o modo oscuro
    const prefiereDarkmode = window.matchMedia('(prefers-color-sheme: dark)');


    if (prefiereDarkmode.matches) {
        document.body.classList.add('dark-mode')
    } else {
        document.body.classList.remove('dark-mode')
    }

    // identifica si el usuario cambio desde dentro de la pagina el modo de colores del sistema
    prefiereDarkmode.addEventListener('change', function () {
        if (prefiereDarkmode.matches) {
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    })


    const botonDarkMode = document.querySelector('.dark-mode-boton')

    botonDarkMode.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode')
    })
}

function eventListeners() {
    const mobilemenu = document.querySelector('.mobile-menu');


    mobilemenu.addEventListener('click', navegacionResponsive);
}

// agregando clase mostrar en navegacion
function navegacionResponsive() {
    const navegacion = document.querySelector('.navegacion')

    if (navegacion.classList.contains('mostrar')) {
        navegacion.classList.remove('mostrar');
    } else {
        navegacion.classList.add('mostrar')
    }
}