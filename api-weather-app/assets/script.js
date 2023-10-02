$(document).ready(function() {
  $('#getWeatherBtn').click(function() {
    var city = $('#city').val();
    if(city != '') {
      $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric' + '&APPID=de94ad80585ec8fdf582530b4ae9d5e7',
        type: 'GET',
        dataType: 'jsonp',
        success: function(data) {
          var weather = '';
          var icon = data.weather[0].icon;
          var description = data.weather[0].description;
          var temp = data.main.temp;
          var feelsLike = data.main.feels_like;
          var humidity = data.main.humidity;
          var cityName = data.name;
          var country = data.sys.country;
          var iconUrl = 'https://openweathermap.org/img/w/' + icon + '.png';

          $('#weatherIcon').html('<img src="' + iconUrl + '">');
          $('#temp').html('Temperature: ' + temp + ' &deg;C');
          $('#description').html('Weather: ' + description);
          $('#feelsLike').html('Feels like: ' + feelsLike + ' &deg;C');
          $('#humidity').html('Humidity: ' + humidity + '%');
          $('#cityName').html(cityName + ', ' + country);
        }
      });
    } else {
      alert('Please enter city name');
    }
  });
});