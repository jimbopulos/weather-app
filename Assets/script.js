// DEPENDENCIES ==================================

// global variables
// API key
var APIKey = "&appid=7320aea45cb99335da9de37f5a6f2e7d";
var baseURL = "https://api.openweathermap.org";

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

  currentCity(cityName);
  fiveDays(cityName);
});

function currentCity(city) {
  // var cityName = searchBox.val();

  // implement url
  var curWeatherEndpoint =
    "/data/2.5/weather?q=" + city + "&units=imperial" + APIKey;
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
    $(".humidity").html("Humidity: " + response.main.humidity + "%");
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
      $(".uv-index").html("UV Index: ");
      var uvValue = $(".uv-value").html(response.value);
      if (response.value < 5) {
        uvValue.css("color", "green");
      } else if (response.value >= 5 && response.value <= 7) {
        uvValue.css("color", "yellow");
      } else {
        uvValue.css("color", "red");
      }
    });
  });
}

function fiveDays(city) {
  var forecastContainer = $("#forecast");
  forecastContainer.empty();
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
    forecastContainer.append("<h4>5 Day Forecast</h4>");
    for (let i = 0; i < response.list.length; i++) {
      var t = response.list[i].dt_txt.split(" ");

      console.log(t);
      if (t[1] === "00:00:00") {
        console.log("Inside for loop");
        var weatherCard = `
        <div class="card weather-card" style="width: 14rem;">
        <p>${t[0]}</p>
            <img src="http://openweathermap.org/img/w/${
              response.list[i].weather[0].icon
            }.png" class="icon card-img-top" alt="weather-icon">
            <div class="card-body">
              <p class="card-text">Temp: ${Math.floor(
                response.list[i].main.temp
              )} °F</p>
              <p> Humidity: ${response.list[i].main.humidity} %</p>
            </div>
          </div>`;
        forecastContainer.append(weatherCard);
      }
    }
  });
}

// let btn;

function cBtn() {
  var cityBtn = JSON.parse(localStorage.getItem("city")) || [];

  for (var i = 0; i < cityBtn.length; i++) {
    btn = $("<button>");
    btn.attr("data-city", cityBtn[i]);
    btn.addClass("c col-md-12 btn btn-primary");
    btn.text(cityBtn[i]);
    $("#city-list").prepend(btn);

    // onClick event for each city button
    btn.on("click", function (event) {
      event.preventDefault();

      var cityName = $(this).data("city");
      console.log(cityName);

      currentCity(cityName);
      fiveDays(cityName);
    });
  }
}

cBtn();
