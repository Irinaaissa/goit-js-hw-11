import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const gallery = document.getElementById('gallery');

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '41471340-7b105b7a368edb6edd340273b';

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});
const loader = document.querySelector('.loader');

function showLoadingIndicator() {
    loader.style.display = 'block';
}

function hideLoadingIndicator() {
    loader.style.display = 'none';
}

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const query = searchInput.value;

    if (query.trim() === '') {
        iziToast.error({
            title: 'Error',
            message: 'Sorry, there are no images matching your search',
        });

        return hideLoadingIndicator();
    }

    showLoadingIndicator();

    try {
        const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${query}`);

        if (!response.ok) {
            throw new Error(response.status);
        }

        const { hits } = await response.json();

        gallery.innerHTML = '';

        const markup = hits
            .map(
                ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}" >
            <img
              class="gallery-image"
              src="${webformatURL}"
              data-source="${largeImageURL}"
              alt="${tags}"
            />
          </a>
          <div class="card-info">
          <div class="field">
              <span class="label">Likes</span>
              <span class="value">${likes}</span>    
          </div>
          
          <div class="field">
              <span class="label">Views</span>
              <span class="value">${views}</span>   
          </div>
          <div class="field">
              <span class="label">Comments</span>
              <span class="value">${comments}</span>    
          </div>
          <div class="field">
              <span class="label">Downloads</span>
              <span class="value">${downloads}</span>    
          </div>
          </div>
        </li>
      `
            )
            .join('');

        gallery.insertAdjacentHTML('beforeend', markup);

        lightbox.refresh();
    } catch (error) 
    {
        iziToast.error({
            title: 'Error',
            message: 'Error',
        });
    } finally {
        hideLoadingIndicator();
        event.target.reset();
    }
});
