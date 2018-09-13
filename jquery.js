$(document).ready(function() {
	
	$(function () {
	  $(document).scroll(function () {
	    var $nav = $(".navbar-fixed-top");
	    var top = $(".content").offset().top;
	    $nav.toggleClass('scrolled', $(this).scrollTop() > top);
	  });
	});

	var el = $('#add');
   
    el.click(function(e) {

 			e.preventDefault();
			var $suggestion = $("#suggestion").val(); 
 			$("#pl").append('<li>' + $suggestion + '</li>');
 			return false;

 	});
	
})