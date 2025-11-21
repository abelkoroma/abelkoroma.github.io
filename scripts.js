// Search functionality for songs
const searchInput = document.getElementById('songSearch');
const searchResults = document.getElementById('searchResults');

searchInput.addEventListener('input', function () {
    const filter = searchInput.value.toLowerCase();
    const songs = document.querySelectorAll('.songs ul li');

    // Clear previous search results
    searchResults.innerHTML = '';

    songs.forEach(song => {
        const title = song.querySelector('p') ? song.querySelector('p').textContent.toLowerCase() : '';
        if (title.includes(filter) && filter !== '') {
            // Create a new list item for the search result
            const resultItem = document.createElement('li');
            resultItem.innerHTML = song.innerHTML; // Copy the song's content
            searchResults.appendChild(resultItem); // Add to search results
        }
    });
});
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});