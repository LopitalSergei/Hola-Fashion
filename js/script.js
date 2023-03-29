"use strict"

$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	})
})

$(document).ready(function () {
	$('.menu__link').click(function (event) {
		$('.header__menu').removeClass('active');
	})
})

$(document).ready(function () {
	$('.slider').slick({
		autoplay: true,
		autoplaySpeed: 5000,
	});

})