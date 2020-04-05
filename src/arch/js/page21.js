var x = document.getElementById("geolocation");
function getLocation(x){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(x);
    }else{
        x.innerHTML = "Twoja przeglądarka nie wspiera geolokacji.";
    }
}

function showPosition(position){
    x.innerHTML = "Szerokość: " + position.coords.latitude + 
    "<br />Długość: " + position.coords.longitude;
}

var map = document.getElementById("map");
function showPosition2(position){
    var coords = position.coords.latitude + "," + position.coords.longitude;
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
     + coords + "&zoom=14&size=400x300&sensor=false&key=YOUR_KEY";

    map.innerHTML = "<img src='" + img_url + "' alt='mapy' />";
}



