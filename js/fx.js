$(document).ready(function(){
	// FAQ open/hide
	$('.faq h2').click(function() {
		$(this).next().slideToggle('fast');
	});
  });