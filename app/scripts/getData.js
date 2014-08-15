var MAX_WS = 5;
var MAX_GUST = 10

function isTimeToday(smhidate) {
    var now = new Date(); 
    var then = new Date(smhidate);
    var ONE_DAY = 24*60*60*1000;

    return (then.getTime() > now.getTime()) && 
           (then.getTime() < now.getTime()+ONE_DAY);
}

function createTime(time) {
    var now = new Date();
    var then = new Date(time);
    var str = '';
    if (then.getDate() == now.getDate()) {
        str += 'Idag ';
    } else if (then.getDate() == now.getDate()+1) {
        str += 'Imorgon ';
    }
    str += then.getHours() + ':' + '00';
    return str;
}

function addTime(obj) {
    var date = new Date(obj.validTime);
/*
    if (okToPlay(obj.ws, obj.gust)) {
        var color = "#00ff00";
    } else {
        var color = "#ff0000";
        return;
    }
*/
    if (okToPlay(obj.ws, obj.gust)) {
        var div = document.getElementById('times');
        if (div.innerHTML == '<p>Hittade inga tider :(</p>') {
            div.innerHTML = '';
        }
        div.innerHTML += '<p>' + createTime(obj.validTime) + ': ' +
                     obj.ws + ' (' + obj.gust + ')' + '</p>'; 
    }
}

function okToPlay(ws, gust) {
    return (ws <= MAX_WS && gust <= MAX_GUST);
}

function getData() {
    var apiurl = 'http://opendata-download-metfcst.smhi.se/api/category/pmp1.5g/version/1/geopoint/lat/' + LAT + '/lon/' + LNG + '/data.json';
    var derp = $.getJSON(apiurl, function(data) {
        $.each(data, function(index, elem) {
            if (index == 'referenceTime') {
                //
            } else if (index == 'timeseries') {
                for (var i in elem) {
                    var ws = elem[i].ws;
                    var gust = elem[i].gust;
                    var time = elem[i].validTime;
                    if (isTimeToday(time)) {
                        addTime(elem[i]);
                    }
                }
            }
        });
    });
}

function refreshStuff() {
        var div = document.getElementById('times');
        div.innerHTML = '<p>Hittade inga tider :(</p>'; 
        getData();
}

function setLatLng(lat, lng) {
    LAT = lat.toFixed(6);
    LNG = lng.toFixed(6);
    console.log('Lat: ' + LAT);  
    console.log('Lng: ' + LNG);  
}
