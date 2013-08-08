$(document).ready(function() {
	$(".tasks").hover(function () {
		$("#main-slogan").css("font-size","45px");
		$("h3").css("font-size","15px");
		$("#main-slogan").text("Basecamp is the project management tool you wish you had on your last project."),
		$("h3").text("Are you still managing projects with email? Are you still using Excel for your to-do lists? It's time to upgrade to Basecamp. Manage projects and collaborate with your clients the modern way.");
	  },
	  function () {
	    $("#main-slogan").css("font-size","50px");
		$("h3").css("font-size","20px");
		$("#main-slogan").text("Making collaboration productive and enjoyable for people every day.");
		$("h3").text("Frustration-free web-based apps for collaboration, sharing information, and making decisions.")
		}
	);
	
});