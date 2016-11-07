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
		if(ref>=3) {
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
	}
	if(key_shift && key_n && key_down) {
		if(ref<=0) {
			ref=3;
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


