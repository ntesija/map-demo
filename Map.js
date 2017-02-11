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
				MapFcns.clearMap();
				
				var currAirport = _.findWhere(sites, {Code: airportCode});
				$('#setting-code').text(currAirport.Code);
				$('#setting-city').text(currAirport.City);
				$('#setting-state').text(currAirport.State);
				$('#setting-full-name').text(currAirport.FullSiteName);
				$('#setting-lat').text(currAirport.Latitude);
				$('#setting-long').text(currAirport.Longitude);
				
				var airportInformation = 
				"<div class='window-info'>" +
					"<center>" +
						"<b>" + currAirport.Code + "</b> - " +
						currAirport.City + ", " + currAirport.State +
						"<br /><br />" +
						currAirport.FullSiteName +
						"<br /><br />" +
						"<b>Lat:</b> " + currAirport.Latitude +
						"<br />" +
						"<b>Lng:</b> " + currAirport.Longitude +
					"</center>" +
				"</div>";
				
				globalMap.setCenter({lat: currAirport.Latitude, lng: currAirport.Longitude});
				
				var infoWindow = new google.maps.InfoWindow({
					content: airportInformation,
					maxWidth: 200
				});
				marker = new google.maps.Marker({
					position: {lat: currAirport.Latitude, lng: currAirport.Longitude},
					map: globalMap,
					animation: google.maps.Animation.DROP,
					title: currAirport.Code
				});
				marker.addListener('click', function() {
					infoWindow.open(globalMap, marker);
				});
			}
		},
		clearMap: function() {			
			if (marker) {
				marker.setMap(null);
				$('#setting-code').empty();
				$('#setting-city').empty();
				$('#setting-state').empty();
				$('#setting-full-name').empty();
				$('#setting-lat').empty();
				$('#setting-long').empty();
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
	$('#clear-map').click(function() {
		MapFcns.clearMap();
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