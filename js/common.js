$(document).ready(function(){
	setTimeout(fade, 5000);
});

// Fade allows the creation of an animated image slider
function fade(){
	// Retrieve the current and next divs to be animated
	let divs = $(".central-image");
	let current = $(".current");
	let currentIndex = divs.index(current);
	let nextIndex = currentIndex + 1 < divs.length ? currentIndex + 1 : 0;
	let next = divs.eq(nextIndex);

	// Fade in the new div over the old one
	next.stop().fadeIn(1500, function(){
		$(this).addClass("current");
	});

	// Fade out the old div
	current.stop().fadeOut(1500, function(){
		$(this).removeClass("current");
		setTimeout(fade, 5000);
	});
}