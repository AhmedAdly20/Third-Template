$(function() {

	'use strict';

	//Trigger Nice Scroll Plugin
	$("body").niceScroll({
 	 cursorcolor:"#f7600e",
 	 cursorwidth:"7px"
	});


	//Change Header Height
	$('.header').height($(window).height());

	// SCroll To Features
	$('.header .arrow i').click(function() {

		$('html, body').animate({

			scrollTop: $('.features').offset().top

		},2000);

	});

	$('.hire').click(function(){
		$('html, body').animate({
			scrollTop: $('.ourteam').offset().top
		},2000);
	});

	// show more photos
	$('.showmore').click(function(){

		$('.ourwork .hidden').fadeIn();

	});

	// Create Our Slider
	var left = $('.testimonials .fa-chevron-left')
	var right = $('.testimonials .fa-chevron-right')

	function checkClients() {

		if ($('.client:first').hasClass('active')) {

			left.fadeOut();
		}
		else{
			left.fadeIn();
		}
		if ($('.client:last').hasClass('active')) {

			right.fadeOut();
		}
		else{
			right.fadeIn();
		}
	}
	checkClients();

	$('.testimonials i').click(function() {

		if($(this).hasClass('fa-chevron-right')) {

			$('.testimonials .active').fadeOut(1000,function(){

				$(this).removeClass('active').next('.client').addClass('active').fadeIn();

				checkClients();

			});
		}else{
			$('.testimonials .active').fadeOut(1000,function(){

				$(this).removeClass('active').prev('.client').addClass('active').fadeIn();

				checkClients();

			});
		}

	});


});