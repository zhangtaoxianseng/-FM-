define(["jquery"],function(){
		document.documentElement.style.fontSize = innerWidth/16.8 +"px";
	window.onresize =function(){
		document.documentElement.style.fontSize = innerWidth/16.8 + "px";
		
	}

	$("#nav li").on("click",function(){
		$("#nav li").css({
			background:"white"
		})
		$("#nav li").find("p").css({
			color:"#5b7e90"
		})
		
		$(this).css({
			background:"#f6faff"
		})
		$(this).find("p").eq(0).css({
			color:"#23b6ff"
		})
		$(this).find("p").eq(1).css({
			color :"#333333"
		})
	})
})