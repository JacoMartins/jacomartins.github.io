// Welcome Program - Main Code

var betarestoreheight;
var betarestorewidth;
var betarestoretop;
var betarestoreleft;
let betawindowopen = false;

function openbetaapp(app = document.getElementById('beta-window')){
  betawindowopen = true;
  var taskbarminimizedapps = document.getElementById('desktop-taskbar-minimized-apps');
  
  var miniapp = document.createElement('button');
  var miniappclass = document.createAttribute('class');
  var miniappid = document.createAttribute('id');
  var miniapponclick = document.createAttribute('onclick');
  var miniappclassname = miniappclass.value = 'desktop-taskbar-app-button';
  var miniappidname = miniappid.value = 'desktop-taskbar-beta-app-button';
  var miniapponclickfunction = miniapponclick.value = 'minimizebetaapp()';
  var resizebutton = document.getElementById("beta-window-resize-button");
  var minimizebutton = document.getElementById("beta-window-minimize-button");

  var betaparagraph1 = document.getElementById('beta-window-content-p');
  var betasubmitbutton = document.getElementById('beta-window-content-input-button1');
  
  taskbarminimizedapps.appendChild(miniapp);
  miniapp.miniappclassname;
  miniapp.setAttributeNode(miniappclass);
  miniapp.miniappidname;
  miniapp.setAttributeNode(miniappid);
  miniapp.miniapponclickfunction;
  miniapp.setAttributeNode(miniapponclick);
  
  app.style.display = "block";
  app.style.animation = 'openwindow 0.25s';
  z++;
  app.style.zIndex = z;
  document.getElementById('desktop-taskbar').style.zIndex = z + 999;
  document.getElementById('desktop-menu-main').style.zIndex = z + 998;
  document.getElementById('desktop-menu-settings').style.zIndex = z + 998;
  miniapp.style.display = "inline-block";
  menumain = document.getElementById('desktop-menu-main')
  menusettings = document.getElementById('desktop-menu-settings')

  if(menumain.style.display = "block"){
      menumain.style.display = "none";
      menusettings.style.display = "none";
  }

  app.style.width = '500px';
	app.style.height = '320px';
  app.style.top = 'calc(50% - ' + (parseInt(app.style.height, 10) * 0.5) + 'px)';
	app.style.left = 'calc(50% - ' + (parseInt(app.style.width, 10) * 0.5) + 'px)';
  app.style.resize = "none";
  app.style.borderRadius = "4px";
  document.getElementById('beta-window-header').removeChild(document.getElementById('beta-window-resize-button'));

  document.getElementById('beta-window-minimize-button').style.left = '31px';
  betaparagraph1.style.top ='25px';
  betaparagraph1.style.left ='25px';
  betaparagraph1.style.height = 'calc(100% - 80px)';
  betaparagraph1.style.width = 'calc(100% - 50px)';

  betaparagraph1.innerHTML = `<span style="color: lightgreen;">Welcome back to the ECOS project! In this build (${build}) we improoved the source code and put right button click to work. We are getting there!</span><br></br><br>• Corrections: </br><br>- Fixed the msg command creation of elements and events.</br><br>- [+] Added context menu.</br>`;

  betasubmitbutton.style.bottom = '20px';
  betasubmitbutton.style.right = '20px';
  betasubmitbutton.value = 'OK';
  
  setTimeout(() => {
    betasubmitbutton.focus();
  }, 350);

  if (window.innerHeight > window.innerWidth){
    restoreheight = app.style.height;
    restorewidth = app.style.width; 
    restoretop = app.style.top;
    restoreleft = app.style.left;
		app.style.width = '100%';
		app.style.height = 'calc(100% - 50px)';
		app.style.top = "0px";
		app.style.left = "0px";
    app.style.resize = "none";
    app.style.borderRadius = "0px";
    app.style.transition = "0.15s";
    resizebutton.style.display = 'none';
    minimizebutton.style.left = '31px';
    setTimeout(function() {
			  app.style.transition = "none";
		}, 150)
  }

  betarestoreheight = app.style.height;
  betarestorewidth = app.style.width;
  betarestoretop = app.style.top;
  betarestoreleft = app.style.left;
}

function betaappfocus(app = document.getElementById('beta-window')){
  z++;
  app.style.zIndex = z;
  document.getElementById('desktop-taskbar').style.zIndex = z + 999;
  document.getElementById('desktop-menu-main').style.zIndex = z + 998;
  document.getElementById('desktop-menu-settings').style.zIndex = z + 998;
}

function closebetaapp(app = document.getElementById('beta-window'), miniapp = document.getElementById('desktop-taskbar-beta-app-button')){
  var taskbarminimizedapps = document.getElementById('desktop-taskbar-minimized-apps');
  
  app.style.animation = 'closewindow 0.25s';
  app.style.animationDuration = '0.25s';
  setTimeout(() => {
    app.style.display = "none";
    miniapp.parentNode.removeChild(miniapp);
    betawindowopen = false;
  }, 250);
}

