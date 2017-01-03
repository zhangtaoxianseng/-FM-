define(["text!../test/recharge.html","jquery"],function(content){
	function recharge(){
		console.log("recharge");
		$("#main").html(content);
	}
	
	
	
	return {
		recharge:recharge
	}
})