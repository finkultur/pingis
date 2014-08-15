var map;
var kville = new google.maps.LatLng(57.716689, 11.949107);

var markers = [];

var RED = "fe7569";
var GREEN = "0f9600";

function initializeGM() {
    var mapOptions = {
        center: kville, 
        zoom: 16
    };
    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    // Add default marker
    var defaultMarker = addMarker(kville, "Herkulesparken", GREEN);
    markers.push(defaultMarker);
   
    // Add listener to default marker 
    google.maps.event.addListener(markers[0], 'click', function() {
        console.log(kville);
        setLatLng(kville.lat(), kville.lng());
        map.panTo(kville);
        refreshStuff();
    });

    // Add listener to map,
    // if clicked, pan to new location, put a new marker and refresh data 
    google.maps.event.addListener(map, 'click', function(e) {
        // new marker
        addMarker(e.latLng, "Kan man spela här?", RED);
        map.panTo(e.latLng);
        setLatLng(e.latLng.lat(), e.latLng.lng());
        refreshStuff();
        // Go to map-canvas anchor?
        //window.location.hash = "map-canvas";
    });

}
//google.maps.event.addDomListener(window, 'load', initialize);

function addMarker(position, title, color) {
    var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + color,
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));
    
    var marker = new google.maps.Marker({
        position: position,
        map: map,
        title: title,
        icon: pinImage
    });
    map.panTo(position);
    
    return marker;
}

