var ypos, div02, intervalOffset, interval1stBackground, iCount = 1, iCountState = 0, introString = "HI  I  AM  NIRABHRA ", textState = 0, proPicStatus = 0, navShowState = 0;


window.onload = function() {
    document.getElementById("div01").style.height = screen.height+ 'px ';
    document.getElementById("div02").style.height = screen.height + 'px ';    
    document.getElementById("div03").style.height = screen.height + 'px';
    document.getElementById("div03").style.top = screen.height*3 + 'px';
    document.getElementById("div02").style.paddingTop = (screen.height*1/3) + 'px';
    document.getElementById("div02").style.background = "url('image06.jpg')";
    document.getElementById("div02").style.backgroundSize = "100% 60%";
    document.getElementById("paraChangePic").style.top = 190 + 'px';
    interval1stBackground = setInterval(writeIntro, 150);
}


function parallax() {
    intervalOffset = setInterval(getOffsetY, 1);
    ypos = window.pageYOffset;
    div02 = document.getElementById("div02");
    div02.style.top  = (ypos*1) + 'px';
    document.getElementById("p01").innerHTML = window.pageYOffset;
    if((document.getElementById("p01").innerHTML >= 0) && (document.getElementById("p01").innerHTML <= screen.height)){
        document.getElementById("div02").style.background = "url('image06.jpg')";
        document.getElementById("div02").style.color = "red";
        document.getElementById("div02").style.textShadow = "-2px -2px 0px rgba(150, 0, 0, 0.69)";
        document.getElementById("div02").style.backgroundSize = "100% 60%";
    }
    if((document.getElementById("p01").innerHTML >= screen.height) && (document.getElementById("p01").innerHTML <= 3*screen.height)){
        document.getElementById("div02").style.background = "url('image04.jpg')";
        document.getElementById("div02").style.color = "darkgoldenrod";
        document.getElementById("div02").style.textShadow = "-2px -2px 0px rgba(255, 255, 25, 0.69)";
        document.getElementById("div02").style.backgroundSize = "100% 65%";
    }
    else if((document.getElementById("p01").innerHTML >= 3*screen.height) && (document.getElementById("p01").innerHTML <= 5*screen.height)){
        document.getElementById("div02").style.background = "url('image05.jpg')";
        document.getElementById("div02").style.color = "green";
        document.getElementById("div02").style.textShadow = "-2px -2px 0px rgba(0, 150, 25, 0.69)";
        document.getElementById("div02").style.backgroundSize = "100% 125%";
    }
}


function writeIntro() {
            var i = 0, text = "|  ";
            if(iCountState == 0) {
                for(i = 0; i < iCount; i++) {
                    text = text + introString[i];
                }
                iCount++;
                if(iCount > introString.length) {
                    iCountState = 1;
                }
            }
            else if(iCountState == 1) {
                for(i = iCount - 1; i > 0; i--) {
                    text = text + introString[iCount - i - 1];
                }
                iCount--;
                if(iCount < 0)
                    iCountState = 2;
            }
            else if(iCountState == 2) {
                if(textState == 0) {
                    introString = "I  AM  IN  CHEMICAL  ENGINEERING ";
                    textState = 1;
                }
                else if(textState == 1) {
                    introString = "NIT  TRICHY  IS  WHERE  I  BELONG "
                    textState = 2;
                }
                else if(textState == 2) {
                    introString = "I  AM  A  NARUTO  FAN "
                    textState = 3;
                }
                else if(textState == 3) {
                    introString = "I  LIKE  PLAYING  BADMINTON "
                    textState = 4;
                }
                else if(textState == 4) {
                    introString = "I  LOVE  CODING "
                    textState = 5;
                }
                else {
                    introString = "HI  I  AM  NIRABHRA ";
                    textState = 0;
                }
                iCountState = 0;
            }
            text = text + " |";
            document.getElementById("div02").innerHTML = text;
        }


window.addEventListener('scroll', parallax);


function getOffsetY() {
    var yPos1 = window.pageYOffset;
    if(yPos1 > 2900)
        window.removeEventListener('scroll', parallax);
    else
        window.addEventListener('scroll', parallax);
}


function changeProfilePic() {
    if(proPicStatus == 0) {
        document.getElementById("profilePic").className = "coverPic";
        proPicStatus = 1;
    }
    else {
        document.getElementById("profilePic").className = "proPic";
        proPicStatus = 0;
    }
}


function showNavigationMenu() {
  if(navShowState == 0) {
    navShowState = 1;
    document.getElementById("navigation").className = "navShow";
    //document.getElementById("divMenu").className = "navShow";
    document.getElementById("showNavigation").innerHTML = ":-: Close";
  }
  else {
    navShowState = 0;
    document.getElementById("navigation").className = "navHide";
    //document.getElementById("divMenu").className = "navHide";
    document.getElementById("showNavigation").innerHTML = ":-: Open";
  }
}
