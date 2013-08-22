$(document).ready(function() {
	
	$(".secondary-header").hide();	
	
	$(".tasks").hover(function (event) {
		//$("h1").css("font-size","45px");
		//$("h3").css("font-size","15px");
		
		$("#company-heading").hide();	
		var elem_id = $(this).attr("id");
		$("#"+elem_id+"-mod").show();
		$(".secondary-header img").addClass("arrows");
		
	  },
	  function () {
	   var elem_id = $(this).attr("id");
		$("#"+elem_id+"-mod").hide();
		$("#company-heading").show();	
	  }
	);
	
});