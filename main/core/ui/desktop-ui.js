// Main
let build = 22;
let isbeta = true;
let betastage = 1;
let version = '1.0.0';
let systemname = 'Eclipse Cloud Operating System (ECOS)';
let versionname = 'Beta';
let username = 'adm';
let userpw = 'pix';
var date = new Date();



setInterval(function time() {
  var date = new Date();
  var DateMonths = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
  var DateDays = 0;
  var DateHours = 0;
  var DateMinutes = 0;
  var DateSeconds = 0;
  if (date.getDate() < 10) {DateDays = '0' + date.getDate();} else {DateDays = date.getDate();}
  if (date.getHours() < 10) {DateHours = '0' + date.getHours();} else {DateHours = date.getHours();}
  if (date.getMinutes() < 10) {DateMinutes = '0' + date.getMinutes();} else {DateMinutes = date.getMinutes();}
  if (date.getSeconds() < 10) {DateSeconds = '0' + date.getSeconds();} else {DateSeconds = date.getSeconds();}

  document.getElementById('desktop-taskbar-clock').innerHTML = '<span style="opacity: 0.6; margin-right: 4px;">' + DateHours + ':' + DateMinutes + '</span>' + '  ' + DateMonths[date.getMonth()] + ', ' + DateDays + ', ' + date.getFullYear();
}, 1000);

let today = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();

setTimeout(() => {
  var date = new Date();
  var compyear = date.getFullYear();
  var compmonths = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  var compdays = 0;
  var comphours = 0;
  var compminutes = 0;

  if (date.getDate() < 10) {compdays = '0' + date.getDate();} else {compdays = date.getDate();}
  if (date.getHours() < 10) {comphours = '0' + date.getHours();} else {comphours = date.getHours();}
  if (date.getMinutes() < 10) {compminutes = '0' + date.getMinutes();} else {compminutes = date.getMinutes();}
      
  var comp = compdays + compmonths[date.getMonth()] + compyear + comphours + compminutes;

  const bootbetatext = document.getElementById('bootscreen-text-default-main');
  const desktopbetatext = document.getElementById('desktop-beta-info');

  bootbetatext.innerHTML = 'beta ' + betastage + ' build ' + build;
  desktopbetatext.innerHTML = 'Confidential Build. Eclipse Cloud Operating System, Beta ' + betastage + ', Build ' + build + ' Compilation: ' + comp + '.';
}, 250);

window.addEventListener('load', function(){
  const bootscreen = document.getElementById('bootscreen');
  bootscreen.className += '.done';
})

// Login

window.addEventListener('load', function loadusername(){
  var logonusernametext = document.getElementById("logon-screen-username");
  var logininput = document.getElementById('logon-screen-input-text');

  logonusernametext.innerText = username;
  logininput.focus();

})

function loginauth(user = document.getElementById('owner-user'), logininput = document.getElementById('logon-screen-input-text'), loginwindow = document.getElementById('logon-screen')){
  if(event.keyCode == 13){
    if(logininput.value == userpw){
      user.style.display = 'block';
      loginwindow.style.display = 'none';
      logininput.setAttribute('placeholder', 'Password');
    } else {
      logininput.setAttribute('placeholder', 'Wrong password.');
    }
    logininput.value = '';
  }
}

// Desktop

var z = 0;

function menutrigger(menumain = document.getElementById('desktop-menu-main'), menusettings = document.getElementById('desktop-menu-settings')){
    if(menumain.style.display === "none"){
        menumain.style.display = "block";
        menumain.style.animation = 'openmenu 0.15s ease-out';
        menusettings.style.display = "none";
    } else {
        menumain.style.animation = 'closemenu 0.15s ease-out';
        setTimeout(() => {
          menumain.style.display = "none";
        }, 150);
    }
}

function settingstrigger(menusettings = document.getElementById('desktop-menu-settings'), menumain = document.getElementById('desktop-menu-main')){
  if(menusettings.style.display === "none"){
      menusettings.style.animation = 'openmenu 0.15s ease-out';
      menusettings.style.display = "block";
      menumain.style.display = "none";
  } else {
      menusettings.style.animation = 'closemenu 0.15s ease-out';
      setTimeout(() => {
        menusettings.style.display = "none";
      }, 150);
      
  }
}



