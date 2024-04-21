const dataList = document.getElementById('data-list');
const searchInput = document.getElementById('search-input');
let currentCategory = ''; // To keep track of the currently selected category

function clearDataList() {
    dataList.innerHTML = '';
}

function displayData(dataArray) {
    clearDataList();
    dataArray.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item.name || item.title;
        dataList.appendChild(listItem);
    });
}

function fetchSWAPI(url) {
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.error('Error fetching data:', error));
}

function getCharacters() {
    currentCategory = 'characters';
    highlightButton('characters');
    fetchSWAPI('https://swapi.dev/api/people/')
        .then(data => displayData(data.results));
}

function getFilms() {
    currentCategory = 'films';
    highlightButton('films');
    fetchSWAPI('https://swapi.dev/api/films/')
        .then(data => displayData(data.results));
}

function getStarships() {
    currentCategory = 'starships';
    highlightButton('starships');
    fetchSWAPI('https://swapi.dev/api/starships/')
        .then(data => displayData(data.results));
}

function getVehicles() {
    currentCategory = 'vehicles';
    highlightButton('vehicles');
    fetchSWAPI('https://swapi.dev/api/vehicles/')
        .then(data => displayData(data.results));
}

function getSpecies() {
    currentCategory = 'species';
    highlightButton('species');
    fetchSWAPI('https://swapi.dev/api/species/')
        .then(data => displayData(data.results));
}

function getPlanets() {
    currentCategory = 'planets';
    highlightButton('planets');
    fetchSWAPI('https://swapi.dev/api/planets/')
        .then(data => displayData(data.results));
}

function highlightButton(category) {
    // Remove highlight from all buttons
    const buttons = document.querySelectorAll('#categories button');
    buttons.forEach(button => {
        button.style.backgroundColor = '#007bff';
    });

    // Highlight the selected category button
    const selectedButton = document.querySelector(`#categories button[data-category="${category}"]`);
    if (selectedButton) {
        selectedButton.style.backgroundColor = '#28a745'; // Change to green or your preferred color
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Default: Display characters on page load
    getCharacters();

    // Handle category button clicks
    const categoryButtons = document.querySelectorAll('#categories button');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            if (category !== currentCategory) {
                // Only fetch data if a different category button is clicked
                switch (category) {
                    case 'characters':
                        getCharacters();
                        break;
                    case 'films':
                        getFilms();
                        break;
                    case 'starships':
                        getStarships();
                        break;
                    case 'vehicles':
                        getVehicles();
                        break;
                    case 'species':
                        getSpecies();
                        break;
                    case 'planets':
                        getPlanets();
                        break;
                    default:
                        break;
                }
            }
        });
    });

    // Handle search input
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const dataItems = dataList.querySelectorAll('li');

        dataItems.forEach(item => {
            const itemName = item.textContent.toLowerCase();
            if (itemName.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
