// DEPENDENCIES ==================================

// global variables
// API key
var APIKey = "&appid=7320aea45cb99335da9de37f5a6f2e7d";
var baseURL = "https://api.openweathermap.org";

// var curWeatherEndpoint = "/data/2.5/weather?q=" + cityName + "&units=imperial" + APIKey;
// var fiveDayEndpoint = "/data/2.5/forecast/daily?q=" + cityName + "&units=imperial&cnt=5" + APIKey;

// var curWeatherQueryURL = baseURL + curWeatherEndpoint;
// var fiveDayQueryURL = baseURL + fiveDayEndpoint;

var currentDate = $('#current-day').text(moment().format("dddd, MMMM Do h:mm a"))

// page elements
var currentWeatherEl = $('#current-weather'); 
var forecastEl = $('#forecast');
var searchBox = $('#city-search');
var searchButton = $('#search-btn');
var savedCitiesEl = $('#city-list');

// var cityName = ;

// connect to search button
// connect to OpenWeather API via AJAX


// connect to moment.js to display date for current selected city

// DATA ==========================================
// CREATE
// create cards for 5-day weather forecast using jQuery selector
// add AJAX input to current weather div

// BUILD
// addClasses (Bootstrap) to forecast cards using jQuery
// addClasses (Bootstrap) to current weather card/Jumbotron

// PLACE
// append forecast cards to containing div
// append current weather card to containing div

// FUNCTIONS =====================================
// local storage remembers user's last search
// AJAX API pull to retrieve info for current weather
// AJAX API pull to retrieve info for 5-day forecast

// USER INTERACTIONS =============================
// user types desired city into search
// user clicks search button and current weather/5-day forecast cards display on right
// latest search prepended to list below search bar (hold 5-8 at a time..?)



// // create card (Jumbotron?) for current weather based on city
// // create variable for div element to place current weather info inside
// var currentWeatherInfo = $('<div>');
// // add new current weather info div to current weather info containing div
// currentWeatherEl.append(currentWeatherInfo);
// // add Bootstrap classes to current weather info div
// currentWeatherInfo.addClass('card');
// // add another div for content within card itself
// var currentWeatherInfoInner = $('<div>')
// currentWeatherInfo.append(currentWeatherInfoInner)
// currentWeatherInfoInner.addClass('card-body');

// // add Bootstrap attributes and values to current weather info div
// // use object
// currentWeatherInfo.attr({

// })