/**
 * common ui
 */
var ui = {
	/**
	 * comment  : 공통변수
	 * param    :
	 * @author  :
	 * @date    :
	 */
	window: {
		$this: $(window),
		height: null,
		scrollTop: null,
	},
	document: {
		$this: $(document),
		height: null,
	},
	$html: $("html"),
	$body: null,
	$wrap: null,

	/**
	 * comment  : 초기화
	 * param    :
	 * @author  :
	 * @date    :
	 */
	fxInit: function () {
		ui.fxEventWindow();
		ui.fxCheckScroll();
	},
	/**
	 * comment  : 윈도우 이벤트
	 * param    :
	 * @author  :
	 * @date    :
	 */
	fxEventWindow: function () {
		$(function () {
			ui.$body = $("body");
			ui.$wrap = $("body > .content-wrap");
		});
		ui.window.$this.on({
			load: function () {
				ui.window.scrollTop = ui.window.$this.scrollTop();
				ui.window.height = ui.window.$this.height();
				ui.document.height = ui.document.$this.height();
			},
			scroll: function () {
				ui.window.scrollTop = ui.window.$this.scrollTop();
				ui.document.height = ui.document.$this.height();
			},
			resize: function () {
				ui.window.height = ui.window.$this.height();
			},
		});
	},
	fxCheckScroll: function () {
		ui.window.$this.on({
			load: function () {
				ui.window.scrollTop > 0
					? $("header").addClass("active")
					: $("header").removeClass("active");
			},
			scroll: function () {
				ui.window.scrollTop > 0
					? $("header").addClass("active")
					: $("header").removeClass("active");
			},
		});
	},
};

$(function () {
	ui.fxInit();

	AOS.init();

	$(".gnb_wrap_open").on("click", function () {
		if ($(".gnb").hasClass("active")) {
			$(".gnb_cover, .gnb").removeClass("active");
			$(".gnb > li").removeClass("active");
		} else {
			$(".gnb_cover, .gnb").addClass("active");
			$(".gnb > li").eq(0).addClass("active");
		}
	});

	$(".mo_gnb").on("click", function () {
		$(this).closest(".gnb").find("li").removeClass("active");
		$(this).closest("li").addClass("active");
	});

	// 서브페이지 아코디언 목록 제어
	const $accordion = $("[data-accordion] .info");
	$accordion.on("click", "button", function () {
		const $button = $(this);
		const $info = $button.parents(".info");
		const $idx = $button.parent().index();
		const $content = $button.parents(".content");
		const isExpanded = $button.attr("aria-expanded") === "true";

		$accordion
			.find("button")
			.attr("aria-expanded", false)
			.end()
			.removeClass("on");
		$content.find(".img_wrap img").hide().eq($idx).show();

		if (!isExpanded) {
			$button.attr("aria-expanded", true);
			$info.addClass("on");
		}
	});

	var swiper = null;
	function initSwiper() {
		if (window.innerWidth <= 1119) {
			swiper = new Swiper("#sp1", {
				loop: true,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
				spaceBetween: 50,
			});
		} else {
			if (swiper) {
				swiper.destroy();
			}
		}
	}
	var timer;
	window.addEventListener("resize", function () {
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(initSwiper, 200);
	});
	initSwiper();

	var swiper2 = new Swiper(".msp2", {
    autoplay: {
      delay: 3000
    },
		slidesPerView: 2,
		spaceBetween: 11,
		speed: 500,
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".msp2-button.swiper-button-next",
			prevEl: ".msp2-button.swiper-button-prev",
		},
		breakpoints: {
			1119: {
				slidesPerView: 4,
				spaceBetween: 26,
			},
		},
	});

	// 팝업
	$('.open_pop').on('click', function(){
		$('.dg_popup').addClass('active');
	});
	$('.dg_popup_wrap_close').on('click', function(){
		$('.dg_popup').removeClass('active');
	});

});
