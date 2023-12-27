import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const gallery = document.getElementById('gallery');


const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '41471340-7b105b7a368edb6edd340273b';

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = searchInput.value;
    try {
        const response = await fetch(`${getBaseUrl()}&q=${query}&safesearch=true`);
        const data = await response.json();
        const images = data.hits;

        if (images.length > 0) {
            gallery.innerHTML = '';

            images.forEach(image => {
                const imgElement = document.createElement('img')
                imgElement.src = image.webformatURL;
                gallery.appendChild(imgElement);
            });
        } else {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching yo'
            });
        }
    } catch (error) {
        console.error(error);
    }
    
});

const getBaseUrl = () => {
    const url = new URL(BASE_URL);
    url.searchParams.append('key', API_KEY);

    return url;
};



new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  
});
