var Utility = {};

Utility.metersToFeet = function(meters, rounded = true) {
	// convert to feet
	let feet = meters * 3.28084;

	// if rounded is true then round to nearest foot
	if(rounded === true) feet = Math.round(feet);

  return feet;
};

Utility.metersToMiles = function(meters, rounded = true) {
	// convert to feet
	let miles = meters * .0006214;

	// if rounded is true then round to nearest mile
	if(rounded === true) miles = Math.round(miles);

  return miles;
};

Utility.metersToFL = function(meters) {
	// convert to Flight Level
	let fl =  Math.round((meters * 3.28084)/100);

	if(fl < 100) fl = "0"+fl;

  return fl;
};

Utility.curveDistance = function(distance, radius = 10) {
	// Takes a straight-line distance and returns the actual distance when converted into  a distance between two points on a circle. See https://en.wikipedia.org/wiki/Great-circle_distance
	// Usefull for finding the actual distance between two points points on earth

};

Utility.calculateETA = function(distance, speed, straightLine = false) {
	// This distance is not linear. It is an arch because of the earths curvature. See https://en.wikipedia.org/wiki/Great-circle_distance
};

Utility.trackNum = function(string){
    var number = "";
    var length = string.length;
    for (var i = 0; i < length; i++)
        number += string.charCodeAt(i).toString(5);
        number = number.substring(0,4);
    return number;
}

module.exports = Utility;