function resizebetaapp(app = document.getElementById("beta-window")){
  if (app.style.width === '100%') {
		app.style.width = betarestorewidth;
		app.style.height = betarestoreheight;
    app.style.left = betarestoreleft;
    app.style.top = betarestoretop;
    app.style.resize = "both";
    app.style.borderRadius = "4px";
    app.style.animation = 'maximizewindow 0.25s';
    app.style.transition = "0.15s";
    setTimeout(function() {
			  app.style.transition = "none";
		}, 150)
	} else {
    betarestoreheight = app.style.height;
    betarestorewidth = app.style.width; 
    betarestoretop = app.style.top;
    betarestoreleft = app.style.left;
		app.style.width = '100%';
		app.style.height = 'calc(100% - 40px)';
		app.style.top = "40px";
		app.style.left = "0px";
    app.style.resize = "none";
    app.style.borderRadius = "0px";
    app.style.transition = "0.15s";
    setTimeout(function() {
			  app.style.transition = "none";
		}, 150)
	}
}

function minimizebetaapp(app = document.getElementById("beta-window"), miniapp = document.getElementById('desktop-taskbar-beta-app-button')) {
  if (betawindowopen = true) {
    if(app.style.display === 'block'){
      app.style.animation = 'minimizewindow 0.25s';
      app.style.animationDuration = '0.25s';
      setTimeout(() => {
        app.style.display = 'none';
      }, 250);
    }
    else {
      app.style.display = 'block';
      app.style.animation = 'callwindow 0.25s';
      betaappfocus()
    }
  }
  else {
    openbetaapp()
  }
}

function sidebetaapp(app = document.getElementById("beta-window")){
  var appleft = parseInt(app.style.left, 10);
  var appwidth = parseInt(app.style.width, 10);
  
  if (appleft < 0) {
    app.style.left = '0px';
    app.style.top = '40px';
    app.style.height = 'calc(100% - 40px)';
    app.style.width = '50%';
    app.style.resize = "none";
    app.style.borderRadius = "0px";
    app.style.transition = "0.15s";
    setTimeout(function() {
			  app.style.transition = "none";
		}, 150)
  }

  if (appleft > (window.innerWidth - appwidth)) {
    app.style.left = '50%';
    app.style.top = '40px';
    app.style.height = 'calc(100% - 40px)';
    app.style.width = '50%';
    app.style.resize = "none";
    app.style.borderRadius = "0px";
    app.style.transition = "0.15s";
    setTimeout(function() {
			  app.style.transition = "none";
		}, 150)
  }
}

function snapminbetaapp(app = document.getElementById("beta-window")){
  var appwidth = parseInt(betarestorewidth, 10);
  var posleft = window.event.clientX - (appwidth * 0.5);
  var posleftcss = posleft + 'px';
  var postop = window.event.clientY + 'px';

  if (app.style.height === 'calc(100% - 40px)') {
		app.style.width = betarestorewidth;
		app.style.height = betarestoreheight;
    app.style.left = posleftcss;
    app.style.top = '40px';
    app.style.resize = "both";
    app.style.borderRadius = "4px";
	}
}

function snapbetaapp(app = document.getElementById("beta-window")){
  var clienttop = window.event.clientY;
  var clientleft = window.event.clientX;

  if (clienttop <= 0) {
    if (app.style.width === 'calc(100% - 40px)') {
      app.style.width = betarestorewidth;
      app.style.height = betarestoreheight;
      app.style.resize = "both";
      app.style.borderRadius = "4px";
    } else {
      app.style.width = '100%';
      app.style.height = 'calc(100% - 40px)';
      app.style.top = "40px";
      app.style.left = "0px";
      app.style.resize = "none";
      app.style.borderRadius = "0px";
      app.style.transition = "0.15s";
      setTimeout(function() {
			  app.style.transition = "none";
		}, 150)
    }
  }

  if (clientleft <= 0) {
    sidebetaapp()
    // document.getElementById("beta-window-header-title").innerHTML = 'Detected';
  }

  if(clientleft >= (window.innerWidth - 1)){
    sidebetaapp()
  }
}

function savebetarestorepos(app = document.getElementById('beta-window')){
  betarestoreheight = app.style.height;
  betarestorewidth = app.style.width; 
  betarestoretop = app.style.top;
  betarestoreleft = app.style.left;
}

window.addEventListener("load", function(){
dragElement(document.getElementById("beta-window"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("beta-window-header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById("beta-window-header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    snapminbetaapp();
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
    snapbetaapp();
  }
}

});
