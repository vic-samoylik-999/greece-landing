$(function(){
	$('.photo__slider').slick({
		autoplay: true,
		autoplaySpeed: 2500,
		dots: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrow-left.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrow-right.svg" alt=""></button>',
	});

	$('.menu__burger-btn').on('click', function(){
		$('.menu__list').slideToggle();
	});

});

