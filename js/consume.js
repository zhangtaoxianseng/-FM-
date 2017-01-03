define(["text!../test/consume.html","jquery"],function(content){
	function consume(){
		console.log("consume");
		$("#main").html(content);
	}
	
	
	
	return {
		consume:consume
	}
})