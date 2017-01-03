require.config({
	paths:{
		index:"./lib/index",
		bootstrap:"./lib/bootstrap",
		jquery:"./lib/jquery-2.1.1",
		backbone:"./lib/backbone",
		underscore:"./lib/underscore",	
		router:"./router",
		text:"./lib/text",
		chart:"./lib/chart"
	}
	
})
require(["backbone","jquery","chart","router","index"],function(backbone){
		backbone.history.start();
})