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
searchButton.on('click', function(event) {
    event.preventDefault();
    // provide var for city name entered
    var cityName = searchBox.val();
    // implement url
    var curWeatherEndpoint = "/data/2.5/weather?q=" + cityName + "&units=imperial" + APIKey;
    var curWeatherQueryURL = baseURL + curWeatherEndpoint;
    // connect to OpenWeather API via AJAX request for current weather
    $.ajax({
        url: curWeatherQueryURL,
        method: 'GET'
    }).then (function(response) {
        console.log(response);
        // grab page element tags and place current weather data inside
        $('.city').html('City: ' + response.name);
        // create var to store response temp data, parse to whole integer
        var temp = response.main.temp;
        var wholeNumTemp = parseInt(temp);
        $('.temperature').html('Temperature: ' + wholeNumTemp + ' °F');
        $('.humidity').html('Humidity: ' + response.main.humidity + ' %');
        // create var to store response wind speed data, parse to whole integer
        var wind = response.wind.speed;
        var wholeNumWind = parseInt(wind);
        $('.windspeed').html('Windspeed: ' + wholeNumWind + " mph");

    })
});
// connect to OpenWeather API via AJAX request


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
// if user does not provide any input: no button created, no data retrieved


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