var alen = texta.length;
function tabSlide(){
	var tablist = $("#userSelect li");
	var len = tablist.length;
	tablist.eq(0).addClass("userActive");
	tablist.each(function(i){
		tablist.eq(i).click(function(){
			console.log(i);
			tablist.eq(i).addClass("userActive");
			tablist.eq((i+1)%len).removeClass("userActive");
			tablist.eq((i-1)%len).removeClass("userActive");
		})
	})
}

$().ready(function(){ 
tabSlide();
var textroll = $(".rollBox a");
var rolli = 1;
textroll.text(texta[0]);

setInterval(function(){
	textroll.animate({top: 0});
	if(rolli == alen-1){
		textroll.text(texta[rolli]);
		rolli = 0;
	}
	else{		
		textroll.text(texta[rolli]);
		rolli ++;
	}	
},4000)

$("#slides").slides({
		preload: true,
		play: 3000,
		pause: 500,
		hoverPause: true
	});
	var mw = $(".mbox").width()+10;
	var ml = $(".mbox").length;	
	$(".themes").width(mw*ml);
	$(".t_menu li").mouseover(function(){
		var index = $(this).index();
		$(".themes").animate({left:-mw*index,opacity:1},500);
	})

})