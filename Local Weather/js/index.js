function changeBackground (weather){
  if(weather == "Clear"){
    document.body.style.backgroundImage = "url('https://i.ytimg.com/vi/3EXe5cx5S-0/maxresdefault.jpg')";
  }else if(weather == "Clouds"){
     document.body.style.backgroundImage = "url('https://ak8.picdn.net/shutterstock/videos/16442878/thumb/1.jpg')";
  }else if(weather == "Rain"){
    document.body.style.backgroundImage = "url('http://getwallpapers.com/wallpaper/full/b/7/7/770113-rainy-day-background-1920x1080-for-hd-1080p.jpg')";
  }else if(weather == "Snow"){
    document.body.style.backgroundImage = "url('http://backgroundcheckall.com/wp-content/uploads/2017/12/snow-background-9.jpg')";
  }else if(weather == "Haze"){
        document.body.style.backgroundImage = "url('https://wallpaperscraft.com/image/fog_haze_veil_trees_field_evening_9775_2312x1526.jpg')" ;   
  }
}

function getWeather(latitude,longitude){
  $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + latitude + "&lon="+longitude , function(data){
    
    $("#city").text(data.name);
    $("#country").text(data.sys.country);
    $("#temp").text(Math.round(data.main.temp * 9/5 + 32));
    $("#type").text("F");
    $("#desc").text(data.weather[0].main);
    if(data.weather[0].icon !== undefined){
      $("#icon").html("<img src="+ data.weather[0].icon +"></img>");
    }  
    changeBackground(data.weather[0].main);
    
  });
  
}

$( document ).ready(function(){
  var latitude;
  var longitude;
  if (navigator.geolocation) {   
   navigator.geolocation.getCurrentPosition(function(location){
    latitude = location.coords.latitude;
    longitude = location.coords.longitude;
    getWeather(latitude,longitude);
     
   });
     
    } else {
       $(".location").text( "Geolocation is not supported by this browser.");
    }
  
  $("#type").click(function(){
    var currType = $("#type").text();
    var currTempVal = $("#temp").text();
    if(currType == "C"){
      $("#temp").text(Math.round(currTempVal * 9/5 + 32));
      $("#type").text("F");
    }else{
      $("#temp").text(Math.round((currTempVal - 32) * 5/9));
      $("#type").text("C");
    }
});
});