// Selecciona el elemento del encabezado (header) en el documento HTML
const header = document.querySelector("header");

// Agrega un evento de escucha para el desplazamiento de la página
window.addEventListener("scroll", function() {
    // Toma la clase "sticky" del encabezado y la agrega o quita dependiendo de la posición de desplazamiento (scroll)
    header.classList.toggle("sticky", window.scrollY > 120);
});

// Selecciona el elemento con el id 'menu-icon' y la lista de navegación con la clase 'navlist'
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

// Define una función que se ejecuta cuando se hace clic en el icono de menú
menu.onclick = () => {
    // Alterna la clase 'bx-x' en el icono de menú y la clase 'active' en la lista de navegación
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

// Establece un evento de desplazamiento que se ejecuta cuando se desplaza la página
window.onscroll = () => {
    // Elimina las clases 'bx-x' y 'active' del icono de menú y la lista de navegación, respectivamente
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};
