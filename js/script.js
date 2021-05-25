$(document).ready(function () {
	$('.header__burger').click(function () {
		$('.header__burger,.header__links').toggleClass('active');
	})


	$('.slider').slick({
		arrows: false,
		dots: true
	});


	$('.slick-dots').appendTo('.top-block');


	$('.quotes-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.quotes-photo-slider'
	});
	$('.quotes-photo-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.quotes-slider',
		centerMode: true,
		focusOnSelect: true,
		centerPadding: 0
	});
})