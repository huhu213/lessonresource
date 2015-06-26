function tabSlide(){
	var tablist = $("#userSelect li");
	var len = tablist.length;
	$(tablist[0]).click(function(){
		$(tablist[0]).css("background-color", "#16A085");
		$(tablist[1]).css("background-color", "#CCCCCC");
		$(tablist[2]).css("background-color", "#CCCCCC");
	})
	$(tablist[1]).click(function(){
		$(tablist[1]).css("background-color", "#16A085");
		$(tablist[0]).css("background-color", "#CCCCCC");
		$(tablist[2]).css("background-color", "#CCCCCC");
	})
	$(tablist[2]).click(function(){
		$(tablist[2]).css("background-color", "#16A085");
		$(tablist[1]).css("background-color", "#CCCCCC");
		$(tablist[0]).css("background-color", "#CCCCCC");
	})	
}

$().ready(function(){ 
tabSlide();
$('.banner').unslider({
	speed: 500,               //  The speed to animate each slide (in milliseconds)
	delay: 3000,              //  The delay between slide animations (in milliseconds)
	complete: function() {},  //  A function that gets called after every slide animation
	keys: true,               //  Enable keyboard (left, right) arrow shortcuts
	dots: true,               //  Display dot navigation
	fluid: false              //  Support responsive design. May break non-responsive designs
});

})