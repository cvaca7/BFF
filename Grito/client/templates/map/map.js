/**
 * Created by carlosvacamorales on 10/2/14.
 */
initialize = function() {
    var mapOptions = {
        center: new google.maps.LatLng(40.72405,-73.997319),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    google.maps.event.addListener(map,'click', function(){alert('map clicked');});
}
Template.map.rendered = function () {
    initialize();
};