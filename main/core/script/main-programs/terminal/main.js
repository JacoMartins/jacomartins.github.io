// Terminal Application - Main Code
var terminalrestoreheight;
var terminalrestorewidth;
var terminalrestoretop;
var terminalrestoreleft;
var terminalwindowopen = false;

function callterminalscripts() {
  var appname = 'terminal';
  createDOMScript(`${appname}-startstop`, 'text/javascript', `../script/main-programs/${appname}/bin/window/startstop.js`);
  createDOMScript(`${appname}-window-functions`, 'text/javascript', `../script/main-programs/${appname}/bin/window/window-functions.js`);
  createDOMScript(`${appname}-core`, 'text/javascript', `../script/main-programs/${appname}/bin/${appname}-core.js`);
}

callterminalscripts();


function openterminalapp(app = document.getElementById('terminal-window'), miniapp = document.getElementById('desktop-taskbar-terminal-app-button'), appcontainer = document.getElementById('terminal-window-container')){
  var terminal = document.getElementById('terminal-window-terminal');
  
  var taskbarminimizedapps = document.getElementById('desktop-taskbar-minimized-apps');
  
  var miniapp = document.createElement('button');
  var miniappclass = document.createAttribute('class');
  var miniappid = document.createAttribute('id');
  var miniapponclick = document.createAttribute('onclick');
  var miniappclassname = miniappclass.value = 'desktop-taskbar-app-button';
  var miniappidname = miniappid.value = 'desktop-taskbar-terminal-app-button';
  var miniapponclickfunction = miniapponclick.value = 'minimizeterminalapp()';
  var terminalprompt = document.getElementById('terminal-window-content-prompt');
  var resizebutton = document.getElementById("terminal-window-resize-button");
  var minimizebutton = document.getElementById("terminal-window-minimize-button");
  
  taskbarminimizedapps.appendChild(miniapp);
  miniapp.miniappclassname;
  miniapp.setAttributeNode(miniappclass);
  miniapp.miniappidname;
  miniapp.setAttributeNode(miniappid);
  miniapp.miniapponclickfunction;
  miniapp.setAttributeNode(miniapponclick);
  
  app.style.display = "block";
  app.style.animation = 'openwindow 0.25s';
  menumain = document.getElementById('desktop-menu-main')
  menusettings = document.getElementById('desktop-menu-settings')

  if(menumain.style.display = "block"){
      menumain.style.display = "none";
      menusettings.style.display = "none";
  }

  app.style.width = '680px';
	app.style.height = '420px';
  app.style.top = '120px';
	app.style.left = '120px';
  app.style.resize = "both";
  app.style.borderRadius = "4px";
  z++;
  app.style.zIndex = z;
  document.getElementById('desktop-taskbar').style.zIndex = z + 999;
  document.getElementById('desktop-menu-main').style.zIndex = z + 998;
  document.getElementById('desktop-menu-settings').style.zIndex = z + 998;
  resizebutton.style.display = 'block';
  minimizebutton.style.left = '51px';

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

  var returncommand = document.createElement('div');
  var returncommandclass = document.createAttribute('class');
  var returncommandclassvalue = returncommandclass.value = 'terminal-window-content-text';
  setTimeout(() => {
    appcontainer.appendChild(returncommand);
    returncommand.returncommandclassvalue;
    returncommand.setAttributeNode(returncommandclass);
    returncommand.innerHTML = "<span style='color: lightgray;'>Welcome to eclipse's terminal, type <span style='color: salmon;'>help</span> to see available commands.</span><br></br>";
  }, 000);

  terminalprompt.innerText = username + '$:';
  terminalprompt.style.color = 'yellow';
  terminal.focus();

  terminalrestoreheight = app.style.height;
  terminalrestorewidth = app.style.width;
  terminalrestoretop = app.style.top;
  terminalrestoreleft = app.style.left;
  terminalwindowopen = true;
  evaul = false;
  sudo = false;
}

function terminalfocusWindow(app = document.getElementById('terminal-window')){
  z++;
  app.style.zIndex = z;
  document.getElementById('desktop-taskbar').style.zIndex = z + 999;
  document.getElementById('desktop-menu-main').style.zIndex = z + 998;
  document.getElementById('desktop-menu-settings').style.zIndex = z + 998;
}

