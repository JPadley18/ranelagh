$(document).ready(function(){
	fade();
});

// Fade allows the creation of an animated image slider
function fade(){
	// Retrieve the current and next divs to be animated
	let divs = $(".central-image");
	let current = $(".current");
	let currentIndex = divs.index(current);
	let nextIndex = currentIndex <= divs.length - 1 ? currentIndex + 1 : 0;
	let next = divs.eq(nextIndex);

	// Fade in the new div over the old one
	next.stop().fadeIn(2000, function(){
		$(this).addClass("current");
	});

	// Fade out the old div
	current.stop().fadeOut(2000, function(){
		$(this).removeClass("current");
		setTimeout(fade, 4000);
	});
}