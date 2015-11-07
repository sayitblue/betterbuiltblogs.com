$(document).ready(function(){
	alert("test");
var pagewidth = $(window).width();
var pageheight = $(window).height();
var pagewidthratio = pagewidth/pageheight;
var pageheightratio = pageheight/pagewidth;
var tabheight = pageheight * .08;

//if(pagewidth < pageheight){
	$("#siteheader").css("width", (.4 * pagewidth) + "px");
//}


$.ajax({
	url:"renderloginjoinlogout.php",
	success:function(loginjoinlogout){
	$("#loginjoinlogout").html("<a href = '#' class = 'loginjoinlogout'>" + loginjoinlogout + "</a>");
	},
	async:false
});

$(".loginjoinlogout").click(function(){
	if($(".loginjoinlogout").text() === "login or join"){
	$("#loginjoinlogout").html("<a href = '#' class = 'loginjoinlogout'>logout</a>");
	resizeloginjoinlogout(pagewidth, pageheight);
	$("#loginjoinlogout").click(function(){
		$("#content").html("<div id = 'loginorjoinisland'><div id = 'loginjoinheader'>Login or Join</div><div id = 'loginjoinform'>First Name:<br /><input type = 'text' class = 'formtextfield' id = 'loginjoinfirstname'><br /><br />Last Name:<br /><input type = 'text' class = 'formtextfield' id = 'loginjoinlastname'><br /><br />Pen Name:<br /><input type = 'text' class = 'formtextfield' id = 'loginjoinpenname'><br /><br />Password:<br /><input type = 'password' class = 'formtextfield' id = 'loginjoinpassword'><br /><br /><input type = 'submit' id = 'loginjoinsubmit' value = 'Submit'></div></div>");
		resizeformlabeling(pagewidth, pageheight);
//Pen Name: <input type = 'text' id = 'loginjoinpenname'><br /><br />
		if(pagewidth > pageheight){
		$("#loginorjoinisland").css("width", "33%");
		//$("#loginorjoinisland").css("height", "75%");
		//$("#loginorjoinisland").css("position", "relative");
		//$("#loginorjoinisland").css("position", "relative");
		
		}else{
		$("#loginorjoinisland").css("width", "90%");
		}
		$("#loginorjoinisland").css("height", "75%");
		$("#loginorjoinisland").css("background", "silver");
		$("#loginorjoinisland").css("border", "inset navy 5px");
		$("#loginorjoinisland").css("margin-left", "auto");
		$("#loginorjoinisland").css("margin-right", "auto");
		$("#loginorjoinisland").css("position", "relative");
		$("#loginorjoinisland").css("top", tabheight * 1.25);
		
		$("#loginjoinsubmit").click(function(){
		$.ajax({
			type:"GET",
			url:"trylogin.php",
			data:{firstname:$("#loginjoinfirstname").val(), lastname:$("#loginjoinlastname").val(), penname:$("#loginjoinpenname").val()},
			success:function(md5pw){
				if($.md5($("#loginjoinpassword").val()) === md5pw){
				//begin logged in activity:
				//object:
				
				}	//end logged in activity
				else{
					//proceed to try again or join:
					
				}
			}
		});
		});
		
	});

	}else{
	$("#loginjoinlogout").html("<a href = '#' class = 'loginjoinlogout'>login or join</a>");
	resizeloginjoinlogout(pagewidth, pageheight);
	$("#loginjoinlogout").click(function(){
		
	});
	}
});



$("#centerstage").css("width", pagewidth * .65);
$("#centerstage").css("height", pageheight);
$("#tabs").css("width", "99%");
$("#tabs").css("height", tabheight);
$(".tab").css("width", "99.75%");
$(".tab").css("height", "100%");
$("#content").css("width", "99%");
$("#content").css("height", pageheight - tabheight);
if(pagewidth > pageheight){
	$(".tablink").css("font-size", pageheight / 545 + "em");
	$(".loginjoinlogout").css("font-size", (pageheight/545 * 1.15) + "em");
}else{
	$(".tablink").css("font-size", (pagewidth / 1138 * 2) + "em");
	$(".loginjoinlogout").css("font-size", (pagewidth / 1138 * 2) + "em");
	$("#loginjoinlogout").css("margin-top", "7.5%");
}
$(".tablink").click(function(){$(".tablink:not(this)").css("font-size", pageheight / 545 + "em"); $(this).css("font-size", (pageheight / 545 * 1.5) + "em")});
//loadlabels:
$.ajax({
	type:"GET",
	url:"templates/labels.xml",
	success:function(labels){
		if(labels)
		{
		label1 = labels.getElementsByTagName("neutral")[0].getAttribute("yourversion");
		label2 = labels.getElementsByTagName("work")[0].getAttribute("yourversion");
		label3 = labels.getElementsByTagName("opinionated")[0].getAttribute("yourversion");
		$("#tablink1").html("<a href = '#'>" + label1 + "</a>");
		$("#tablink2").html("<a href = '#'>" + label2 + "</a>");
		$("#tablink3").html("<a href = '#'>" + label3 + "</a>");
		}
	},
	dataType:"xml",
	async:false
	});
	
$(".tablink a").click(function(){$(".tablink a:not(this)").css("color", "white"); $(this).css("color", "#00ff00")});

//alert(new Date().getTime());

});	//end document ready