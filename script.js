/*1. Use the fetch API or Axios to communicate 
with an external web API. Use the data provided by 
this API to populate your application’s content and features. */
const API_KEY = "wm_nfpIk0JhI6Vn96xunnGo_hrp5lg-NJ0yM7FJQdWRvzY"; 
const BASE_URL = 'https://api.watchmode.com/api/v1/'; 

/*2. Create user interaction with the 
API through a search feature, paginated gallery, or similar. 
This feature should use GET requests to retrieve associated data.*/

const searchInput = document.getElementById("search-input"); 
const searchButton = document.getElementById("search-button"); 
const movieGallery = document.getElementById("movie-gallery"); 
const pagination = document.getElementById("pagination"); 
const watchList = document.getElementById("watchlist"); 
 
/*3. Enable user manipulation of data within the API through 
the use of POST, PUT, or PATCH requests. Ensure your chosen API 
supports this feature before beginning.*/
let watchListItems = JSON.parse(localStorage.getItem('watchlist')) || []; 

function addToWatchList(id, title, poster){
    if(!watchListItems.some(item => item.id === id)){
        watchListItems.push({id, title, poster}); 
        localStorage.setItem('watchlist', JSON.stringify(watchListItems)); 
        renderWatchList(); 
        showSustainabilityTip(title); 
        return {success: true, message: "💥 Your movie has been added to your watchlist! 🍿"}; 
    } else {
        alert('🚨This movie has already been added to your watchlist! 🛑'); 
        return {success: false, message: '🚨This movie has already been added to your watchlist! 🛑'}; 
    }
    }
function removeFromWatchList(id){
    watchListItems = watchListItems.filter(item => item.id !== id); 
    localStorage.setItem('watchlist', JSON.stringify(watchListItems)); 
    renderWatchList(); 
    return {success: true, message: "🚨You have removed this movie from your watchlist!"}; 
}
function renderWatchList() {
    watchList.innerHTML = '' 
    if (watchListItems.length === 0) {
        watchList.innerHTML = '<p> 🎬Your Watchlist is Empty! Add Your Favorite Movies!🍿<p>' ;
        return; 
    }
    watchListItems.forEach(item => {
        const watchListItem = document.createElement('div'); 
        watchListItem.className = 'watchlist-item'; 
        
    })
}

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

