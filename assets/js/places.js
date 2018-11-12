 var map;
 var infowindow;

 var destinations = [
  { name: "Paradise Beach", location: { lat: -6.1352841, lng: 39.4248296 } },
  { name: "Cabo Ledo Beach", location: { lat: -9.653097, lng: 13.233236 } },
  { name: "Inhaca Island", location: { lat: -26.0211293, lng: 32.9352297 } },
  { name: "Camps Bay", location: { lat: -33.950003, lng: 18.377430 } },
  { name: "Gabarone City", location: { lat: -24.629084, lng: 25.923502 } },
  { name: "Windhoek City", location: { lat: -22.562224, lng: 17.065143 } },
  { name: "Cape Town", location: { lat: -33.925074, lng: 18.537903 } },
  { name: "Lusaka City", location: { lat: -15.408558, lng: 28.324507 } },
  { name: "Hawange NP", location: { lat: -19.180617, lng: 26.570138 } },
  { name: "Zambezi NP", location: { lat: -15.3547351, lng: 29.5339766 } },
  
  { name: "Chobe NP", location: { lat: -18.6560858, lng: 24.4529122  } },
  { name: "Serengeti NP", location: { lat: -2.3331419, lng: 34.8317972 } },
  { name: "Benguela", location: { lat: -12.593534, lng: 13.407413 } },
  { name: "Huambo", location: { lat: -12.777657, lng: 15.739003 } },
  { name: "Lobito", location: { lat: -12.376882, lng: 13.560282 } },
  { name: "Lubango", location: { lat: -14.911227, lng: 13.519570 } },
  { name: "Luanda", location: { lat: -8.839764, lng: 13.270353 } },
  { name: "Namibe", location: { lat: -15.196569, lng: 12.149343 } },
  { name: "Francistown", location: { lat: -21.206259, lng: 27.532202 } },
  { name: "Maun", location: { lat: -19.998404, lng: 23.414096 } },
  
  { name: "Bicuar NP", location: { lat: -15.378026, lng: 14.752062 } },
  { name: "Cameia NP", location: { lat: -11.883333, lng: 21.667074 } },
  { name: "Iona NP", location: { lat: -16.142409, lng: 12.293580 } },
  { name: "Kissama NP", location: { lat: -9.750095, lng: 13.583320 } },
  { name: "Mupa NP", location: { lat:-15.916785, lng: 15.583848 } },
  { name: "Kalahari", location: { lat: -22.433363, lng: 23.889802 } },
  { name: "Mokolodi", location: { lat: -24.737439, lng: 25.816928 } },
  { name: "Moremi", location: { lat: -19.464243, lng: 23.064858 } },
  { name: "Nxai Pan NP", location: { lat: -20.095582, lng: 24.809269 } },
  { name: "Mussulo", location: { lat: -8.960871, lng: 13.058110  } },
  
  { name: "Porto Amboim", location: { lat: -10.722173, lng: 13.759645 } },
  { name: "Praia Morena", location: { lat: -12.573428, lng: 13.398700 } },
  { name: "Pangane Beach", location: { lat: -12.000621, lng: 40.537713 } },
  { name: "Ponta Do Ouro", location: { lat: -26.843179, lng: 32.889269 } },
  { name: "Vilankulos", location: { lat: -21.995971, lng: 35.323491 } },
  { name: "Ponta Mamoli", location: { lat: -26.707988, lng: 32.901419 } },
  { name: "Bazaruto Archipelago", location: { lat: -21.665857, lng: 35.469857 } },
  { name: "Island of Mozambique", location: { lat: -15.042715, lng: 40.730431 } },
  { name: "Maputo", location: { lat: -25.956070, lng: 32.578457 } },
  { name: "Pemba", location: { lat: -12.963727, lng: 40.501587 } },
  
  { name: "Tofo", location: { lat: -23.855771, lng: 35.547976 } },
  { name: "Selebi Phikwe", location: { lat: -21.991082, lng: 27.839564 } },
  { name: "Gorongosa NP", location: { lat: -18.800764, lng: 34.494217 } },
  { name: "Limpopo NP", location: { lat: -23.594475, lng: 32.020810  } },
  { name: "Lugela", location: { lat: -16.425044, lng: 36.746202 } },
  { name: "Niassa", location: { lat: -12.037933, lng: 37.161541 } },
  { name: "Quirimbas NP", location: { lat: -12.292913, lng: 40.465045 } },
 ];

 // Test to see if destId is read when each page loads. 
 
 if (typeof destId != 'undefined') {
  console.log("dest", destinations[destId]);
 }

 var map_types = [
  { keyword: "hotel" },
  { keyword: "restaurant" },
  { keyword: "safari" },
  { keyword: "beach" },
  { keyword: "city" },
  { keyword: "park" },
  { keyword: "camp" }
  
 ];



 // onclick event
 
 $('.btn').click(function() {
  console.log("clicked", $(this).val());
  var clickedBtn = $(this).val();

  if (clickedBtn) {
   initMap(destinations[destId], map_types[clickedBtn]);
  }

 });

 // initMap function

 function initMap(destination, map_type) {


  if (!isNaN(mapId) && map_type === undefined) {
   map_type = map_types[mapId]
  }
  else if (map_type === undefined) {
   map_type = map_types[0]
  }
  
  if (!destination) {
   destination = destinations[destId];
  }

  console.log("called initMap with:", destination, map_type);

  map = new google.maps.Map(document.getElementById('map'), {
   center: destination.location,
   zoom: 10
  });

  var marker = new google.maps.Marker({
   position: destination.location,
   map: map,
   title: destination.name,
   icon: { url: "../images/google-maps-pin-blue-hi.png" }
  });


  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
   location: destination.location,
   radius: 50000,
   keyword: map_type.keyword,
  }, callback);

 }

 function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
   for (var i = 0; i < results.length; i++) {
    createMarker(results[i]);
   }
  }
 }

 function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
   map: map,
   position: placeLoc
  });
  google.maps.event.addListener(marker, 'click', function() {
   infowindow.setContent(place.name);
   infowindow.open(map, this);
  });
 }
 