var loaded = false;

window.onload = function() {
	console.log("loaded");
}

$(document).ready(function() {
  // Animate loader off screen
  setTimeout(function() {
  	$(".pagePreloader").fadeOut("slow");
  }, 1500);
  setInterval(tipsDiv, 2000);
});

function tipsDiv() {
	var tips = ["shift + n + h","shift + n + o","shift + n + up","shift + n + down","shift + n + left","shift + n + right"];
	var tip = document.getElementById("tips").innerText;
	for(var x=0; x<tips.length; x++) {
		if(tips[x]==tip) {
			if(x<tips.length-1) {
				tip=tips[x+1];
				break;
			}
			else if(x==tips.length-1) {
				tip=tips[0];
				break;
			}
		}
	}
	document.getElementById("tips").innerText = tip;
	//console.log(tip);
}

var arrow = 2;

function scrollArrow() {
	if(arrow>8) {
		arrow = 2;
	}
	var show = "#scrollTell i:nth-child(" + arrow + ")";
	$(show).removeClass("hideArrow");
	for(var i=2; i<9; i+=2) {
		var select = "#scrollTell i:nth-child(" + i + ")";
		if(i!=arrow) {
			$(select).addClass("hideArrow");
		}
	}
	arrow+=2;
}

setInterval(scrollArrow, 400);

var toggle_menu = true;
var toggle_info = true;
$("#menu-toggle").click(function(e) {
	e.preventDefault();
	$("#bodyWrapper").toggleClass("toggled");
	if(toggle_menu) {
		$("#menu-toggle>span").removeClass("glyphicon glyphicon-menu-hamburger");
		$("#menu-toggle>span").removeClass("hover-active-green");
		$("#menu-toggle>span").addClass("glyphicon glyphicon-remove");
		$("#menu-toggle>span").addClass("hover-active-red");
		toggle_menu = !toggle_menu;
	}
	else {
		$("#menu-toggle>span").removeClass("glyphicon glyphicon-remove");
		$("#menu-toggle>span").removeClass("hover-active-red");
		$("#menu-toggle>span").addClass("glyphicon glyphicon-menu-hamburger");
		$("#menu-toggle>span").addClass("hover-active-green");
		toggle_menu = !toggle_menu;
	}
});

$("#info-toggle").click(function(e) {
	e.preventDefault();
	$("#info-div").toggleClass("toggled");
	if(toggle_info) {
		$("#info-toggle>span").removeClass("hover-active-green");
		$("#info-toggle>span").addClass("hover-active-red");
		toggle_info = !toggle_info;
	}
	else {
		$("#info-toggle>span").removeClass("hover-active-red");
		$("#info-toggle>span").addClass("hover-active-green");
		toggle_info = !toggle_info;
	}
});

