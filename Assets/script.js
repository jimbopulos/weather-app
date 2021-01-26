// DEPENDENCIES ==================================

// global variables
var currentWeatherEl = $('#current-weather'); 
var forecastEl = $('#forecast');
var searchBox = $('#city-search');
var searchButton = $('#search-btn');
var savedCitiesEl = $('#city-list');

// connect to search button
// connect to OpenWeather API via AJAX
// connect to moment.js to display date for current selected city

// DATA ==========================================
// CREATE
// create card (Jumbotron?) for current weather based on city
// create variable for div element to place current weather info inside
var currentWeatherInfo = $('<div>');
// add new current weather info div to current weather info containing div
currentWeatherEl.append(currentWeatherInfo);
// add Bootstrap classes to current weather info div


// create cards for 5-day weather forecast using jQuery selector
 
// BUILD
// addClasses (Bootstrap) to forecast cards using jQuery
// addClasses (Bootstrap) to current weather card/Jumbotron

// PLACE
// append forecast cards to containing div
// append current weather card to containing div

// FUNCTIONS =====================================
// local storage remembers user's last search

// USER INTERACTIONS =============================
// user types desired city into search
// user clicks search button and current weather/5-day forecast cards display on right
// latest search prepended to list below search bar (hold 5-8 at a time..?)
