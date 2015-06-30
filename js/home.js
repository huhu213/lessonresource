var texta = ["初中语文 沪教版 六年级下_[2008年12月第3版] 更新至第2单元   407条","初中语文 人教版 八年级上[2009年3月第1版] 更新至第5单元   1450条","初中语文 人教版 七年级下_[2009年9月第1版] 更新至第2单元   573条"];
var alen = texta.length;
console.log(alen);
function tabSlide(){
	var tablist = $("#userSelect li");
	var len = tablist.length;
	tablist.eq(0).addClass("userActive");
	tablist.each(function(i){
		tablist.eq(i).click(function(){
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

//setInterval(function(){
//	if(rolli == alen-1){
//		textroll.text(texta[rolli]);
//		rolli = 0;
//	}
//	else{
//		textroll.text(texta[rolli]);
//		rolli ++;
//	}	
//},4000)

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