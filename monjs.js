window.onload = function(){
    
    var mymap = L.map('mapid').setView([43.1775706,3.007891,15.25], 13);

    var tileStreets =  L.tileLayer(
        'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
        {attribution:'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1,
accessToken: 'pk.eyJ1IjoibGlsaTExMTAwIiwiYSI6ImNramowNHVxNzN0NDAyd3J1c2ZwdDQzbzIifQ.S7GAqkGOh21a0mN3br3gdA'
});    
tileStreets.addTo(mymap);
var marker = L.marker([43.1812667,2.9981484,18.510]).addTo(mymap);
marker.bindPopup("<b>Bienvenue!</b><br>Snack'chat Fast Food.");

var marker = L.marker([43.17442469212582, 2.994225658590871]).addTo(mymap);
marker.bindPopup("<b>Grosse faim!</b><br>Les grands Buffet")

var marker = L.marker([43.19132481997532, 3.0013164581096117]).addTo(mymap);
marker.bindPopup("<b>Détente</b><br>Le canal")


var marker = L.marker([43.187304465094506, 3.004314742575812]).addTo(mymap);
marker.bindPopup("<b>Découverte</b><br>Istanbul")


var marker = L.marker([43.189080722235865, 2.971370967948145]).addTo(mymap);
marker.bindPopup("<b>Randonnée</b><br>Parc de la campagne")
}

const weatherIcons = {
    "Rain":"wi wi-day-rain",
    "Clouds":"wi wi-day-cloudy",
    "Clear":"wi wi-day-sunny",
    "Snow": "wi wi-day-snow",
    "mist": "wi wi-day-fog",
    "Drizzle": "wi wi-day-sleet",

};
function capitalize(str) {
    return str[0].toUpperCase()+str.slice(1);
    
};
  

async function main(withIP = true) 
{   
    let ville;
    if (withIP) {
    const ip =await  fetch('http://api.ipify.org/?format=json')
        .then(resultat => resultat.json())
        .then(json =>  json.ip);
       
        


    const ville = await fetch('https://freegeoip.app/json/'+ ip)
        .then(resultat => resultat.json())
        .then(json => json.city);
    }
    else {
        
        ville= document.querySelector('#ville').textContent;
    };
        

    const meteo =await fetch('http://api.openweathermap.org/data/2.5/weather?q=Narbonne&lang=fr&units=metric&appid=5673ae1bc467be406ddf9fe641c9a825')
        .then(resultat => resultat.json())
        .then(json =>json);

        displayWeatherInfos(meteo);
       

};
function displayWeatherInfos(data) {
    const name = data.name;
    const temperature = data.main.temp;
    const conditions = data.weather[0].main;
    const description = data.weather[0].description;

    document.querySelector('#ville').textContent = name;
    document.querySelector('#temperature').textContent=Math.round(temperature);
    document.querySelector('#conditions').textContent= capitalize(description);

    document.querySelector('i.wi').className = weatherIcons[conditions];

    document.body.className = conditions.toLowerCase;

    
};var iconne= L.icon({
    iconUrl: "iconmarqueur/iconrestaurant.png",
    iconSize:[40,40],
})
var iconnne= L.icon({
    iconUrl: "iconmarqueur/iconevelo.jpg",
    iconSize:[40,40],
})
var iconnnee= L.icon({
    iconUrl: "iconmarqueur/burger.png",
    iconSize:[40,40],
})
var icone1= L.icon({
    iconUrl: "iconmarqueur/iconrestaurant.png",
    iconSize:[40,40],
})

main();
    
