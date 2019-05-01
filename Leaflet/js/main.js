


var mymap = L.map('mapid').setView([43.609, 3.867], 12);

var marker = L.marker([43.621685145732485, 3.8500642776489262]).addTo(mymap);

var lat;
var long

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoicnViZW50ZXJtaW5hbHRvciIsImEiOiJjanYza3dpOXowNmdvNDRtaTRvdXRuNnpuIn0.lL05KwvioOC30r7Z5sFiGw'
}).addTo(mymap);

mymap.on('click', function (e) {
    console.log("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng)
    lat = e.latlng.lat;
    long = e.latlng.lng;
    //L.marker([e.latlng.lat, e.latlng.lng]).addTo(mymap);
    req(lat , long);
});


marker.bindPopup("<b>My house</b><br>J'habite ici.").openPopup();


const req = async (lat, long) => {
    const fetchReq = await fetch(`api.openweathermap.org/data/2.5/weather?lang=fr&lat=${lat}&lon=${long}&appid=48ec351e62163ca3d1c6d625c60da787`);
    const result = await fetchReq.json();
    return result;
}

req(lat , long).then(function (e) {

    let meteo = {
        name: e.city["name"],
        pays: e.city["country"],
        temp: e.list[0].weather[0].description
    };

    return meteo;
}).then(function (e) {
    console.log(e)

    var pays = document.querySelector("#pays");
    var ville = document.querySelector("#ville");
    var temp = document.querySelector("#temp");

    let paysText = document.createElement("p");
    let villeText = document.createElement("p");
    let tempText = document.createElement("p");

    paysText.textContent = `Bienvenu.e ${e.pays}`;

    pays.appendChild(paysText);

    villeText.textContent = `Vous etes dans la ville de ${e.name}`;

    ville.appendChild(villeText);

    tempText.textContent = `Actuellement le temp dans la ville est ${e.temp}`;

    temp.appendChild(tempText);

    /*    pays.innerHTML = `Bienvenu.e ${e.pays}`;
   
       ville.innerHTML = `Vous etes dans la ville de ${e.name}`;
   
       temp.innerHTML = `Actuellement le temp dans la ville est ${e.temp}` */

})

