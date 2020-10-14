// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Grabbing our GeoJSON data - 2 methods

// Method1: pointToLayer callback function
    // add 2 arguments, pointToLayer function and data, where data is the sanFranAirport data
    // ptl calls a function, passed each geojson feature and it's latitude and longitude as latlng
    // adds marker for each feature by using return marker at the latlng

        //L.geoJSON(sanFranAirport, {
        //    pointToLayer: function(feature, latlng) {
        //        console.log(feature);
        //        return L.marker(latlng)
        //        .bindPopup("<h2>" + feature.properties.city + "</h2>");
        //      }
        //  }).addTo(map);
        
// Method2: onEachFeature callback function
    // add two arguments, onEachFeature fxn and data, where data is sanFranAirport
    // oef calls an anonymous fxn, passed each geojson feature and properties as layer

L.geoJson(sanFranAirport, {
  onEachFeature: function(feature, layer) {
      console.log(layer);
      layer.bindPopup();
  }
}).addTo(map);

// Add tile layer for the background of map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then add 'graymap' tile layer to "map"
streets.addTo(map);
