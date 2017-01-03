define(["text!../test/feedback.html","jquery"],function(content){
	function feedback(){
		console.log("user1");
		$("#main").html(content);
	}
	
	
	
	return {
		feedback:feedback
	}
})