function promptfocus(prompt = document.getElementById("terminal-window-terminal")){
  prompt.focus();
}

function closeterminalapp(app = document.getElementById('terminal-window'), miniapp = document.getElementById('desktop-taskbar-terminal-app-button')){
  var textelements = document.getElementsByClassName('terminal-window-content-text');
  var appcontainer = document.getElementById('terminal-window-container');
  
  app.style.animation = 'closewindow 0.25s';
  app.style.animationDuration = '0.25s';
  setTimeout(() => {
    while(textelements.length > 0) appcontainer.removeChild(textelements[0]);
    app.style.display = "none";
    miniapp.parentNode.removeChild(miniapp);
    terminalwindowopen = false;
  }, 250);
}

function resizeterminalapp(app = document.getElementById("terminal-window")){
  if (app.style.width === '100%') {
		app.style.width = terminalrestorewidth;
		app.style.height = terminalrestoreheight;
    app.style.left = terminalrestoreleft;
    app.style.top = terminalrestoretop;
    app.style.resize = "both";
    app.style.borderRadius = "4px";
    app.style.animation = 'maximizewindow 0.25s';
    app.style.transition = "0.15s";
    setTimeout(function() {
			app.style.transition = "none";
		}, 150)
	} else {
    terminalrestoreheight = app.style.height;
    terminalrestorewidth = app.style.width; 
    terminalrestoretop = app.style.top;
    terminalrestoreleft = app.style.left;
		app.style.width = '100%';
		app.style.height = 'calc(100% - 40px)';
		app.style.top = "40px";
		app.style.left = "0px";
    app.style.resize = "none";
    app.style.borderRadius = "0px";
    app.style.animation = 'maximizewindow 0.25s';
    app.style.transition = "0.15s";
    setTimeout(function() {
			app.style.transition = "none";
		}, 150)
	}
}

function minimizeterminalapp(app = document.getElementById("terminal-window"), miniapp = document.getElementById('desktop-taskbar-terminal-app-button')) {
  if (terminalwindowopen = true) {
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
      terminalfocusWindow()
    }
  }
  else {
    openterminalapp()
  }
}

function sideterminalapp(app = document.getElementById("terminal-window")){
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

function snapminterminalapp(app = document.getElementById("terminal-window")){
  var appwidth = parseInt(terminalrestorewidth, 10);
  var posleft = window.event.clientX - (appwidth * 0.5);
  var posleftcss = posleft + 'px';
  var postop = window.event.clientY + 'px';

  if (app.style.height === 'calc(100% - 40px)') {
		app.style.width = terminalrestorewidth;
		app.style.height = terminalrestoreheight;
    app.style.left = posleftcss;
    app.style.top = '40px';
    app.style.resize = "both";
    app.style.borderRadius = "4px";
	}
}

function snapterminalapp(app = document.getElementById("terminal-window")){
  var clienttop = window.event.clientY;
  var clientleft = window.event.clientX;

  if (clienttop <= 0) {
    if (app.style.width === 'calc(100% - 40px)') {
      app.style.width = terminalrestorewidth;
      app.style.height = terminalrestoreheight;
      app.style.resize = "both";
      app.style.borderRadius = "4px";
      app.style.transition = "0.15s";
      setTimeout(function() {
			  app.style.transition = "none";
		  }, 150)
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
    sideterminalapp()
    // document.getElementById("terminal-window-header-title").innerHTML = 'Detected';
  }

  if(clientleft >= (window.innerWidth - 1)){
    sideterminalapp()
  }
}

function saveterminalrestorepos(app = document.getElementById('terminal-window')){
  terminalrestoreheight = app.style.height;
  terminalrestorewidth = app.style.width; 
  terminalrestoretop = app.style.top;
  terminalrestoreleft = app.style.left;
}

window.addEventListener("load", function(){
dragElement(document.getElementById("terminal-window"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("terminal-window-header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById("terminal-window-header").onmousedown = dragMouseDown;
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
    snapminterminalapp();
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
    snapterminalapp();
  }
}

});