// Demo APP
let taskbarpos = ['document.getElementById("desktop-taskbar").style.top', 'document.getElementById("desktop-taskbar").style.bottom'];
var restoreheight;
var restorewidth;
var restoretop;
var restoreleft;
let demowindowopen = false;

function opendemoapp(app = document.getElementById('demo-window')){
  demowindowopen = true;
  var taskbarminimizedapps = document.getElementById('desktop-taskbar-minimized-apps');
  
  var miniapp = document.createElement('button');
  var miniappclass = document.createAttribute('class');
  var miniappid = document.createAttribute('id');
  var miniapponclick = document.createAttribute('onclick');
  var miniappclassname = miniappclass.value = 'desktop-taskbar-app-button';
  var miniappidname = miniappid.value = 'desktop-taskbar-demo-app-button';
  var miniapponclickfunction = miniapponclick.value = 'minimizedemoapp()';
  
  taskbarminimizedapps.appendChild(miniapp);
  miniapp.miniappclassname;
  miniapp.setAttributeNode(miniappclass);
  miniapp.miniappidname;
  miniapp.setAttributeNode(miniappid);
  miniapp.miniapponclickfunction;
  miniapp.setAttributeNode(miniapponclick);
  
  app.style.display = "block";
  app.style.animation = 'openwindow 0.25s';
  app.style.zIndex = z++;
  miniapp.style.display = "inline-block";
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

  if (window.innerHeight > window.innerWidth){
    resizedemoapp();
  }

  restoreheight = app.style.height;
  restorewidth = app.style.width;
  restoretop = app.style.top;
  restoreleft = app.style.left;
}

function demoappfocus(app = document.getElementById('demo-window')){
  z++;
  app.style.zIndex = z;
}

function closedemoapp(app = document.getElementById('demo-window'), miniapp = document.getElementById('desktop-taskbar-demo-app-button')){
  var taskbarminimizedapps = document.getElementById('desktop-taskbar-minimized-apps');
  
  app.style.animation = 'closewindow 0.25s';
  app.style.animationDuration = '0.25s';
  setTimeout(() => {
    app.style.display = "none";
    miniapp.parentNode.removeChild(miniapp);
    demowindowopen = false;
  }, 250);
}

function resizedemoapp(app = document.getElementById("demo-window")){
  if (app.style.width === '100%') {
		app.style.width = restorewidth;
		app.style.height = restoreheight;
    app.style.left = restoreleft;
    app.style.top = restoretop;
    app.style.resize = "both";
    app.style.borderRadius = "4px";
    app.style.animation = 'maximizewindow 0.25s';
    app.style.transition = "0.15s";
    setTimeout(function() {
			  app.style.transition = "none";
		}, 150)
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
    app.style.transition = "0.15s";
    setTimeout(function() {
			  app.style.transition = "none";
		}, 150)
	}
}

function minimizedemoapp(app = document.getElementById("demo-window"), miniapp = document.getElementById('desktop-taskbar-demo-app-button')) {
  if (demowindowopen = true) {
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
    }
  }
  else {
    opendemoapp()
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
      app.style.transition = "0.15s";
      setTimeout(function() {
			  app.style.transition = "none";
		}, 150)
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
    document.onmouseup = null;
    document.onmousemove = null;
    snapdemoapp();
  }
}

});

// Terminal APP
var terminalrestoreheight;
var terminalrestorewidth;
var terminalrestoretop;
var terminalrestoreleft;
var terminalwindowopen = false;

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
  app.style.zIndex = z++;

  if (window.innerHeight > window.innerWidth){
    resizeterminalapp();
  }

  var returncommand = document.createElement('div');
  var returncommandclass = document.createAttribute('class');
  var returncommandclassvalue = returncommandclass.value = 'terminal-window-content-text';
  setTimeout(() => {
    appcontainer.appendChild(returncommand);
    returncommand.returncommandclassvalue;
    returncommand.setAttributeNode(returncommandclass);
    returncommand.innerHTML = '<span style="color: yellow;"></span>';
  }, 000);

  terminalprompt.innerText = username + '$:';
  terminal.focus();

  terminalrestoreheight = app.style.height;
  terminalrestorewidth = app.style.width;
  terminalrestoretop = app.style.top;
  terminalrestoreleft = app.style.left;
  terminalwindowopen = true;
}

