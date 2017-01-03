define(["text!../test/share.html","jquery"],function(content){
	function share(){
		console.log("user");
		$("#main").html(content);
	}
	
	
	
	return {
		share:share
	}
})