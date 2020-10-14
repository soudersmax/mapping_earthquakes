// Add tile layer for the default background of map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Add the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    "Street": streets,
    "Sattelite Streets": satelliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [43.7, -79.3],
    zoom: 11,
    layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
// passed the argument baseMaps (the base layer objhect)
L.control.layers(baseMaps).addTo(map);

// Add GeoJSON data from github link
let torontoHoods = "https://raw.githubusercontent.com/soudersmax/mapping_earthquakes/mapping_geojson_polygons/torontoNeighborhoods.json"

// create a style for the lines
let myStyle = {
    color: "#3388ff",
    weight: 1,
    fillColor: "#ffffa1"
}

// Grabbing our GeoJSON data - external method
// access the json data in the d3 promise
// add anonymous function with data parameter (referencing airport data)
// pass the data to the geoJSON layer and add to map
d3.json(torontoHoods).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data
  L.geoJson(data, { 
    style: myStyle,
    // add popups  
    onEachFeature: function(feature, layer) {
        layer.bindPopup("<h3> Neighborhood: " + feature.properties.AREA_NAME + "</h3>");
    }
})
.addTo(map);
});

