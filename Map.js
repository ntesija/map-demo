var globalMap;
var marker;

$(function() {
	var MapFcns = {
		loadSiteList: function () {
			var airportList = $('#airport-list');
				airportList.html('');
				airportList.append('<option value=""></option>');
				
			sites.sort( function(a, b) {
				return a.Code.localeCompare(b.Code);
			});
			for (var i in sites) {
				var newOption = $('<option value="' + sites[i].Code + '">' + sites[i].Code + '</option>');
				airportList.append(newOption);
			}
		},
		siteListChange: function() {
			var ctl = $(this),
			airportCode = ctl.val();
			if(airportCode) {
				var currAirport = _.findWhere(sites, {Code: airportCode});
				$('#setting-code').text(currAirport.Code);
				$('#setting-city').text(currAirport.City);
				
				if (marker) {
					marker.setMap(null);
				}
				marker = new google.maps.Marker({
					position: {lat: currAirport.Latitude, lng: currAirport.Longitude},
					map: globalMap,
					title: currAirport.Code
				});
			}
		}
	}
	
	MapFcns.loadSiteList();
	$('#airport-list').change(MapFcns.siteListChange);
	$('#exercise-toggle').click(function() {
		var  toggleCtl = $(this),
			 toggleVal = toggleCtl.text();
		if (toggleVal == '-') {
			toggleCtl.text('+');
			$('#exercise-instructions').hide();
		} else {
			toggleCtl.text('-');
			$('#exercise-instructions').show();
		}
	});
});
   
function  initMap() {
  // Callback function to create a map object and specify the DOM element for display.
  globalMap = new google.maps.Map(document.getElementById('airport-map'), {
    center: {lat: 42.2814, lng: -83.7483},
    scrollwheel: true,
    zoom: 6
  });
}