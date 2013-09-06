
$(function(){
	$('body').plusAnchor({
        easing: 'linear',
        speed:  1300
    });

    $('header').animate({
    	opacity: 1,
    	width: "101%"
  	}, 1700, function() {
    	$('header').animate({
    		width:"100%"
    	},100);

  	});
    $('section').fadeIn(1200);
});	



