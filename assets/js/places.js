 var map;
 var infowindow;
 var countrys = [
  { name: "Angola", location: { lat: -9.421756, lng: 18.433626 } },
  { name: "Botswana", location: { lat: -24.653257, lng: 25.906792 } },
  { name: "Mozambiqe", location: { lat: -25.953724, lng: 32.588711 } },
  { name: "Namibia", location: { lat: -22.9671, lng: 18.4930 } },
  { name: "Tanzania", location: { lat: -6.80235, lng: 39.279556 } },
  { name: "South Africa", location: { lat: -6.80235, lng: 39.279556 } },
  { name: "Zambia", location: { lat: -15.4067, lng: 28.2871 } },
  { name: "Zimbawe", location: { lat: -17.824858, lng: 31.053028 } },
 ];



 var destinations = [
  { name: "Paradise Beach", location: { lat: -6.1352841, lng: 39.4248296 } },
  { name: "", location: { lat: -6.1352841, lng: 39.4248296 } }

 ];

 if (typeof destId != 'undefined') {
  console.log("dest", destinations[destId]);
 }

 var map_types = [
  { keyword: "hotels" },
  { keyword: "restaurants" },
  { keyword: "safaries" },
  { keyword: "beaches" },
  { keyword: "reserve" },
  { keyword: "cities" },
 ];



 // onclick event

 $('.btn').click(function() {
  console.log("clicked", $(this).val());
  var clickedBtn = $(this).val();

  if (clickedBtn) {
   initMap(destinations[0], map_types[clickedBtn]);
  }

 });

 // initMap function

 function initMap(destination, map_type) {


  if (map_type === undefined) {
   map_type = map_types[0];
  }

  if (!destination) {
   destination = destinations[0];
  }
  console.log("called initMap with:", destination, map_type);

  map = new google.maps.Map(document.getElementById('map'), {
   center: destination.location,
   zoom: 10
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
 