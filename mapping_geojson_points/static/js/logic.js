// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);


// Grabbing our GeoJSON data and adding markers - 2 methods

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

        //L.geoJson(sanFranAirport, {
        //    onEachFeature: function(feature, layer) {
        //        console.log(layer);
        //        layer.bindPopup();
        //      }
        //   }).addTo(map);

// Add tile layer for the background of map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Add GeoJSON data from github link
let airportData = "https://raw.githubusercontent.com/soudersmax/mapping_earthquakes/mapping_geojson_objects/majorAirports.json"

// Grabbing our GeoJSON data - external method
// access the json data in the d3 promise
// add anonymous function with data parameter (referencing airport data)
// pass the data to the geoJSON layer and add to map
d3.json(airportData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data
  L.geoJson(data).addTo(map);
});

// Then add 'graymap' tile layer to "map"
streets.addTo(map);
