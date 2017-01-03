define(["text!../test/activity.html","jquery"],function(content){
	function activity(){
		console.log("activity");
		$("#main").html(content);
		$.ajax({
			type:"get",
			url:"",
			async:true,
			success:function(res){
				
			}
		});
		
	}
		
	return {
		activity:activity
	}
})