var toggle = true;
	    $("#menu-toggle").click(function(e) {
	        e.preventDefault();
	        $("#bodyWrapper").toggleClass("toggled");
	        if(toggle) {
		        $("#menu-toggle>span").removeClass("glyphicon glyphicon-menu-hamburger");
		        $("#menu-toggle>span").addClass("glyphicon glyphicon-remove");
		        toggle = !toggle;
		    }
		    else {
		    	$("#menu-toggle>span").removeClass("glyphicon glyphicon-remove");
		        $("#menu-toggle>span").addClass("glyphicon glyphicon-menu-hamburger");
		        toggle = !toggle;
		    }
	    });
var key_shift = false,
	key_o = false,
	key_n = false,
	key_up = false,
	key_down = false;

var ref = 0;

document.addEventListener("keyup", function(event) {
	if(event.which == 16) {
		key_shift = false;
	}
	if(event.which == 79) {
		key_o = false;
	}
	if(event.which == 78) {
		key_n = false;
	}
	if(event.which == 38) {
		key_up = false;
	}
	if(event.which == 40) {
		key_down = false;
	}
});

document.addEventListener("keydown", function(event) {
	if(event.which == 16) {
 		key_shift = true;
	}
	if(event.which == 79) {
		key_o = true;
	}
	if(event.which == 78) {
		key_n = true;
	}
	if(event.which == 38) {
		key_up = true;
	}
	if(event.which == 40) {
		key_down = true;
	}
	if(key_shift && key_n && key_o) {
		$("#menu-toggle").click();
	}
	if(key_shift && key_n && key_up) {
		if(ref>=4) {
			ref=0;
		}
		else {
			ref++;
		}
		if(ref==0) {
			$( "#nav-ul li:nth-child(1) a" ).click();
		}
		else if(ref==1) {
			$( "#nav-ul li:nth-child(2) a" ).click();
		}
		else if(ref==2) {
			$( "#nav-ul li:nth-child(3) a" ).click();
		}
		else if(ref==3) {
			$( "#nav-ul li:nth-child(4) a" ).click();
		}
		else if(ref==4) {
			$( "#nav-ul li:nth-child(5) a" ).click();
		}
	}
	if(key_shift && key_n && key_down) {
		if(ref<=0) {
			ref=4;
		}
		else {
			ref--;
		}
		if(ref==0) {
			$( "#nav-ul li:nth-child(1) a" ).click();
		}
		else if(ref==1) {
			$( "#nav-ul li:nth-child(2) a" ).click();
		}
		else if(ref==2) {
			$( "#nav-ul li:nth-child(3) a" ).click();
		}
		else if(ref==3) {
			$( "#nav-ul li:nth-child(4) a" ).click();
		}
		else if(ref==4) {
			$( "#nav-ul li:nth-child(5) a" ).click();
		}
	}
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInCubic');//'easeInOutExpo');
        event.preventDefault();
    });
});

var div1 = document.getElementById('id01');
var div2 = document.getElementById('id02');
var div3 = document.getElementById('id03');
var div4 = document.getElementById('id04');
setInterval(function() {
	var top  = window.pageYOffset || document.documentElement.scrollTop;
	var top1 = div1.offsetTop;
	var top2 = div2.offsetTop;
	var top3 = div3.offsetTop;
	var top4 = div4.offsetTop;
	if( (top4-200) < top) {
		$( "#nav-ul li:nth-child(2) a span" ).removeClass("active");
		$( "#nav-ul li:nth-child(3) a span" ).removeClass("active");
		$( "#nav-ul li:nth-child(4) a span" ).removeClass("active");
		$( "#nav-ul li:nth-child(5) a span" ).addClass("active");
	}
	else if( (top3-50) < top) {
		$( "#nav-ul li:nth-child(2) a span" ).removeClass("active");
		$( "#nav-ul li:nth-child(3) a span" ).removeClass("active");
		$( "#nav-ul li:nth-child(4) a span" ).addClass("active");
		$( "#nav-ul li:nth-child(5) a span" ).removeClass("active");
	}
	else if( (top2-50) < top) {
		$( "#nav-ul li:nth-child(2) a span" ).removeClass("active");
		$( "#nav-ul li:nth-child(3) a span" ).addClass("active");
		$( "#nav-ul li:nth-child(4) a span" ).removeClass("active");
		$( "#nav-ul li:nth-child(5) a span" ).removeClass("active");
	}
	else if( (top1-50) < top) {
		$( "#nav-ul li:nth-child(2) a span" ).addClass("active");
		$( "#nav-ul li:nth-child(3) a span" ).removeClass("active");
		$( "#nav-ul li:nth-child(4) a span" ).removeClass("active");
		$( "#nav-ul li:nth-child(5) a span" ).removeClass("active");
	}
}, 500);