function terminalappfocus(app = document.getElementById('terminal-window')){
  z++;
  app.style.zIndex = z;
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
    app.style.transition = "0.15s";
    setTimeout(function() {
			app.style.transition = "none";
		}, 150)
		app.style.width = '100%';
		app.style.height = 'calc(100% - 40px)';
		app.style.top = "40px";
		app.style.left = "0px";
    app.style.resize = "none";
    app.style.borderRadius = "0px";
    app.style.animation = 'maximizewindow 0.25s';
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
  var apptop = parseInt(app.style.top, 10);
  var appleft = parseInt(app.style.left, 10);
  var appwidth = parseInt(app.style.width, 10);

  if (apptop < 0) {
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

  if (appleft < 0) {
    sideterminalapp()
    // document.getElementById("terminal-window-header-title").innerHTML = 'Detected';
  }

  if(appleft > (window.innerWidth - appwidth)){
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

var lastcommand;

function terminal(terminal = document.getElementById("terminal-window-terminal"), appcontainer = document.getElementById("terminal-window-container"), terminalprompt = document.getElementById("terminal-window-content-prompt")){
  var createtext = document.createElement('div');
  var createtextclass = document.createAttribute('class');
  var createtextclassvalue = createtextclass.value = 'terminal-window-content-text';
  var textelements = document.getElementsByClassName('terminal-window-content-text');

  var returncommand = document.createElement('div');
  var returncommandclass = document.createAttribute('class');
  var returncommandclassvalue = returncommandclass.value = 'terminal-window-content-text';

  

  if(event.keyCode == 13){

    lastcommand = terminal.value;

    if(terminal.value.includes("exit")){
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerText = '\nExitting terminal...\n';
      }, 000);
       closeterminalapp()
    }

    if(terminal.value.includes("info")){
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerText = '\n- System Info: \n[System Name] ' + systemname + '\n[Version Name] ' + versionname + '\n[Build] '+ build + '\n[Compilation] ' + today;
      }, 000);
    }

    if(terminal.value.includes("help")){
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerText = '\n- Available commands: \ninfo: This comand shows the main system information\n\nclear: Wipes terminal text\n\nexit: Closes terminal application\n\nterminal: Shows terminal status. Sintax: terminal [command]\n\nchange: Customizes the selected element in the operating system. Syntax: change [-w, -uname].\n\ncomp update: Updates the operating system current compilation data\n\nPlease type all commands in lowercase.\n';
      }, 000);
    }

    if(terminal.value.includes("andre")){
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerText = '\nMelhor prof\n';
      }, 000);
    }

    if(terminal.value.includes("clear")){
      terminal.value = '';
      while(textelements.length > -1) appcontainer.removeChild(textelements[0]);
    }

    if(terminal.value.includes("terminal")){
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML = '<span style="color: red;">Wrong Sintax</span>, please use "terminal [command]".';
      }, 000);
    }

    if(terminal.value.includes("terminal") && terminal.value.includes("isworking")){
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML = '<span style="color: lightgreen;">Yes</span>.';
      }, 000);
    }

    if(terminal.value.includes("abnt")){
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML =  '<span style="color: lightblue; font-size: 128px; font-family: Inter Med;">' + lastcommand.slice(4) + '</span>';
      }, 000);
    }

    if(terminal.value.includes("write")){
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerText =  lastcommand.slice(5);
      }, 000);
    }

    if(terminal.value.includes("gutem")){
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML =  'pelo q vc sabe uma ova! Como vc tem coragem de queimar o cara pelos boatos dos outros??? pelas msg q eu li aqui, vc ta descontando nele a dor q vc sofreu antes! os seus argumentos e msg são tudo coisa de criança, é ridiculo d++++, eu conheço esse mlk a mt tempo e ele é uma pessoa incrivel, tu conhece a um ano, se é que conhece, e acha q pode julgar e dar a sua opinião baseado em FOFOCA. você não entende q isso é um assunto serio, q pode acabar com a vida dele na escola, uma difamação q tem MTTTTR mentira no meio e vc espalha esses boatos pelo simples fato de vc se sentir confortável fazendo isso so pq ja aconteceu algo parecido com vc? acha q isso te da o direito de se intrometer no problema de outras pessoas so pra piorar tudo. isso não é coisa que se faça, se vc ta esculhambando ele por puro odio e não está interessado em entender a verdade fique quieto e não se meta, o guto não precisa das suas opiniões tóxicas mexendo no psicólogico dele, aliás, ngm precisa da sua opinião aqui, até pq vc não está interessado em ajudar a resolver isso, vc so quer acabar com a reputação de um mlk q vc nem conhece direito e eu não vou deixar vc nem ngm fazer isso, e se os amigos dele forem amigos de vdd não vão deixar tmb. Reveja seus atos e pare de falar nesse caso que não te pertence.';
      }, 000);
    }

    if(terminal.value.includes("change -w")){
      const desktop = document.getElementById('owner-user');
      
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML = 'Setting wallpaper to' + lastcommand.slice(9) + '...';
        desktop.style.backgroundImage = "url(" + lastcommand.slice(9) + ")";
        desktop.style.backgroundSize = 'cover';
      }, 000);
    }

    if(terminal.value.includes("change -uname")){
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML = 'Setting username to ' + lastcommand.slice(13) + '...';
        username = lastcommand.slice(13);
      }, 000);
    }

    if(terminal.value.includes("change -userpw")){
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML = 'Setting your password to ' + lastcommand.slice(14) + '...';
        userpw = lastcommand.slice(14);
      }, 000);
    }

    if(terminal.value.includes("system lock")){
      const desktop = document.getElementById('owner-user');
      const loginwindow = document.getElementById('logon-screen');
      const logininput = document.getElementById('logon-screen-input-text');
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML = 'Done';
        desktop.style.display = 'none';
        loginwindow.style.display = 'block';
        logininput.focus();
      }, 000);
    }

    if(terminal.value.includes("system off")){
      const desktop = document.getElementById('owner-user');
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML = 'Done';
      }, 000);
    }
    
    if(terminal.value.includes("-w igorcareca")){
      const desktop = document.getElementById('owner-user');
      
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML = 'Setting wallpaper to ../../res/images/background/igor careca.png...';
        desktop.style.backgroundColor = 'black';
        desktop.style.backgroundImage = "url('../../res/images/background/igor careca.png')";
        desktop.style.backgroundSize = 'contain';
      }, 000);
    }

    if(terminal.value.includes("-w ioripeito")){
      const desktop = document.getElementById('owner-user');
      
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML = 'Setting wallpaper to ../../res/images/background/peitudoiori.jpeg...';
        desktop.style.backgroundColor = 'black';
        desktop.style.backgroundImage = "url('../../res/images/background/peitudoiori.jpeg')";
        desktop.style.backgroundSize = 'contain';
      }, 000);
    }

    if(terminal.value.includes("-w default")){
      const desktop = document.getElementById('owner-user');

      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML = 'Setting wallpaper to ../../res/images/background/default.jpg...';
        desktop.style.backgroundColor = 'black';
        desktop.style.backgroundImage = "url('../../res/images/background/default.jpg')";
        desktop.style.backgroundSize = 'cover';
      }, 000);
    }

    if(terminal.value.includes("-w default1")){
      const desktop = document.getElementById('owner-user');

      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML = 'Setting wallpaper to ../../res/images/background/wpp1.jpg...';
        desktop.style.backgroundColor = 'black';
        desktop.style.backgroundImage = "url('../../res/images/background/wpp1.jpg')";
        desktop.style.backgroundSize = 'cover';
      }, 000);
    }

    if(terminal.value.includes("-w default2")){
      const desktop = document.getElementById('owner-user');

      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML = 'Setting wallpaper to ../../res/images/background/wpp2.jpg...';
        desktop.style.backgroundColor = 'black';
        desktop.style.backgroundImage = "url('../../res/images/background/wpp2.jpg')";
        desktop.style.backgroundSize = 'cover';
      }, 000);
    }

    if(terminal.value.includes("-w default3")){
      const desktop = document.getElementById('owner-user');
      
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML = 'Setting wallpaper to ../../res/images/background/wpp3.jpg...';
        desktop.style.backgroundColor = 'black';
        desktop.style.backgroundImage = "url('../../res/images/background/wpp3.jpg')";
        desktop.style.backgroundSize = 'cover';
      }, 000);
    }

    if(terminal.value.includes("-w default4")){
      const desktop = document.getElementById('owner-user');
      
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML = 'Setting wallpaper to ../../res/images/background/wpp4.jpg...';
        desktop.style.backgroundColor = 'black';
        desktop.style.backgroundImage = "url('../../res/images/background/wpp4.jpg')";
        desktop.style.backgroundSize = 'cover';
      }, 000);
    }

    if(terminal.value.includes("-w default5")){
      const desktop = document.getElementById('owner-user');

      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML = 'Setting wallpaper to ../../res/images/background/wpp5.jpg...';
        desktop.style.backgroundColor = 'black';
        desktop.style.backgroundImage = "url('../../res/images/background/wpp5.jpg')";
        desktop.style.backgroundSize = 'cover';
      }, 000);
    }

    if(terminal.value.includes("-w default6")){
      const desktop = document.getElementById('owner-user');
      
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML = 'Setting wallpaper to ../../res/images/background/wpp6.jpg...';
        desktop.style.backgroundColor = 'black';
        desktop.style.backgroundImage = "url('../../res/images/background/wpp6.jpg')";
        desktop.style.backgroundSize = 'cover';
      }, 000);
    }

    if(terminal.value.includes("comp update")){
      var date = new Date();
      var compyear = date.getFullYear();
      var compmonths = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
      var compdays = 0;
      var comphours = 0;
      var compminutes = 0;

      if (date.getDate() < 10) {compdays = '0' + date.getDate();} else {compdays = date.getDate();}
      if (date.getHours() < 10) {comphours = '0' + date.getHours();} else {comphours = date.getHours();}
      if (date.getMinutes() < 10) {compminutes = '0' + date.getMinutes();} else {compminutes = date.getMinutes();}
      
      var comp = compdays + compmonths[date.getMonth()] + compyear + comphours + compminutes;
      build = build + 1;

      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML = '<span style="color: lightgreen;">The current compilation date is ' + compdays + compmonths[date.getMonth()] + compyear + comphours + compminutes + '</span>';
      }, 000);
      document.getElementById('desktop-beta-info').innerHTML = 'Confidential Build. Eclipse Cloud Operating System, Beta ' + betastage + ', Build ' + build + ' Compilation: ' + comp;
    }

    appcontainer.appendChild(createtext);
    createtext.createtextclassvalue;
    createtext.setAttributeNode(createtextclass);
    createtext.innerHTML = '<span style="color: yellow;">' + (terminalprompt.innerText) + '</span> ' + (terminal.value);
    terminal.value = '';
 }

 if(event.keyCode == 38) {
  terminal.value = lastcommand;
  }

}


