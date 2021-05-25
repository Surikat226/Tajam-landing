$(document).ready(function () {
	$('.header__burger').click(function () {
		$('.header__burger,.header__links').toggleClass('active');
	})


	$('.slider').slick({
		arrows: false,
		dots: true
	});


	$('.slick-dots').appendTo('.welcome__link');
})