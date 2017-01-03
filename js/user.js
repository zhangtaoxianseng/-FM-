define(["text!../test/user.html","jquery","chart"],function(content){
	function user(){
		console.log("user");
		$("#main").html(content);
//		var main_sumwidth = $(".main_userSum").width();
//		var main_sum = $(".main_userSum").height()*0.75;
//		var canvas=document.getElementById("userSum_canvas");
//          canvas.width = main_sumwidth;
//          canvas.height = main_sum;

//var canvas=document.getElementById("userSum_canvas");
//      window.onresize=resizeCanvas;
//      function resizeCanvas(){
//          canvas.width=window.innerWidth;
//          canvas.height=window.innerHeight;
//      }
//      resizeCanvas(); 


		function quxian(){    //曲线图，也可以变成折现图
			var ctx = document.getElementById("userSum_canvas").getContext("2d");
		var data1 = [65,59,90,81,56,55,40];
		var data2 = [28,48,40,19,96,27,100]
		var data = {
					labels : ["January","February","March","April","May","June","July"], //x轴的信息
					datasets : [
						{
							fillColor : "rgba(220,220,220,0.5)",
							strokeColor : "rgba(220,220,220,1)",
							pointColor : "rgba(255,0,0,1)",
							pointStrokeColor : "#fff",
							data : data1
						},
						{
							fillColor : "rgba(151,187,205,0.5)",
							strokeColor : "rgba(151,187,205,1)",
							pointColor : "rgba(151,187,205,1)",
							pointStrokeColor : "#fff",
							data : data2
						}
					]
				}
		   var salesVolumeChart = new Chart(ctx).Line(data, {     //销售图
	
							
				//Boolean - If we show the scale above the chart data			
				scaleOverlay : false,
				
				//Boolean - If we want to override with a hard coded scale
				scaleOverride : false,
				
				//** Required if scaleOverride is true **
				//Number - The number of steps in a hard coded scale
				scaleSteps : null,
				//Number - The value jump in the hard coded scale
				scaleStepWidth : null,
				//Number - The scale starting value
				scaleStartValue : null,
			
				//String - Colour of the scale line	
				scaleLineColor : "rgba(0,0,0,.1)",
				
				//Number - Pixel width of the scale line	
			scaleLineWidth : 1,
			
				//Boolean - Whether to show labels on the scale	
//			scaleShowLabels : false,  //显示y轴标签
				
				//Interpolated JS string - can access value
				scaleLabel : "<%=value%>",
				
				//String - Scale label font declaration for the scale label
				scaleFontFamily : "'Arial'",
				
				//Number - Scale label font size in pixels	
				scaleFontSize : 12,
				
				//String - Scale label font weight style	
				scaleFontStyle : "normal",
				
				//String - Scale label font colour	
				scaleFontColor : "#666",	
				
				///Boolean - Whether grid lines are shown across the chart
				scaleShowGridLines : true,
				
				//String - Colour of the grid lines
				scaleGridLineColor : "rgba(0,0,0,.05)",
				
				//Number - Width of the grid lines
				scaleGridLineWidth : 1,	
				 scaleStepWidth:1,
				//Boolean - Whether the line is curved between points
				bezierCurve : true,
				
				//Boolean - Whether to show a dot for each point
				pointDot : true,
				
				//Number - Radius of each point dot in pixels
				pointDotRadius : 3,
				
				//Number - Pixel width of point dot stroke
				pointDotStrokeWidth : 1,
				
				//Boolean - Whether to show a stroke for datasets
				datasetStroke : true,
				
				//Number - Pixel width of dataset stroke
				datasetStrokeWidth : 2,
				
				//Boolean - Whether to fill the dataset with a colour
				datasetFill : true,
				
				//Boolean - Whether to animate the chart
				animation : true,
			
				//Number - Number of animation steps
				animationSteps : 60,
				
				//String - Animation easing effect
				animationEasing : "easeOutQuart",
			
				//Function - Fires when the animation is complete
				onAnimationComplete : null
				
			})
		   
		}
		quxian()
		
		  function zhuzhuang(){
		   	
			var ctx = document.getElementById("userNew_canvas").getContext("2d");
		   var data = {
				labels : ["January","February","March","April","May","June","July"],
				datasets : [
					{
						fillColor : "rgba(220,220,220,0.5)",
						strokeColor : "rgba(220,220,220,1)",
						data : [65,59,90,81,56,55,40]
					},
					{
						fillColor : "rgba(151,187,205,0.5)",
						strokeColor : "rgba(151,187,205,1)",
						data : [28,48,40,19,96,27,100]
					}
				]
			}

			 var salesVolumeChart = new Chart(ctx).Bar(data, {
				
				
					//Boolean - If we show the scale above the chart data			
					scaleOverlay : false,
					
					//Boolean - If we want to override with a hard coded scale
					scaleOverride : false,
					
					//** Required if scaleOverride is true **
					//Number - The number of steps in a hard coded scale
					scaleSteps : null,
					//Number - The value jump in the hard coded scale
					scaleStepWidth : null,
					//Number - The scale starting value
					scaleStartValue : null,
				
					//String - Colour of the scale line	
					scaleLineColor : "rgba(0,0,0,.1)",
					
					//Number - Pixel width of the scale line	
					scaleLineWidth : 1,
				
					//Boolean - Whether to show labels on the scale	
//					scaleShowLabels : false,
					
					//Interpolated JS string - can access value
					scaleLabel : "<%=value%>",
					
					//String - Scale label font declaration for the scale label
					scaleFontFamily : "'Arial'",
					
					//Number - Scale label font size in pixels	
					scaleFontSize : 12,
					
					//String - Scale label font weight style	
					scaleFontStyle : "normal",
					
					//String - Scale label font colour	
					scaleFontColor : "#666",	
					
					///Boolean - Whether grid lines are shown across the chart
					scaleShowGridLines : true,
					
					//String - Colour of the grid lines
					scaleGridLineColor : "rgba(0,0,0,.05)",
					
					//Number - Width of the grid lines
					scaleGridLineWidth : 1,	
				
					//Boolean - If there is a stroke on each bar	
					barShowStroke : true,
					
					//Number - Pixel width of the bar stroke	
					barStrokeWidth : 2,
					
					//Number - Spacing between each of the X value sets
					barValueSpacing : 5,
					
					//Number - Spacing between data sets within X values
					barDatasetSpacing : 1,
					
					//Boolean - Whether to animate the chart
					animation : true,
				
					//Number - Number of animation steps
					animationSteps : 60,
					
					//String - Animation easing effect
					animationEasing : "easeOutQuart",
				
					//Function - Fires when the animation is complete
					onAnimationComplete : null
					
					})
		 		} 
		 
				zhuzhuang();
		
		
	}
	
	return {
		user:user
	}
})