// calculator APP
var calculatorrestoreheight;
var calculatorrestorewidth;
var calculatorrestoretop;
var calculatorrestoreleft;
var calculatorwindowopen = false;

function opencalculatorapp(app = document.getElementById('calculator-window'), miniapp = document.getElementById('desktop-taskbar-calculator-app-button')){
  var calculator = document.getElementById('calculator-window-calculator');
  
  var taskbarminimizedapps = document.getElementById('desktop-taskbar-minimized-apps');
  
  var miniapp = document.createElement('button');
  var miniappclass = document.createAttribute('class');
  var miniappid = document.createAttribute('id');
  var miniapponclick = document.createAttribute('onclick');
  var miniappclassname = miniappclass.value = 'desktop-taskbar-app-button';
  var miniappidname = miniappid.value = 'desktop-taskbar-calculator-app-button';
  var miniapponclickfunction = miniapponclick.value = 'minimizecalculatorapp()';
  
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

  app.style.width = '240px';
	app.style.height = '355px';
  app.style.top = '120px';
	app.style.left = '120px';
  app.style.resize = "both";
  app.style.borderRadius = "4px";
  app.style.zIndex = z++;
  
  if (window.innerHeight > window.innerWidth){
    resizecalculatorapp();
  }

  calculatorrestoreheight = app.style.height;
  calculatorrestorewidth = app.style.width;
  calculatorrestoretop = app.style.top;
  calculatorrestoreleft = app.style.left;
  calculatorwindowopen = true;
}

