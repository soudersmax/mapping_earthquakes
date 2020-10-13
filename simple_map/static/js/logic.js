// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// setView([lat, long], zoom level from 0-18)
// alternative method - modify each attribute in the map object with curly braces
// best for multiple tile layers or a background image
// let map = L.map("mapid", {
//    center: [
//        40.7, -94.5
//    ],
//    zoom: 4
//});
let map = L.map('mapid').setView([40.7, -94.5], 4);

// Add tile layer for the background of map
// tileLayer object is an API - url with access token reference and OpenStreetMap URL
// id refers to Mapbox's static Tiles API. Could be changed to a number of styles (see docs)
// Static Tiles API returns tiles that are too big, so we offset by -1
//attribution is for copyright purposes
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//    maxZoom:18,
//    id: 'mapbox/streets-v11',
//    tileSize: 512,
//    zoomOffset: -1,
//    accessToken: API_KEY 
//});
// Above replaced with:
// fills in variables and styles from Leaflet Docs so that it's not all in the codeblock
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then add 'graymap' tile layer to "map"
streets.addTo(map);
