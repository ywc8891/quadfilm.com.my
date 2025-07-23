$(function () {
    $(".toggle-menu").click(function () {
        $(this).parent().children('.dt-mobile').toggleClass('active');
        $('header').toggleClass('show-shadow');
    });
    $("ul.menu-head li a").on("click", function () {
        $(".dt-mobile.active").removeClass('active');
        $(".toggle-menu.active").removeClass('active');
        $("header").removeClass('show-shadow');
    });
});

$(document).ready(function () {
    $('ul.menu-head li').click(function () {
        $('ul.menu-head li').removeClass("active");
        $(this).addClass("active");
    });
});

$(document).ready(function () {
    $('.navbar-collapse li').click(function () {
        $('.navbar-collapse li').removeClass("active");
        $(this).addClass("active");
    });
});

$(document).ready(function () {
    $('.dropdown-menu a').click(function () {
        $('.dropdown-menu a').removeClass("active");
        $(this).addClass("active");
    });
});

$(function () {
    $(".sidemenu-nav-toggler, #cursor-follower").click(function () {
        $('.sidemenu-nav-toggler').toggleClass('active');
        $('.menu-animate').toggleClass('active');
        $('.hidden-sidebar').toggleClass('open-sidebar');
    });

    $(".desktopmenu-modal-overlay").click(function () {
        $('.sidemenu-nav-toggler.active').removeClass('active');
        $('.menu-animate.active').removeClass('active');
        $('.hidden-sidebar.open-sidebar').removeClass('open-sidebar');
        $('.misconcept-nav.is-visible').removeClass('is-visible');
    });
});

$(document).ready(function () {
    $('ul.menu-list li').click(function () {
        $('ul.menu-list li').removeClass("active");
        $(this).addClass("active");
    });
});

$(document).ready(function () {
    $("ul.navbar-nav li a").on("click", function () {
        $("ul.navbar-nav li").addClass('active');
        $(".navbar-toggler").addClass('collapsed');
        $(".navbar-collapse.collapse.show").removeClass('show');
    });
});

jQuery(function($) {
    $('.image-popup-no-margins.single').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});
	
    $('.popup-gallery').each(function() {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            mainClass: 'mfp-img-mobile mfp-no-margins mfp-with-zoom',
            gallery: {
                enabled: !0,
                navigateByImgClick: !0,
                preload: [0, 1]
            },
            image: {
                verticalFit: !0
            },
            zoom: {
                enabled: !0,
                duration: 300
            }
        })
    })
});

var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
);
wow.init();

$("header .logo-nav-bar .brand").click(function () {
    jQuery('html,body').animate({
        scrollTop: 0
    }, 1500);
})
