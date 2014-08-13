function initializeGM() {
    var mapOptions = {
        center: new google.maps.LatLng(LAT, LNG), zoom: 16
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    console.log(map);
}
//google.maps.event.addDomListener(window, 'load', initialize);

