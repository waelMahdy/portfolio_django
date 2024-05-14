$(document).ready(function () {
	//Smooth scrolling when click to nav
	/* 	$('#top-nav > ul > li > a').click(function (e) {
			e.preventDefault();
			var curLink = $(this);
			var scrollPoint = $(curLink.attr('href')).position().top;
			$('body,html').animate({
				scrollTop: scrollPoint
			}, 500);
		}) */

		window.onscroll = function () {
		onScrollHandle()
	};

	function onScrollHandle() {
		//Navbar shrink when scroll down
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                document.getElementById("navbar").style.padding = "8px 10px";

                document.getElementById("navbar").style.opacity = '.5';
           

            } else {
                document.getElementById("navbar").style.padding = "11px 10px";

                document.getElementById("navbar").style.opacity = '.8';
            }
		
		//Get current scroll position
		var currentScrollPos = $(document).scrollTop();

		//Iterate through all node
		$('.collapse> ul > li > a').each(function () {
			
			var curLink = $(this);
			var refElem = $(curLink.attr('data-container'));
			var a=refElem.position().top;
			var b=refElem.position().top;
		
			//Compare the value of current position and the every section position in each scroll
			if (a <= currentScrollPos && b + refElem.height() > currentScrollPos) {
				//Remove class active in all nav
				$('.collapse > ul > li> a').removeClass("active");
				//Add class active
				curLink.parent().addClass("active");
			}
			else {
				curLink.parent().removeClass("active");
			}
		});
	}
});


function preLoader() {
	setTimeout(function () {
		$('.preloader').addClass('complete')
	}, 1000);
}



