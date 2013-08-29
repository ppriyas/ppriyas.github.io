$(document).ready(function() {
	
		
	$(".tasks").hover(function (event) {
		
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

