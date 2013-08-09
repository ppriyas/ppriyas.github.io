$(document).ready(function() {
	
	$("#basecamp-mod").hide();
	$("#highrise-mod").hide();
	$("#campfire-mod").hide();
	
	$(".tasks").hover(function (event) {
		$("h1").css("font-size","45px");
		$("h3").css("font-size","15px");
		
		$("#company-heading").hide();				
		$("#"+event.target.id + "-mod").show();
		
	  },
	  function () {
	   	$("#basecamp-mod").hide();
		$("#highrise-mod").hide();
		$("#campfire-mod").hide();
		$("#company-heading").show();	
	  }
	);
	
});