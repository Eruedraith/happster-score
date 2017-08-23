$(document).ready(function(){
	if ($('#cta').length) {
	    var scrollTrigger = 600, // px
	        backToTop = function () {
	            var scrollTop = $(window).scrollTop();
	            if (scrollTop > scrollTrigger) {
	                $('#cta').addClass('show');
	            } else {
	                $('#cta').removeClass('show');
	            }
	        };
	    backToTop();
	    $(window).on('scroll', function () {
	        backToTop();
	    });
	    $('').on('click', function (e) {
	        e.preventDefault();
	        $('html,body').animate({
	            scrollTop: 0
	        }, 700);
	    });
	}

	$('#cta__close-btn').click(function() {
		$("#cta").addClass('animated zoomOutLeft');
	});
})