var main = function(){
	$('.menu-icon').click(function(){
		$('.nav').animate({
			left: '0px'
		}, 200);
		$('body').animate({
			left: '200px'
		}, 200);
	});
}

$(document).ready(main)