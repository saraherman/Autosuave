$(document).ready(function(){
	setInterval();

	$('.carousel .previous').click(function(){
		var first = $('.carousel ul').find('li:first');
		
		$('.carousel ul li').animate({
			'left':'-=300px'
		},1000);
		
		
	});

	$('.carousel .next').click(function(){
		
		$('.carousel ul li').animate({
			'left':'+=300px'
		},1000);
	});
});