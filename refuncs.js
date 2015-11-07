function resizeloginjoinlogout(pagewidth, pageheight){
	if(pagewidth > pageheight){
	//$(".tablink").css("font-size", pageheight/545 + "em");
	$(".loginjoinlogout").css("font-size", (pageheight/545 * 1.15) + "em");
	}else{
	//$(".tablink").css("font-size", pagewidth/1138 + "em");
	$(".loginjoinlogout").css("font-size", (pagewidth/1138 * 2) + "em");
	}
}

function resizeformlabeling(pagewidth, pageheight){
	if(pagewidth > pageheight){
		$("#loginorjoinisland").css("font-size", (pageheight/545 * 1.15) + "em");
	}else{
		$("#loginorjoinisland").css("font-size", (pagewidth/1138 * 2) + "em");		
	}
}