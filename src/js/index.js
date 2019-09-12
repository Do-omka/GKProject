document.addEventListener('DOMContentLoaded', (e)=> {
	
	if (document.querySelector('.ourTeam-slider')) {
		let ourTeam_slider = new Swiper('.ourTeam-slider .slider', {
			wrapperClass: 'slider-slides',
			slideClass: 'slider-slide',
			slidesPerView: 4,
			spaceBetween: 30,
			// autoHeight: true,
			navigation: {
				nextEl: '.ourTeam-slider .slider-control._next',
				prevEl: '.ourTeam-slider .slider-control._prev'
			},
			breakpoints: {
				1199: {
					slidesPerView: 3,
				},
				991: {
					slidesPerView: 2,
				},
				767: {
					slidesPerView: 2,
				},
				575: {
					slidesPerView: 1,
				}
			},
			keyboard: {
				enabled: true,
				onlyInViewport: true
			}
		});
	}
	
	if (document.querySelector('.loicences-slider')) {
		let ourTeam_slider = new Swiper('.loicences-slider .slider', {
			wrapperClass: 'slider-slides',
			slideClass: 'slider-slide',
			watchSlidesVisibility: true,
			slideVisibleClass: '_visible',
			slidesPerView: 4,
			spaceBetween: 30,
			// autoHeight: true,
			navigation: {
				nextEl: '.loicences-slider .slider-control._next',
				prevEl: '.loicences-slider .slider-control._prev'
			},
			pagination: {
				el: '.loicences-slider .slider-pagination',
				bulletClass: 'slider-bullet',
				bulletActiveClass: 'slider-bullet_active',
				type: 'bullets',
				clickable: true,
			},
			breakpoints: {
				1199: {
					slidesPerView: 3,
				},
				991: {
					slidesPerView: 2,
				},
				767: {
					slidesPerView: 2,
				},
				575: {
					slidesPerView: 1,
				}
			},
			keyboard: {
				enabled: true,
				onlyInViewport: true
			}
		});
	}
	
})
