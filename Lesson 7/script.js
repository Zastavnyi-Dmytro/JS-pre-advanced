$(function () {
    $('#search').on('click', async function () {
        let searchItem = $('#searchInput').val();
        let url = `http://www.omdbapi.com/?i=tt3896198&apikey=78d514&s=${searchItem}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.Search) {
                displaySearchResults(data.Search);
            } else {
                console.log('No results found');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    })

    function displaySearchResults(results) {
        $('#results').html('');

        results.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.className = 'movieItem'
            movieElement.innerHTML = `
                <img src="${movie.Poster}" alt="">
                <h2>${movie.Title}</h2>
                <p>${movie.Year}</p>
                <button class="detailsBtn" onclick="getMovieDetails('${movie.imdbID}')">More Details</button>
            `;

            $('#results').append(movieElement);
        });
    }

    $('.close-button').on('click', function () {
        $('#modal').hide()
    })

})

let modalContent = document.getElementById('modalContent')

async function getMovieDetails(imdbID) {
    let url = `http://www.omdbapi.com/?i=${imdbID}&apikey=78d514&i`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMovieDetails(data);
    } catch (error) {
        console.log('Error:', error);
    }
}

function displayMovieDetails(movie) {
    modalContent.innerHTML = `
        <img src="${movie.Poster}" alt="">
        <h2>${movie.Title}</h2>
        <p>${movie.Rated} ${movie.Year} ${movie.Genre}</p>
        <p>${movie.Plot}</p>
        <p><b>Writers:</b>${movie.Writer}</p>
        <p><b>Director:</b>${movie.Director}</p>
        <p><b>Starring:</b>${movie.Actors}</p>
        <p><b>BoxOffice:</b>${movie.BoxOffice}</p>
        <p><b>Awards:</b>${movie.Awards}</p>
        <p><b>Rating:</b>Metascore:${movie.Metascore}, imdbRating:${movie.imdbRating}</p>
    `;

    modal.style.display = 'block';
}