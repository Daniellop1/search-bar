/*
	Global variables
*/
var
	helper = document.getElementById('helper');

var
	searchForm = document.getElementById('search-form'), // get "form" element (to change value of "action" attribute)
	inputSubmit = document.getElementById('search-input'), // get "input" element (to change "name" attribute)
	mainColor = document.getElementById("body"), // get main background color
	logoImage = document.getElementById("search-img"), // get logo image
	helperInput = document.getElementById('helper'); // get helper "input" (to change attributes "name" & "value")

/*
	Search parameters
*/

// Google
function google() {
	xUrl = "https://www.google.com/search?q=";
	xColor = "#4285f4";
	t1();
