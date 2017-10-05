//js
$(document).ready(function() {
	
	$("#speed_up").click( function() {
		$("#hs").addClass("hs");
		$(".hs").css("animation-duration" , "-=0.02s" );
		$("#finger").toggleClass("scratch");
	})
});