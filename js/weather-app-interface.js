var Weather = require('./../js/weather.js').weatherModule;

var displayWeather = function(city, humidity, temperature, description) {
  $('#showWeather').html(city + "'s weather:<br>" + "humidity "  + humidity +"%" + " temperature " + Math.floor((temperature * (9/5)) - 459.67) +" F"+ " description: " + description);
}
$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weatherLocation').submit(function(event) {
    event.preventDefault();
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getWeather(city, displayWeather);

  });
});