function calculatorappfocus(app = document.getElementById('calculator-window')){
  z++;
  app.style.zIndex = z;
}

function closecalculatorapp(app = document.getElementById('calculator-window'), miniapp = document.getElementById('desktop-taskbar-calculator-app-button')){
  app.style.animation = 'closewindow 0.25s';
  app.style.animationDuration = '0.25s';
  setTimeout(() => {
    app.style.display = "none";
    miniapp.parentNode.removeChild(miniapp);
    calculatorwindowopen = false;
  }, 250);
}

function resizecalculatorapp(app = document.getElementById("calculator-window")){
  if (app.style.width === '100%') {
		app.style.width = calculatorrestorewidth;
		app.style.height = calculatorrestoreheight;
    app.style.left = calculatorrestoreleft;
    app.style.top = calculatorrestoretop;
    app.style.resize = "both";
    app.style.borderRadius = "4px";
    app.style.animation = 'maximizewindow 0.25s';
    app.style.transition = "0.15s";
    setTimeout(function() {
			app.style.transition = "none";
		}, 150)
	} else {
    calculatorrestoreheight = app.style.height;
    calculatorrestorewidth = app.style.width; 
    calculatorrestoretop = app.style.top;
    calculatorrestoreleft = app.style.left;
    app.style.transition = "0.15s";
    setTimeout(function() {
			app.style.transition = "none";
		}, 150)
		app.style.width = '100%';
		app.style.height = 'calc(100% - 40px)';
		app.style.top = "40px";
		app.style.left = "0px";
    app.style.resize = "none";
    app.style.borderRadius = "0px";
    app.style.animation = 'maximizewindow 0.25s';
	}
}

