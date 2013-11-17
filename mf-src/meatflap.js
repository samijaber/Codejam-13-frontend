var map;
var maxPower;
var buildingPoints;
var mapData;
	
function getBuildingPowerData() {
	//$.getJSON( "http://cs.mcgill.ca/~anorto/test.json",
	//	function( data ) {
	//	mapData = data	
	//	initializeMap();
	//});
	mapData = $.parseJSON('{ "max": 10, "data": [ {"lat": 45.406887, "lng":-73.942158, "count": 10.5}, {"lat": 45.506828, "lng":-73.574116, "count": 9.9}, {"lat": 45.503941, "lng":-73.580639, "count": 2}, {"lat": 45.492871, "lng":-73.578923, "count": 1}] }');
	initializeMap();
}


function initializeMap() {
  var myLatlng = new google.maps.LatLng(45.487095,-73.709729);
  
  var mapOptions = {
    zoom: 10,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
	disableDefaultUI: false,
    scrollwheel: true,
    draggable: true,
    navigationControl: true,
    mapTypeControl: false,
    scaleControl: true,
    disableDoubleClickZoom: false,
	styles:  [{
				featureType: "all",
				elementType: "geometry",
				stylers: [
					{ saturation: -100 }, 
					{ gamma: 0.2},
					{ lightness: -50}
				]
			},{
				featureType: "all",
				elementType: "labels",
				stylers: [
					{ visibility: 'off'}
				]
			},{
				featureType: "landscape.man_made",
				elementType: "labels",
				stylers: [
					{ visibility: 'on' },
					{ invert_lightness: true}
				]
			}]
  };
  map = new google.maps.Map($("#heatmapArea")[0],
      mapOptions);
	  
	// let's create a heatmap-overlay
    // with heatmap config properties
    var heatmap = new HeatmapOverlay(map, {
        "radius":20,
        "visible":true, 
        "opacity":60
    });
 
    // here is our dataset
    // important: a datapoint now contains lat, lng and count property!
 
    // now we can set the data
    google.maps.event.addListenerOnce(map, "idle", function(){
        // this is important, because if you set the data set too early, the latlng/pixel projection doesn't work
        heatmap.setDataSet(mapData);
    });
};

google.maps.event.addDomListener(window, 'load', getBuildingPowerData);