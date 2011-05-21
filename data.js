var total = 0;
var parking = []


var park1 = new parkingArea(
  [new google.maps.LatLng(38.049686014073835, -84.50062593340874),
  new google.maps.LatLng(38.04967862145486, -84.50064470887185),
  new google.maps.LatLng(38.04914027837388, -84.50002847135067),
  new google.maps.LatLng(38.04914978323947, -84.50001237809659)], 12, 2, "station");
parking.push(park1);
var park2 = new parkingArea(
  [new google.maps.LatLng(38.051063140356455, -84.50217893242836),
	new google.maps.LatLng(38.05107264497236, -84.50216149806977),
	new google.maps.LatLng(38.050491805066336, -84.50151240348816),
	new google.maps.LatLng(38.05047807606735, -84.50152983784676)], 13, 2, "meter");
parking.push(park2);
var park3 = new parkingArea(
  [new google.maps.LatLng(38.05108109351882, -84.5024189901352),
	new google.maps.LatLng(38.0510905981324, -84.5024002146721),
	new google.maps.LatLng(38.05079067417545, -84.50207030296326),
	new google.maps.LatLng(38.050781169522914, -84.50208639621735)], 7, 2, "meter");
parking.push(park3);
var park4 = new parkingArea(
  [new google.maps.LatLng(38.05075371163092, -84.5005454671383),
	new google.maps.LatLng(38.050763216286995, -84.5005280327797),
	new google.maps.LatLng(38.050324944750265, -84.50002645969391),
	new google.maps.LatLng(38.05031121571999, -84.500042552948)], 10, 2, "station");
parking.push(park4);
var park5 = new parkingArea(
  [new google.maps.LatLng(38.05060586126609, -84.50048109412194),
	new google.maps.LatLng(38.05059530051434, -84.50049986958504),
	new google.maps.LatLng(38.05077272094185, -84.50069567084313),
	new google.maps.LatLng(38.05078222559548, -84.50067689538002)], 4, 2, "meter");
parking.push(park5);