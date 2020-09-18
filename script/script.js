$(function () {
	/* Меню */
	let nav = $('.nav');
	$('.nav_btn').on('click', function (evt) {
		evt.preventDefault();


		if (nav.css('display') == 'none') {
			$(nav).show(300);
		} else {
			$(nav).hide(300);
		}
	})

	$(window).on('resize', function () {
		if ($(this).width() > 992) {
			$(nav).show(300);
		}
	})

	/* Анимация при прокрутке (скролле) страницы */
	const animItems = $('.anim_item');
	if (animItems.length > 0) {
		$(window).on('scroll', animOnScroll);
		function animOnScroll() {
			for (let index = 0; index < animItems.length; index++) {
				const animItem = animItems[index];
				const animItemHeight = $(animItem).height();
				const animItemOffset = $(animItem).offset().top;
				const animStart = 4;

				let animItemPoint = window.innerHeight - animItemHeight / animStart;
				if (animItemHeight > window.innerHeight) {
					animItemPoint = window.innerHeight - window.innerHeight / animStart;
				}
				if ((pageYOffset > animItemOffset - animItemPoint) && (pageYOffset < animItemOffset + animItemHeight)) {
					$(animItem).addClass('active');
				} else {
					$(animItem).addClass('remove');
				}
			}
		}
	}
	animOnScroll();
	/* Плавные ссылки */
	let links = $('.nav_link');
	$(links).on('click', function (evt) {
		evt.preventDefault();
		let elem = $($(this).attr('href'));

		$('html').animate({
			scrollTop: elem.offset().top,
		}, 500);
		animOnScroll();


		if ($(window).width() < 992) {
			$(".nav").hide(300);
		}
	})

	$('.type').on('click', function (evt) {
		evt.preventDefault();
		$('.type').removeClass('active');
		$(this).addClass('active');
	})





	/* BTNUP */
	$('.btn_Up').on('click', function (evt) {
		evt.preventDefault();
		$('html').animate({
			scrollTop: 0,
		}, 200)
	})

	function chechBtnUp() {
		if ($(this).scrollTop() > 882) {
			$('.btn_Up').addClass('show');
			handlerLazyLoad(imagesLazyLoad);
		} else {
			$('.btn_Up').removeClass('show');
		}
	}

	/* Lazy Load */
	const imagesLazyLoad = document.querySelectorAll('.article_img img, .pics img');
	function handlerLazyLoad(images) {
		images.forEach(img => {
			img.src = img.getAttribute('data-img');
		});
	}

	$(window).on('scroll', function () {
		chechBtnUp();
	})
	chechBtnUp();
})