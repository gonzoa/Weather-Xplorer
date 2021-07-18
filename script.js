
var city= "Kyoto";


$.getJSON(
  "https://api.openweathermap.org/data/2.5/weather?q=" +city+ "&units=imperial&appid=e0ba0a719680c7fe5779ac2cab8df595",
   function(data){
    console.log(data);


    var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

    var temp =Math.floor (data.main.temp);
  $('.icon').attr('src', icon);
  $('.temp').append(temp)
  
    
}
);