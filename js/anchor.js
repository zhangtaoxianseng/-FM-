define(["text!../test/anchor.html","jquery"],function(content){
	function anchor(){
		console.log("anchor");
		$("#main").html(content);
	}
	
	
	
	return {
		anchor:anchor
	}
})