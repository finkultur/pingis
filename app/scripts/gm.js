var map;
var kville = new google.maps.LatLng(57.716689, 11.949107);

function initializeGM() {
    var mapOptions = {
        center: kville, 
        zoom: 16
    };
    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    console.log(map);
    addMarker(kville, "Herkulesparken");
}
//google.maps.event.addDomListener(window, 'load', initialize);

function addMarker(position, title) {
    var marker = new google.maps.Marker({
        position: position,
        map: map,
        title: title
    });
}
