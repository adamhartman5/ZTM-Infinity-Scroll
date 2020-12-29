const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = '8ew49ZBwkpuGfF6cIiiQfhE6Y2THJIbbjgUPz5fEWuU';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiURL);
        photosArray = await response.json();
        console.log(photosArray);

    } catch (error) {
        // Catch error here
    }
}

// On Load
getPhotos();