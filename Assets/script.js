// DEPENDENCIES ==================================

// global variables
// API key
var APIKey = "&appid=7320aea45cb99335da9de37f5a6f2e7d";
var baseURL = "https://api.openweathermap.org";

// var curWeatherEndpoint = "/data/2.5/weather?q=" + cityName + "&units=imperial" + APIKey;
// var fiveDayEndpoint = "/data/2.5/forecast?q=" + cityName + APIKey;

// var curWeatherQueryURL = baseURL + curWeatherEndpoint;
// var fiveDayQueryURL = baseURL + fiveDayEndpoint;

// connect to moment.js to display date for current selected city
var currentDate = $("#current-day").text(
  moment().format("dddd, MMMM Do h:mm a")
);

// page elements
var currentWeatherEl = $("#current-weather");
var forecastEl = $("#forecast");
var searchBox = $("#city-search");
var searchButton = $("#search-btn");
var savedCitiesEl = $("#city-list");

// connect to search button
searchButton.on("click", function (event) {
  event.preventDefault();
  // provide var for city name entered
  var cityName = searchBox.val();

  var cityBtn = JSON.parse(localStorage.getItem("city")) || [];
  cityBtn.push(cityName);
  localStorage.setItem("city", JSON.stringify(cityBtn));

  // buttons prepended to col containing search bar, underneath
  // created button will save, remain on page. can re-access data with click
  currentCity(cityName);
  fiveDays(cityName);
});

function currentCity(city) {
  // implement url
  var curWeatherEndpoint =
    "/data/2.5/weather?q=" + cityName + "&units=imperial" + APIKey;
  var curWeatherQueryURL = baseURL + curWeatherEndpoint;
  // connect to OpenWeather API via AJAX request for current weather
  $.ajax({
    url: curWeatherQueryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    // grab page element tags and place current weather data inside
    $(".city").html("City: " + response.name);
    // create var to store response temp data, parse to whole integer
    var temp = response.main.temp;
    var wholeNumTemp = parseInt(temp);
    $(".temperature").html("Temperature: " + wholeNumTemp + " °F");
    $(".humidity").html("Humidity: " + response.main.humidity + " %");
    // create var to store response wind speed data, parse to whole integer
    var wind = response.wind.speed;
    var wholeNumWind = parseInt(wind);
    $(".windspeed").html("Windspeed: " + wholeNumWind + " mph");

    // implement url UV index
    var uvIndexEndpoint =
      "/data/2.5/uvi?lat=" +
      response.coord.lat +
      "&lon=" +
      response.coord.lon +
      APIKey;
    var uvIndexQueryURL = baseURL + uvIndexEndpoint;
    // separate AJAX request to retrieve lat and long for UV index
    console.log(uvIndexQueryURL);
    $.ajax({
      url: uvIndexQueryURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      $(".uv-index").html("UV Index: " + response.value);
    });
    //var fiveDayEndpoint = "/data/2.5/forecast?q=" + cityName + APIKey;
  });
}

function fiveDays(city) {
  var forecastContainer = $("#forecast");
  var fiveDayEndpoint =
    "/data/2.5/forecast?q=" + city + "&units=imperial" + APIKey;
  var fiveDayQueryURL = baseURL + fiveDayEndpoint;
  console.log(fiveDayQueryURL);
  // connect to OpenWeather API via AJAX request for fiveday forecast
  $.ajax({
    url: fiveDayQueryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    for (let i = 0; i < response.list.length; i++) {
      var t = response.list[i].dt_txt.split(" ");

      console.log(t);
      if (t[1] === "00:00:00") {
        console.log("Inside for loop");
        var weatherCard = `<div class="card" style="width: 18rem;">
        <p>${t[0]}</p>
            <img src="http://openweathermap.org/img/w/${response.list[i].weather[0].icon}.png" class="icon" alt="...">
            <div class="card-body">
              <p class="card-text">Temp: ${response.list[i].main.temp}</p>
              <p> Humidity: ${response.list[i].main.humidity}</p>
            </div>
          </div>`;
        $("#forecast").append(weatherCard);
      }
    }
  });
}

function cBtn() {
  var cityBtn = JSON.parse(localStorage.getItem("city")) || [];
  for (var i = 0; i < cityBtn.length; i++) {
    var btn = $("<button>");
    btn.attr("data-city", cityBtn[i]);
    btn.addClass("c");
    btn.text(cityBtn[i]);
    $("#city-list").append(btn);
  }
}

cBtn();

// DATA ==========================================
// CREATE
// create cards for 5-day weather forecast using jQuery selector

// BUILD
// addClasses (Bootstrap) to forecast cards using jQuery

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