var key_shift = false,
	key_o = false,
	key_n = false,
	key_up = false,
	key_down = false,
	key_left = false,
	key_right = false,
	key_h = false;

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
	if(event.which == 72) {
		key_h = false;
	}
	if(event.which == 39) {
		key_right = false;
	}
	if(event.which == 37) {
		key_left = false;
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
	if(event.which == 72) {
		key_h = true;
	}
	if(event.which == 39) {
		key_right = true;
	}
	if(event.which == 37) {
		key_left = true;
	}
	if(key_shift && key_n && key_o) {
		$("#menu-toggle").click();
	}
	if(key_shift && key_n && key_h) {
		$("#info-toggle").click();
	}
	if(key_shift && key_n && key_left) {
		$("#carouselPrev").click();
	}
	if(key_shift && key_n && key_right) {
		$("#carouselNext").click();
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
	var top  = window.pageYOffset || document.documentElement.scrollTop || 0;
	var top1 = div1.offsetTop || screen.height;
	var top2 = div2.offsetTop || screen.height * 2;
	var top3 = div3.offsetTop || screen.height * 3;
	var top4 = div4.offsetTop || screen.height * 4;
	if( (top3) < (top + (3 * screen.height/4)) ) {
		$( "#id03" ).slideDown(1000);
	}
	if( (top2) < (top + (3 * screen.height/4)) ) {
		$( "#id02" ).slideDown(1000);
	}
	if( (top1) < (top + (3 * screen.height/4)) ) {
		$( "#id01" ).slideDown(1000);
	}

	if( (top4) < (top + (2 * screen.height/3)) ) {
		$( "#nav-ul li:nth-child(2) a span" ).removeClass("active");
		$( "#nav-ul li:nth-child(3) a span" ).removeClass("active");
		$( "#nav-ul li:nth-child(4) a span" ).removeClass("active");
		$( "#nav-ul li:nth-child(5) a span" ).addClass("active");
		$( "#nav-ul li:nth-child(2)" ).removeClass("active-border");
		$( "#nav-ul li:nth-child(3)" ).removeClass("active-border");
		$( "#nav-ul li:nth-child(4)" ).removeClass("active-border");
		$( "#nav-ul li:nth-child(5)" ).addClass("active-border");
	}
	else if( (top3) < (top + (screen.height/2)) ) {
		$( "#nav-ul li:nth-child(2) a span" ).removeClass("active");
		$( "#nav-ul li:nth-child(3) a span" ).removeClass("active");
		$( "#nav-ul li:nth-child(4) a span" ).addClass("active");
		$( "#nav-ul li:nth-child(5) a span" ).removeClass("active");
		$( "#nav-ul li:nth-child(2)" ).removeClass("active-border");
		$( "#nav-ul li:nth-child(3)" ).removeClass("active-border");
		$( "#nav-ul li:nth-child(4)" ).addClass("active-border");
		$( "#nav-ul li:nth-child(5)" ).removeClass("active-border");
	}
	else if( (top2) < (top + (screen.height/2)) ) {
		$( "#nav-ul li:nth-child(2) a span" ).removeClass("active");
		$( "#nav-ul li:nth-child(3) a span" ).addClass("active");
		$( "#nav-ul li:nth-child(4) a span" ).removeClass("active");
		$( "#nav-ul li:nth-child(5) a span" ).removeClass("active");
		$( "#nav-ul li:nth-child(2)" ).removeClass("active-border");
		$( "#nav-ul li:nth-child(3)" ).addClass("active-border");
		$( "#nav-ul li:nth-child(4)" ).removeClass("active-border");
		$( "#nav-ul li:nth-child(5)" ).removeClass("active-border");
	}
	else if( (top1) < (top + (screen.height/2)) ) {
		$( "#nav-ul li:nth-child(2) a span" ).addClass("active");
		$( "#nav-ul li:nth-child(3) a span" ).removeClass("active");
		$( "#nav-ul li:nth-child(4) a span" ).removeClass("active");
		$( "#nav-ul li:nth-child(5) a span" ).removeClass("active");
		$( "#nav-ul li:nth-child(2)" ).addClass("active-border");
		$( "#nav-ul li:nth-child(3)" ).removeClass("active-border");
		$( "#nav-ul li:nth-child(4)" ).removeClass("active-border");
		$( "#nav-ul li:nth-child(5)" ).removeClass("active-border");
	}
	else {
		$( "#nav-ul li:nth-child(2) a span" ).removeClass("active");
		$( "#nav-ul li:nth-child(3) a span" ).removeClass("active");
		$( "#nav-ul li:nth-child(4) a span" ).removeClass("active");
		$( "#nav-ul li:nth-child(5) a span" ).removeClass("active");
		$( "#nav-ul li:nth-child(2)" ).removeClass("active-border");
		$( "#nav-ul li:nth-child(3)" ).removeClass("active-border");
		$( "#nav-ul li:nth-child(4)" ).removeClass("active-border");
		$( "#nav-ul li:nth-child(5)" ).removeClass("active-border");
	}
}, 100);

var image1 = document.getElementById("googleP");
image1.onclick = function() {
	window.open('https://plus.google.com/u/0/112662500406439860442','_blank');
}

var image2 = document.getElementById("facebook");
image2.onclick = function() {
	window.open('https://www.facebook.com/nirabhratapaswi97','_blank');
}

var image3 = document.getElementById("twitter");
image3.onclick = function() {
	window.open('https://twitter.com/nirabhratapaswi','_blank');
}

var image4 = document.getElementById("github");
image4.onclick = function() {
	window.open('https://github.com/nirabhratapaswi','_blank');
}

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
