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