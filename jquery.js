$(document).ready(function() {
	
	$(function () {
	  $(document).scroll(function () {
	    var $nav = $(".navbar-fixed-top");
	    var top = $(".content").offset().top;
	    $nav.toggleClass('scrolled', $(this).scrollTop() > top);
	  });
	});

	var el = $('.icons');
   
    el.click(function(e) {

 			e.preventDefault();

 			return false;

 	});
	
})