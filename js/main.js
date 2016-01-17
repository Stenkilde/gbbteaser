$(document).ready(function() {

	$("#slider").owlCarousel({
	  	autoPlay: false, 			// Auto plays
	  	slideSpeed: 7000, 			// Slidespeed
	  	navigation: false, 			// Hide next and prev buttons
	  	pagination: false, 			// Remove
	  	singleItem: true, 			// Make sure it's only one item
	  	mouseDrag: true, 			// No mousedrag
	  	touchDrag: true,			// No touchdrag
	  	transitionStyle : "fade" 	// Fade animation
  });

var vheight = $(window).height();
var calculatedHeight = (vheight - 80);

$('.image-slide').css("height", calculatedHeight);

});