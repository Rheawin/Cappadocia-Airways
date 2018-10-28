(function($) {
	"use strict"

	///////////////////////////
	// Preloader
	$(window).on('load', function() {
		$("#preloader").delay(600).fadeOut();
	});

	///////////////////////////
	// Scrollspy
	$('body').scrollspy({
		target: '#nav',
		offset: $(window).height() / 2
	});

	///////////////////////////
	// Smooth scroll
	$("#nav .main-nav a[href^='#']").on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 600);
	});

	$('#back-to-top').on('click', function(){
		$('body,html').animate({
			scrollTop: 0
		}, 600);
	});

	///////////////////////////
	// Btn nav collapse
	$('#nav .nav-collapse').on('click', function() {
		$('#nav').toggleClass('open');
	});

	///////////////////////////
	// Mobile dropdown
	$('.has-dropdown a').on('click', function() {
		$(this).parent().toggleClass('open-drop');
	});

	///////////////////////////
	// On Scroll
	$(window).on('scroll', function() {
		var wScroll = $(this).scrollTop();

		// Fixed nav
		wScroll > 1 ? $('#nav').addClass('fixed-nav') : $('#nav').removeClass('fixed-nav');
		wScroll > 1 ? $('.wppp').addClass('wpp-color') : $('.wppp').removeClass('wpp-color')

		// Back To Top Appear
		wScroll > 700 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut();
	});

	///////////////////////////
	// magnificPopup
	$('.work').magnificPopup({
		delegate: '.lightbox',
		type: 'image'
	});

	///////////////////////////
	// Owl Carousel
	$('#about-slider').owlCarousel({
		items:1,
		loop:true,
		margin:15,
		nav: true,
		navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		dots : true,
		autoplay : true,
		animateOut: 'fadeOut'
	});

	$('#testimonial-slider').owlCarousel({
		margin:15,
		dots : true,
		nav: false,
		responsive:{
			0: {
				items:1
			}
		}
	});
	$('#popoverData').popover();
	$('.submit-btn').on('click',function(){
		alert('Successful booking! We will return to you again');
	})
	var token = '8426996539.f1daf10.1bcbc062039b4cb585fd73791b6622fb', // learn how to obtain it below
	userid = 8426996539, // User ID - get it in source HTML of your Instagram profile or look at the next example :)
	num_photos = 20; // how much photos do you want to get

$.ajax({
url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent', // or /users/self/media/recent for Sandbox
dataType: 'jsonp',
type: 'GET',
data: {access_token: token, count: num_photos},
		success: function(data) {
			for (var i = 0; i < num_photos; i++) {
						$(".asdas").append("<a class='das' target='_blank' href='" + data.data[i].link + "'><img class='den' src='" + data.data[i].images.low_resolution.url + "'></img></a>");
			}
		},
		error: function(data){
		console.log(data); // send the error notifications to console
	}
		}
	);
})(jQuery);
