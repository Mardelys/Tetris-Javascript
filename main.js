
window.onload = function Bienvenida() {
    Swal.fire({
        title: '¡Bienvenido!',
        text: 'Disfruta de este juego tan entretenido, juega un clásico que nunca pasa de moda ¿Deseas iniciar?',
        color: '#000',
        imageUrl: '/img/tetris.png',
        imageWidth: 450,
        imageHeight: 250,
        background: 'linear-gradient(125deg, rgba(96,255,255,1) 0%, rgba(118,118,254,1) 35%, rgba(235,119,255,1) 100%) ',
        imageAlt: 'Custom image',
    })
};
//Se declara el canvas como constante ya que este elemento no varía durante el juego//
const canvas = document.getAnimations('tetris-container');
//Esta linea de código hace referencia a que lo que estará conteniendo el canvas será en 2d//
const context = canvas.getContext('2d');

context.scale (25,25);