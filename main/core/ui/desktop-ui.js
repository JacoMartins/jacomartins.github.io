function menutrigger(menumain = document.getElementById('desktop-menu-main'), menusettings = document.getElementById('desktop-menu-settings')){
    if(menumain.style.display === "none"){
        menumain.style.display = "block";
        menusettings.style.display = "none";
    } else {
        menumain.style.display = "none";
    }
}

function settingstrigger(menusettings = document.getElementById('desktop-menu-settings'), menumain = document.getElementById('desktop-menu-main')){
  if(menusettings.style.display === "none"){
      menusettings.style.display = "block";
      menumain.style.display = "none";
  } else {
      menusettings.style.display = "none";
  }
}

// Settings

function opensettingsapp(app = document.getElementById('settings-window')){
    app.style.display = "block";
    menumain = document.getElementById('desktop-menu-main')
    menusettings = document.getElementById('desktop-menu-settings')

    if(menumain.style.display = "block"){
        menumain.style.display = "none";
        menusettings.style.display = "none";
    }
}

function closesettingsapp(app = document.getElementById('settings-window')){
    app.style.display = "none";
}

function igorcareca(desktop = document.getElementById("owner-user")){
    desktop.style.backgroundImage = "url('../../res/images/background/igor careca.png')";
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
    }
  
    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
  
  });

// Demo APP

  let taskbarpos = ['document.getElementById("desktop-taskbar").style.top', 'document.getElementById("desktop-taskbar").style.bottom'];
  var restoreheight;
  var restorewidth;
  var restoretop;
  var restoreleft;

function opendemoapp(app = document.getElementById('demo-window')){
  app.style.display = "block";
  menumain = document.getElementById('desktop-menu-main')
  menusettings = document.getElementById('desktop-menu-settings')

  if(menumain.style.display = "block"){
      menumain.style.display = "none";
      menusettings.style.display = "none";
  }

  app.style.width = '232px';
	app.style.height = '336px';
  app.style.top = '120px';
	app.style.left = '120px';
  app.style.resize = "both";
  app.style.borderRadius = "4px";

  restoreheight = app.style.height;
  restorewidth = app.style.width;
  restoretop = app.style.top;
  restoreleft = app.style.left;
}

function resizedemoapp(app = document.getElementById("demo-window")){
  if (app.style.width === '100%') {
		app.style.width = restorewidth;
		app.style.height = restoreheight;
    app.style.left = restoreleft;
    app.style.top = restoretop;
    app.style.resize = "both";
    app.style.borderRadius = "4px";
	} else {
    restoreheight = app.style.height;
    restorewidth = app.style.width; 
    restoretop = app.style.top;
    restoreleft = app.style.left;
		app.style.width = '100%';
		app.style.height = 'calc(100% - 40px)';
		app.style.top = "40px";
		app.style.left = "0px";
    app.style.resize = "none";
    app.style.borderRadius = "0px";
	}
}

function sidedemoapp(app = document.getElementById("demo-window")){
  var appleft = parseInt(app.style.left, 10);
  var appwidth = parseInt(app.style.width, 10);
  
  if (appleft < 0) {
    app.style.left = '0px';
    app.style.top = '40px';
    app.style.height = 'calc(100% - 40px)';
    app.style.width = '50%';
    app.style.resize = "none";
    app.style.borderRadius = "0px";
  }

  if (appleft > (window.innerWidth - appwidth)) {
    app.style.left = '50%';
    app.style.top = '40px';
    app.style.height = 'calc(100% - 40px)';
    app.style.width = '50%';
    app.style.resize = "none";
    app.style.borderRadius = "0px";
  }
}

function snapmindemoapp(app = document.getElementById("demo-window")){
  var appwidth = parseInt(restorewidth, 10);
  var posleft = window.event.clientX - (appwidth * 0.5);
  var posleftcss = posleft + 'px';
  var postop = window.event.clientY + 'px';

  if (app.style.height === 'calc(100% - 40px)') {
		app.style.width = restorewidth;
		app.style.height = restoreheight;
    app.style.left = posleftcss;
    app.style.top = '40px';
    app.style.resize = "both";
    app.style.borderRadius = "4px";
	}
}

function snapdemoapp(app = document.getElementById("demo-window")){
  var apptop = parseInt(app.style.top, 10);
  var appleft = parseInt(app.style.left, 10);
  var appwidth = parseInt(app.style.width, 10);

  if (apptop < 0) {
    if (app.style.width === 'calc(100% - 40px)') {
      app.style.width = restorewidth;
      app.style.height = restoreheight;
      app.style.resize = "both";
      app.style.borderRadius = "4px";
    } else {
      app.style.width = '100%';
      app.style.height = 'calc(100% - 40px)';
      app.style.top = "40px";
      app.style.left = "0px";
      app.style.resize = "none";
      app.style.borderRadius = "0px";
    }
  }

  if (appleft < 0) {
    sidedemoapp()
    // document.getElementById("demo-window-header-title").innerHTML = 'Detected';
  }

  if(appleft > (window.innerWidth - appwidth)){
    sidedemoapp()
  }
}

function closedemoapp(app = document.getElementById('demo-window')){
  app.style.display = "none";
}

function saverestorepos(app = document.getElementById('demo-window')){
  restoreheight = app.style.height;
  restorewidth = app.style.width; 
  restoretop = app.style.top;
  restoreleft = app.style.left;
}

window.addEventListener("load", function(){
dragElement(document.getElementById("demo-window"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("demo-window-header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById("demo-window-header").onmousedown = dragMouseDown;
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
    snapmindemoapp();
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
    snapdemoapp();
  }
}

});

