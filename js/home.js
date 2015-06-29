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
//$('.banner').unslider({
//	speed: 500,               //  The speed to animate each slide (in milliseconds)
//	delay: 3000,              //  The delay between slide animations (in milliseconds)
//	complete: function() {},  //  A function that gets called after every slide animation
//	keys: true,               //  Enable keyboard (left, right) arrow shortcuts
//	dots: true,               //  Display dot navigation
//	fluid: false              //  Support responsive design. May break non-responsive designs
//});
$("#slides").slides({
		preload: true,
		preloadImage: 'images/loading.gif',
		play: 3000,
		pause: 500,
		hoverPause: true
	});
	var mw = $(".mbox").width()+10;
	var ml = $(".mbox").length;	
	var color = ["#2587BB", "#F49871", "#96D5EE", "#ED87B7",  "#8A6CAC",  "#DAC1A0", "#AED378"]
	var loginColor = ["#123587", "#B3723D", "#1D8E9B", "#A41C72", "#775677", "#A59356", "#769149"]
	$(".themes").width(mw*ml);
	$(".t_menu li").mouseover(function(){
		var index = $(this).index();
		$(".themes").animate({left:-mw*index,opacity:1},500);
	})
	//background-color changed when dots clicked
	var $li = $(".pagination li a");
	$li.each(function(i){
		$li.eq(i).click(function(){
			 setTimeout(function(){
			 	$("#lineTwo").css("background", color[i]);
			 	$(".loginBox").css("background-color", loginColor[i]); 
			 },30);
			        
		})
	})

})