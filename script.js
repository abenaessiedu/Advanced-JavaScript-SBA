/*1. Use the fetch API or Axios to communicate 
with an external web API. Use the data provided by 
this API to populate your application’s content and features. */
const API_KEY = "wm_nfpIk0JhI6Vn96xunnGo_hrp5lg-NJ0yM7FJQdWRvzY";
const BASE_URL = 'https://api.watchmode.com/v1/';

/*2. Create user interaction with the 
API through a search feature, paginated gallery, or similar. 
This feature should use GET requests to retrieve associated data.*/

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const movieGallery = document.getElementById("movie-gallery");
const pagination = document.getElementById("pagination");
const watchList = document.getElementById("watchlist"); 

let currentPage = 1; 
let totalPages = 1; 
let watchListItems = JSON.parse(localStorage.getItem('watchlist')) || []; 

searchButton.addEventListener('click', async function() {
    const query = searchInput.value.trim(); 
    if(!query) return; 


    try{
        const response = await fetch(
            `${BASE_URL}search/?api_key=${API_KEY}&search_field=title&search_value=${encodeURIComponent(query)}&page=${currentPage}`
        );


        if (!response.ok) {
            throw new Error (`API request failed with status ${response.status}`);
        }


        const data = await response.json();
        console.log(data); 


        renderMovies(data.title_results); 
        totalPages = data.total_pages || 1; 
        renderPagination(); 
    } catch {
        movieGallery.innerHTML = `<p> No results found! Try another search!</p>`; 
    } try {
        
    } catch (error) {
        
    } (error) => {
        console.log('Error fetching data!'); 
        movieGallery.innerHTML = '<p> Error fetching results! Please try again! </p>'; 
    }
}); 
function renderMovies(movies){
    movieGallery.innerHTML = ' '; 
    if(!movies || movies.length ===0) {
        movieGallery.innerHTML = '<p> UH OH! NO RESULTS FOUND. </p>'; 
        return; 
    }
movies.forEach(movie => {
    const movieElement = document.createElement('div'); 
    movieElement.className = 'movie'; 
    movieElement.innerHTML = `
    <img src="${movie.poster || 'https://via.placeholder.com/200x300?text=No+Poster'}" alt="${movie.title}">
    <div class="movie-info">
    <h3>${movie.title}</h3> 
    <p><strong> Year: </strong> ${movie.year || 'N/A/'} </p>
    <p><strong> Type: </strong> ${movie.type || 'N/A/'} </p>
    <button class="add-to-watchlist"
    data-id="${movie.id}"
    data-title="${movie.title}"
    data-poster="${movie.poster || ' '}"> 
    Add to Watchlist 
    </button> 
    </div> 
    `; 
    movieGallery.appendChild(movieElement); 
}); 
}
 function renderWatchList(){
    watchList.innerHTML = ' '; 
    if(watchListItem.length === 0) {
        watchList.innerHTML ='<p> 🚨Your watchlist is empty! Add some of Your Favorite Movies!<p>'; 
        return; 
    }
    watchList.forEach(item => {
        const watchListItem = document.createElement('div'); 
        watchListItem.className = 'watchlist-item'; 
        watchListItem.innerHTML = `
        <img src="${item.poster}" alt="${item.title}">
        <div class ="watchlist-item-info"> 
        <h4> ${item.title} </h4> 
        </div> 
        <button class="remove-btn" data-id="${item.id}"> REMOVE </button> 
        `;
        watchList.appendChild(watchListItem); 
    }); 
 }
/*3. Enable user manipulation of data within the API through 
the use of POST, PUT, or PATCH requests. Ensure your chosen API 
supports this feature before beginning.*/

function addToWatchList(id, title, poster) {
    if (!watchList.some(item => item.id === id)) {
        watchList.push({ id, title, poster });
        localStorage.setItem('watchlist', JSON.stringify(watchList));
        renderWatchList();
        showSustainabilityTip(title);
        return { success: true, message: "💥 Your movie has been added to your watchlist! 🍿" };
    } else {
        alert('🚨This movie has already been added to your watchlist! 🛑');
        return { success: false, message: '🚨This movie has already been added to your watchlist! 🛑' };
    }
}


function removeFromWatchList(id) {
    watchList = watchList.filter(item => item.id !== id);
    localStorage.setItem('watchlist', JSON.stringify(watchList));
    renderWatchList();
    return { success: true, message: "🚨You have removed this movie from your watchlist!" };
}
document.addEventListener('click', function(e) {
    if(e.target.classList.contains('add-to-watchlist')) {
        const id= e.target.getAttribute('data-id'); 
        const title = e.target.getAttribute('data-title'); 
        const poster = e.target.getAttribute('data-poster'); 
        addToWatchList(id, title, poster); 
    }else if (e.target.classList.contains('remove-btn')) {
        const id = e.target.getAttribute('data-id'); 
        removeFromWatchList(id); 
    }
}); 

/*4. Make use of Promises and async/await syntax as appropriate.*/


/*5. Organize your JavaScript code into at least three (3) 
different module files, and import
 functions and data across files as necessary.  */



/*6. Ensure the program runs as expected, 
without any undesired behavior caused by misunderstanding of 
the JavaScript event loop (such as race conditions, 
API calls being handled out of order, etc.).   */


/*7. Create an engaging user experience 
through the use of HTML and CSS.*/


/*8. Ensure that the program runs without errors 
(comment out things that do not work, and explain your blockers - 
you can still receive partial credit).*/

/*9. Commit frequently to the git repository. */

/*10. Include a README file that contains a description of 
your application.*/

/*11. Level of effort displayed in creativity, 
presentation, and user experience.*/

