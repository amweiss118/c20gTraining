$(document).ready(function() {
	
	$(function () {
	  $(document).scroll(function () {
	    var $nav = $(".navbar-fixed-top");
	    $nav.toggleClass('scrolled', $(this).scrollTop() > 600);
	  });
	});

	var el = $('.icons');
   
    el.click(function(e) {

 			e.preventDefault();

 			

 			return false;

 	});
	
})