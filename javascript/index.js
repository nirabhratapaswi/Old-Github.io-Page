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
	key_n = false;

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
});

document.addEventListener("keydown", function(event) {
	if(event.which == 16) {
 		key_shift = true;
	}
	if(event.which == 79) {
		key_o = true;
	}
	if(event.which == 79) {
		key_n = true;
	}
	if(key_shift && key_n && key_o) {
		$("#menu-toggle").click();
	}
});