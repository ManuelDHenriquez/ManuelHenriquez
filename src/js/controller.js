import { images } from '../../src/data/data.js'

console.log(images)

const gallery = document.getElementById('gallery');
gallery.innerHTML = '';
images.forEach((image) => {
    gallery.innerHTML += `
        <a href="./src/${image.imagen}" data-lightbox="Models">
        <img src="./src/${image.imagen}">
    </a>
    `;
});

const checkbox = document.getElementById('checkbox');
const navbar_container = document.getElementById('navbar_container');

checkbox.addEventListener('change', () => {
    // change theme of website
    console.log('cambio de tema');
    if (checkbox.checked) {
        navbar_container.classList.add('white');
        navbar_container.classList.remove('dark');
    } else {    
        navbar_container.classList.add('dark');
        navbar_container.classList.remove('white');
    }
});