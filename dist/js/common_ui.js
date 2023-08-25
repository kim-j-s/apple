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
		scrollTop: null
	},
	document: {
		$this: $(document),
		height: null,
	},
	$html: $('html'),
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
			ui.$body = $('body');
			ui.$wrap = $('body > .content-wrap');
		});
		ui.window.$this.on({
			'load': function () {
				ui.window.scrollTop = ui.window.$this.scrollTop();
				ui.window.height = ui.window.$this.height();
				ui.document.height = ui.document.$this.height();
			},
			'scroll': function () {
				ui.window.scrollTop = ui.window.$this.scrollTop();
				ui.document.height = ui.document.$this.height();
			},
			'resize': function () {
				ui.window.height = ui.window.$this.height();
			}
		})
	},
	fxCheckScroll: function () {
		// var beforePositon = 0;
		ui.window.$this.on({
			'load': function () {
				(ui.window.scrollTop > 0) ? $('header').addClass('active') : $('header').removeClass('active');
			},
			'scroll': function () {
				(ui.window.scrollTop > 0) ? $('header').addClass('active') : $('header').removeClass('active');
			}
		})
	},
}

// 공유하기 url 복사
function CopyUrlToClipboard() {
	$('.ps-btn-clipboard').on('click', function () {
		var ct;
		clearTimeout(ct);
		var dummy = document.createElement("input");
		var text = location.href;
		document.body.appendChild(dummy);
		dummy.value = text;
		dummy.select();
		document.execCommand("copy");
		document.body.removeChild(dummy);
		$('.ps-toast-msg').addClass('on');
		ct = setTimeout(clearToast, 1500);
	});
}
function clearToast() {
	$('.ps-toast-msg').removeClass('on');
}

// slider
function slide() {
	$('.ps-slide-item a').on('click', function () {
		var $this = $(this);
		if ($this.next().css('display') == 'none') {
			$this.closest('.ps-slide').find('.ps-slide-item').removeClass('on');
			$this.closest('.ps-slide').find('.ps-slide-content').slideUp(300);
			$this.closest('.ps-slide-item').addClass('on');
			$this.next().slideDown(300);
		} else {
			$this.closest('.ps-slide').find('.ps-slide-item').removeClass('on');
			$this.closest('.ps-slide').find('.ps-slide-content').slideUp(300);
		}
	});
}


$(function () {
	ui.fxInit();

	// 공유하기 url 복사
	CopyUrlToClipboard();


	// slider
	slide();


	AOS.init();

	$('.gnb_wrap_open').on('click', function () {
		if ($('.gnb').hasClass('active')) {

			$('.gnb_cover, .gnb').removeClass('active');
			$('.gnb > li').removeClass('active');
		} else {
			$('.gnb_cover, .gnb').addClass('active');
			$('.gnb > li').eq(0).addClass('active');
		}
	});

	$('.mo_gnb').on('click', function () {
		$(this).closest('.gnb').find('li').removeClass('active');
		$(this).closest('li').addClass('active');
	});

	// 서브페이지 아코디언 목록 제어
	const $accordion = $("[data-accordion] .info");
	$accordion.on("click", "button", function () {
		const $button = $(this);
		const isExpanded = $button.attr("aria-expanded") === "true";
		$button.attr("aria-expanded", !isExpanded);
		$button.parents(".info").toggleClass("on", !isExpanded);
	});

});