function minimizecalculatorapp(app = document.getElementById("calculator-window"), miniapp = document.getElementById('desktop-taskbar-calculator-app-button')) {
  if (calculatorwindowopen = true) {
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
    }
  }
  else {
    opencalculatorapp()
  }
}

function sidecalculatorapp(app = document.getElementById("calculator-window")){
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

function snapmincalculatorapp(app = document.getElementById("calculator-window")){
  var appwidth = parseInt(calculatorrestorewidth, 10);
  var posleft = window.event.clientX - (appwidth * 0.5);
  var posleftcss = posleft + 'px';
  var postop = window.event.clientY + 'px';

  if (app.style.height === 'calc(100% - 40px)') {
		app.style.width = calculatorrestorewidth;
		app.style.height = calculatorrestoreheight;
    app.style.left = posleftcss;
    app.style.top = '40px';
    app.style.resize = "both";
    app.style.borderRadius = "4px";
	}
}

function snapcalculatorapp(app = document.getElementById("calculator-window")){
  var apptop = parseInt(app.style.top, 10);
  var appleft = parseInt(app.style.left, 10);
  var appwidth = parseInt(app.style.width, 10);

  if (apptop < 0) {
    if (app.style.width === 'calc(100% - 40px)') {
      app.style.width = calculatorrestorewidth;
      app.style.height = calculatorrestoreheight;
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

  if (appleft < 0) {
    sidecalculatorapp()
    // document.getElementById("calculator-window-header-title").innerHTML = 'Detected';
  }

  if(appleft > (window.innerWidth - appwidth)){
    sidecalculatorapp()
  }
}

function savecalculatorrestorepos(app = document.getElementById('calculator-window')){
  calculatorrestoreheight = app.style.height;
  calculatorrestorewidth = app.style.width; 
  calculatorrestoretop = app.style.top;
  calculatorrestoreleft = app.style.left;
}

function calculatorinsert(x, input = document.getElementById("calculator-window-content-input-text1")) {
  input.value = input.value + x; 
}

var calculatorpar = false;

function calculatorinsertorg(input = document.getElementById("calculator-window-content-input-text1")) {
  if (input.value.includes('(') && calculatorpar === true){
    input.value = input.value + ')';
    calculatorpar = false;
  } else if (calculatorpar === false) {
    if (calculatorpar === false) {
      input.value = input.value + '(';
      calculatorpar = true;
    } else {
      input.value = input.value + ')';
      calculatorpar = false;
    }
  }
}

function calculatordelete(x, input = document.getElementById("calculator-window-content-input-text1")) {
  input.value = input.value.slice(0, x); 
}

function calculatorclear(input = document.getElementById("calculator-window-content-input-text1")) {
  input.value = input.value.substr(0, -1); 
}

function calculatorequal(x, input = document.getElementById("calculator-window-content-input-text1")) {
  input.value = eval(input.value); 
}


window.onload = function(){
  document.getElementById("calculator-window-content-input-text1").addEventListener("keydown", function (){
    if(event.keyCode == 13){
      calculatorequal();
    }
  });
}


window.addEventListener("load", function(){
dragElement(document.getElementById("calculator-window"));


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("calculator-window-header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById("calculator-window-header").onmousedown = dragMouseDown;
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
    snapmincalculatorapp();
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
    snapcalculatorapp();
  }
}

});

