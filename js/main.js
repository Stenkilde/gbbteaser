$(document).ready(function() {

	$("#slider").owlCarousel({
	  	autoPlay: 6000, 			// Auto plays
	  	slideSpeed: 7000, 			// Slidespeed
	  	navigation: false, 			// Hide next and prev buttons
	  	pagination: false, 			// Remove
	  	singleItem: true, 			// Make sure it's only one item
	  	mouseDrag: false, 			// No mousedrag
	  	touchDrag: false,			// No touchdrag
	  	transitionStyle : "fade" 	// Fade animation
  });

var vheight = $(window).height();
var calculatedHeight = (vheight - 80);

$('.image-slide').css("height", calculatedHeight);

});