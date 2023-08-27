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



$(function () {
  ui.fxInit();



  AOS.init();

  $('.gnb_wrap_open').on('click', function(){
    if( $('.gnb').hasClass('active') ) {
      
      $('.gnb_cover, .gnb').removeClass('active');
      $('.gnb > li').removeClass('active');
    } else {
      $('.gnb_cover, .gnb').addClass('active');
      $('.gnb > li').eq(0).addClass('active');
    }
  });

  $('.mo_gnb').on('click', function(){
    $(this).closest('.gnb').find('li').removeClass('active');
    $(this).closest('li').addClass('active');
  });

	// 서브페이지 아코디언 목록 제어
	const $accordion = $("[data-accordion] .info");
	$accordion.on("click", "button", function () {
		const $button = $(this);
		const $info = $button.parents(".info");
		const isExpanded = $button.attr("aria-expanded") === "true";
		
		$accordion.find("button").attr("aria-expanded", false);
		$accordion.removeClass("on");
		
		if (!isExpanded) {
			$button.attr("aria-expanded", true);
			$info.addClass("on");
		}
	});

  var swiper = new Swiper(".msp2", {
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
        loop: true,
        autoplay: {
          delay: 0,
        },
        speed: 500,
      }
    },
  });


});

