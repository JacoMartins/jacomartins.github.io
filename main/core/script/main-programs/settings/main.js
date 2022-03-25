// Settings Program - Main Code

var settingsrestoreheight;
var settingsrestorewidth;
var settingsrestoretop;
var settingsrestoreleft;
var settingswindowopen = false;

function opensettingsapp(app = document.getElementById('settings-window')){
  settingswindowopen = true;
  var taskbarminimizedapps = document.getElementById('desktop-taskbar-minimized-apps');
  
  var miniapp = document.createElement('button');
  var miniappclass = document.createAttribute('class');
  var miniappid = document.createAttribute('id');
  var miniapponclick = document.createAttribute('onclick');
  var miniappclassname = miniappclass.value = 'desktop-taskbar-app-button';
  var miniappidname = miniappid.value = 'desktop-taskbar-settings-app-button';
  var miniapponclickfunction = miniapponclick.value = 'minimizesettingsapp()';
  var resizebutton = document.getElementById("settings-window-resize-button");
  var minimizebutton = document.getElementById("settings-window-minimize-button");
  var backbutton = document.getElementById("settings-window-content-input-button-back");
  var sidebar = document.getElementById("settings-window-sidebar");
  var content = document.getElementById("settings-window-content");
  
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

  app.style.width = '778px';
	app.style.height = '294px';
  app.style.top = 'calc(50% - ' + (parseInt(app.style.height, 10) / 2) + 'px)';
	app.style.left = 'calc(50% - ' + (parseInt(app.style.width, 10) / 2) + 'px)';
  app.style.resize = "both";
  app.style.borderRadius = "4px";
  sidebar.style.display = 'block';
  sidebar.style.width = '232px';
  content.style.display = 'block';
  resizebutton.style.display = 'none';
  backbutton.style.display = 'none';
  minimizebutton.style.left = '31px';
  settingsappcategory('users');

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
    sidebar.style.display = 'block';
    backbutton.style.display = 'block';
    sidebar.style.width = 'calc(100% + 6px)';
    content.style.display = 'none';

    
    resizebutton.style.display = 'none';
    minimizebutton.style.left = '31px';
    setTimeout(function() {
			  app.style.transition = "none";
		}, 150)
  }
  settingsrestoreheight = app.style.height;
  settingsrestorewidth = app.style.width;
  settingsrestoretop = app.style.top;
  settingsrestoreleft = app.style.left;
}

function settingsfocusWindow(app = document.getElementById('settings-window')){
  z++;
  app.style.zIndex = z;
  document.getElementById('desktop-taskbar').style.zIndex = z + 999;
  document.getElementById('desktop-menu-main').style.zIndex = z + 998;
  document.getElementById('desktop-menu-settings').style.zIndex = z + 998;
}

function closesettingsapp(app = document.getElementById('settings-window'), miniapp = document.getElementById('desktop-taskbar-settings-app-button')){
  var taskbarminimizedapps = document.getElementById('desktop-taskbar-minimized-apps');
  
  app.style.animation = 'closewindow 0.25s';
  app.style.animationDuration = '0.25s';
  setTimeout(() => {
    app.style.display = "none";
    miniapp.parentNode.removeChild(miniapp);
    settingswindowopen = false;
  }, 250);
}

function resizesettingsapp(app = document.getElementById("settings-window")){
  if (app.style.width === '100%') {
		app.style.width = settingsrestorewidth;
		app.style.height = settingsrestoreheight;
    app.style.left = settingsrestoreleft;
    app.style.top = settingsrestoretop;
    app.style.resize = "both";
    app.style.borderRadius = "4px";
    app.style.animation = 'maximizewindow 0.25s';
    app.style.transition = "0.15s";
    setTimeout(function() {
			  app.style.transition = "none";
		}, 150)
	} else {
    settingsrestoreheight = app.style.height;
    settingsrestorewidth = app.style.width; 
    settingsrestoretop = app.style.top;
    settingsrestoreleft = app.style.left;
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

function minimizesettingsapp(app = document.getElementById("settings-window"), miniapp = document.getElementById('desktop-taskbar-settings-app-button')) {
  if (settingswindowopen = true) {
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
      settingsfocusWindow()
    }
  }
  else {
    opensettingsapp()
  }
}

function sidesettingsapp(app = document.getElementById("settings-window")){
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

function snapminsettingsapp(app = document.getElementById("settings-window")){
  var appwidth = parseInt(settingsrestorewidth, 10);
  var posleft = window.event.clientX - (appwidth * 0.5);
  var posleftcss = posleft + 'px';
  var postop = window.event.clientY + 'px';

  if (app.style.height === 'calc(100% - 40px)') {
		app.style.width = settingsrestorewidth;
		app.style.height = settingsrestoreheight;
    app.style.left = posleftcss;
    app.style.top = '40px';
    app.style.resize = "both";
    app.style.borderRadius = "4px";
	}
}

function snapsettingsapp(app = document.getElementById("settings-window")){
  var clienttop = window.event.clientY;
  var clientleft = window.event.clientX;

  if (clienttop <= 0) {
    if (app.style.width === 'calc(100% - 40px)') {
      app.style.width = settingsrestorewidth;
      app.style.height = settingsrestoreheight;
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
    sidesettingsapp()
    // document.getElementById("settings-window-header-title").innerHTML = 'Detected';
  }

  if(clientleft >= (window.innerWidth - 1)){
    sidesettingsapp()
  }
}

function savesettingsrestorepos(app = document.getElementById('settings-window')){
  settingsrestoreheight = app.style.height;
  settingsrestorewidth = app.style.width; 
  settingsrestoretop = app.style.top;
  settingsrestoreleft = app.style.left;
}

window.addEventListener("load", function(){
dragElement(document.getElementById("settings-window"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("settings-window-header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById("settings-window-header").onmousedown = dragMouseDown;
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
    snapminsettingsapp();
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
    snapsettingsapp();
  }
}

});