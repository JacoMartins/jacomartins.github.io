// Main
let build = 45;
let isbeta = true;
let betastage = 1;
let version = '1.0.0';
let systemname = 'Eclipse Cloud Operating System (ECOS)';
let versionname = 'Beta';
let permlevel = 0;
var date = new Date();

if (localStorage.getItem('username') == undefined){
  localStorage.setItem('username', 'System');
}


if (localStorage.getItem('notepad') == undefined){
  localStorage.setItem('notepad', '');
}


if (localStorage.getItem('userpw') == undefined) {
  localStorage.setItem('userpw', '')
}

if (localStorage.getItem('rebootT') == undefined) {
  localStorage.setItem('rebootT', '0')
}

if (localStorage.getItem('boot') == undefined) {
  localStorage.setItem('boot', '../ui/ecos.html')
}

var username = localStorage.getItem('username');
var userpw = localStorage.getItem('userpw');

setInterval(function time() {
  if(window.innerHeight > window.innerWidth){
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
  
    document.getElementById('desktop-taskbar-clock').innerHTML = '<span style="opacity: 0.6; margin-right: 4px;">' + DateHours + ':' + DateMinutes + '</span>' + '  ' + DateMonths[date.getMonth()].substr(0, 3) + ', ' + DateDays + ', ' + date.getFullYear().toString().substr(2,4);  
  } else {
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
  }
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
  desktopbetatext.innerHTML = 'Eclipse Cloud Operating System, Beta ' + betastage + ', Build ' + build + ' Compilation: ' + comp + '.';
}, 250);

window.addEventListener('load', function(){
  const bootscreen = document.getElementById('bootscreen');
  bootscreen.className += '.done';
})

window.addEventListener('keyup', event => {
  if(event.keyCode == 84 && event.ctrlKey && event.altKey){
    openterminalapp();
  }

  if(event.keyCode == 77 && event.ctrlKey){
    menutrigger();
  }
})

// Login

window.addEventListener('load', function loadusername(){
  var logonusernametext = document.getElementById("logon-screen-username");
  var logininput = document.getElementById('logon-screen-input-text');
  var settingsunameinput = document.getElementById("settings-window-categories-users-input-uname");
  var settingsuserpwinput = document.getElementById("settings-window-categories-users-input-userpw");
  var user = document.getElementById('owner-user'), logininput = document.getElementById('logon-screen-input-text'), loginwindow = document.getElementById('logon-screen');

  logonusernametext.innerText = username;
  settingsunameinput.value = username;
  //settingsuserpwinput.value = userpw;

  logininput.focus();

  if(userpw = ''){
    user.style.display = 'block';
    loginwindow.style.display = 'none';
    logininput.setAttribute('placeholder', 'Password');
  } else {
    loginwindow.style.display = 'block';
    user.style.display = 'none';
  }

})

function loginauth(user = document.getElementById('owner-user'), logininput = document.getElementById('logon-screen-input-text'), loginwindow = document.getElementById('logon-screen')){
  if(event.keyCode == 13){
    if(logininput.value == localStorage.getItem('userpw')){
      user.style.display = 'block';
      loginwindow.style.display = 'none';
      logininput.setAttribute('placeholder', 'Password');

      //var msgid = 0;

      //var createwindow = document.createElement('div');
      //var addwindowidatr = document.createAttribute('id');
      //var addwindowclassatr = document.createAttribute('class');
      //var idname = addwindowidatr.value = 'window' + (msgid + 1);
      //var classname = addwindowclassatr.value = 'window';
      
      //user.appendChild(createwindow);
      //createwindow.classname;
      //createwindow.setAttributeNode(addwindowclassatr);
      //createwindow.idname;
      //createwindow.setAttributeNode(addwindowidatr);
      
      //var windowid = document.getElementById('window' + (msgid + 1));
      //windowid.innerHTML = '<div id="' + 'window' + (msgid + 1) + '-window-header" class="window-header"><button id="' + 'window' + (msgid + 1) + '-window-close-button" class="window-header-close-button"></button><button id="' + 'window' + (msgid + 1) + '-window-resize-button" class="window-header-resize-button"></button><button id="' + 'window' + (msgid + 1) + '-window-minimize-button" class="window-header-minimize-button"></button><a class="window-header-title" id="' + 'window' + (msgid + 1) + '-window-header-title">window test</a></div><div id="' + 'window' + (msgid + 1) + '-window-content" class="window-content"><h1 class="text-header1" id="' + 'window' + (msgid + 1) + '-window-content-header1">H1</h1><h2 class="text-header2" id="' + 'window' + (msgid + 1) + '-window-content-header2">H2</h2><a class="text-default" id="' + 'window' + (msgid + 1) + '-window-content-p">Paragraph</a><input class="system-input-text" type="text" id="' + 'window' + (msgid + 1) + '-window-content-input-text1"><input class="system-input-button" type="button" id="' + 'window' + (msgid + 1) + '-window-content-input-button1" value="Button"><label class="system-input-checkbox-label" for="' + 'window' + (msgid + 1) + '-window-content-input-checkbox1">CheckBox<input class="system-input-checkbox" type="checkbox" name="' + 'window' + (msgid + 1) + '-window-content-input-checkbox1" id="' + 'window' + (msgid + 1) + '-window-content-input-checkbox1" checked="checked"><span class="system-input-checkbox-checkmark"></span></label></div>';
      //windowid.createAttribute('onclick').value = '';
      //windowid.setAttributeNode();


      // ' + 'window' + (msgid + 1) + '

      openbetaapp();
      document.getElementById('beta-window-header-title').innerText = 'Welcome, ' + username;

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
        menumain.style.display = "grid";
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
      menusettings.style.display = "grid";
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
  var resizebutton = document.getElementById("demo-window-resize-button");
  var minimizebutton = document.getElementById("demo-window-minimize-button");
  
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

  app.style.width = '232px';
	app.style.height = '336px';
  app.style.top = '120px';
	app.style.left = '120px';
  app.style.resize = "both";
  app.style.borderRadius = "4px";
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

  restoreheight = app.style.height;
  restorewidth = app.style.width;
  restoretop = app.style.top;
  restoreleft = app.style.left;
}

function demoappfocus(app = document.getElementById('demo-window')){
  z++;
  app.style.zIndex = z;
  document.getElementById('desktop-taskbar').style.zIndex = z + 999;
  document.getElementById('desktop-menu-main').style.zIndex = z + 998;
  document.getElementById('desktop-menu-settings').style.zIndex = z + 998;
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
      demoappfocus()
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
  var clienttop = window.event.clientY;
  var clientleft = window.event.clientX;

  if (clienttop <= 0) {
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

  if (clientleft <= 0) {
    sidedemoapp()
    // document.getElementById("demo-window-header-title").innerHTML = 'Detected';
  }

  if(clientleft >= (window.innerWidth - 1)){
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

function terminalappfocus(app = document.getElementById('terminal-window')){
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
      terminalappfocus()
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

var lastcommand;
var prelastcommand;
var sudo = false;
var evaul = false;
var msgid = 0;
var msgslct = 0;

function terminal(){
  const terminal = document.getElementById("terminal-window-terminal");
  const appcontainer = document.getElementById("terminal-window-container");
  const terminalprompt = document.getElementById("terminal-window-content-prompt");

  var createtext = document.createElement('div');
  var createtextclass = document.createAttribute('class');
  var createtextclassvalue = createtextclass.value = 'terminal-window-content-text';
  var textelements = document.getElementsByClassName('terminal-window-content-text');

  var msgwindow = document.createElement('div');
  var msgwindowclass = document.createAttribute('class');
  var msgwindowappid = document.createAttribute('id');
  var msgwindowevent = document.createAttribute('onmousedown');
  var msgwindowclassname = msgwindowclass.value = 'window';
  var msgwindowidname = msgwindowappid.value = 'msgbox' + msgid + '-window';
  var msgwindoweventvalue = msgwindowevent.value = `msgboxappfocus(${msgid})`;

  var resizebutton = document.getElementById("demo-window-resize-button");
  var minimizebutton = document.getElementById("demo-window-minimize-button");

  var returncommand = document.createElement('div');
  var returncommandclass = document.createAttribute('class');
  var returncommandclassvalue = returncommandclass.value = 'terminal-window-content-text';

  var desktop = document.getElementById('owner-user');


  if(terminal.value.includes("<br>")){
    setTimeout(() => {
      appcontainer.appendChild(returncommand);
      returncommand.returncommandclassvalue;
      returncommand.setAttributeNode(returncommandclass);
      returncommand.innerText = '\n';
    }, 000);
  }

  if(event.keyCode == 13 && evaul === false && sudo === false){

    prelastcommand = lastcommand;
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

    if(terminal.value.includes("sudo")){
      setTimeout(() => {
        //appcontainer.appendChild(returncommand);
        //returncommand.returncommandclassvalue;
        //returncommand.setAttributeNode(returncommandclass);
        //returncommand
        terminalprompt.innerHTML = '<span style="color: lightgray;">[sudo] Password for ' + username + ':</span>';
        sudo = true;
      }, 000);
    }

    if(terminal.value.includes("msg")){
      var msgcontent = terminal.value.slice(4);
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand

        desktop.appendChild(msgwindow);
        msgwindow.msgwindowidname;
        msgwindow.setAttributeNode(msgwindowappid);
        msgwindow.msgwindowclassname;
        msgwindow.setAttributeNode(msgwindowclass);
        msgwindow.msgwindoweventvalue;
        msgwindow.setAttributeNode(msgwindowevent);
        
        document.getElementById(`msgbox${msgid}-window`).innerHTML = `
        
        <div id="msgbox${msgid}-window-header" class="window-header" onmouseover="">
        
          <button id="msgbox${msgid}-window-close-button" class="window-header-close-button" onclick="closemsgboxapp(${msgid})"></button>        
          <a class="window-header-title" id="msgbox${msgid}-window-header-title"></a>
    
        </div>
    
        <div id="msgbox${msgid}-window-content" class="window-content">
          <a class="text-default" id="msgbox${msgid}-window-content-p">Paragraph</a>
          <button class="system-input-button" id="msgbox${msgid}-window-content-input-button1" onclick="closemsgboxapp(${msgid})">OK</button>
        </div>
        
        `;
        
        dragElement(document.getElementById(`msgbox${msgid}-window`));

      	document.getElementById(`msgbox${msgid}-window`).style.animation = 'openwindow 0.25s';

        document.getElementById(`msgbox${msgid}-window`).style.height = '134px';
        document.getElementById(`msgbox${msgid}-window`).style.width = '352px';
        document.getElementById(`msgbox${msgid}-window`).style.top = `calc(50% - ${(parseInt(document.getElementById(`msgbox${msgid}-window`).style.height) * 0.5)}px)`;
        document.getElementById(`msgbox${msgid}-window`).style.left = `calc(50% - ${(parseInt(document.getElementById(`msgbox${msgid}-window`).style.width) * 0.5)}px)`;
        document.getElementById(`msgbox${msgid}-window-header-title`).innerText = `Message${msgid}`;
        document.getElementById(`msgbox${msgid}-window`).style.zIndex = z + 1;

        document.getElementById(`msgbox${msgid}-window-content-p`).style.top = '15px';
        document.getElementById(`msgbox${msgid}-window-content-p`).style.left = '15px';

        document.getElementById(`msgbox${msgid}-window-content-p`).innerText = msgcontent;

        document.getElementById(`msgbox${msgid}-window-content-input-button1`).style.top = `calc(calc(100% - 31px) - 15px)`;
        document.getElementById(`msgbox${msgid}-window-content-input-button1`).style.left = `calc(calc(100% - 78px) - 15px)`;
        document.getElementById(`msgbox${msgid}-window-content-input-button1`).focus();

        setTimeout(() => {
          document.getElementById(`msgbox${msgid}-window`).onmousedown = msgboxappfocus(msgid);
        }, 00);

        msgid = msgid + 1;
      }, 000);
    }

    if(terminal.value.includes("<br>")){
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerText = '\n';
      }, 000);
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
        returncommand.innerText = '\n- Available commands: \ninfo: This comand shows the main system information\n\nclear: Wipes terminal text\n\nexit: Closes terminal application\n\nterminal: Shows terminal status. Sintax: terminal [command]\n\nchange: Customizes the selected element in the operating system. Syntax: change [-w, -lsw, -uname, -userpw].\n\ncomp update: Updates the operating system current compilation data\n\njs-console: Opens a javascript command console.\n\nlocation: Change the browser location settings of the operating system. Example: [location boot -l -t 0 url].\n\nlocation boot: Change the loading file of the operating system.\n\nlocation reboot -t (0 or 1): Choose if you want to boot directly on terminal or in the file.\n\nmsg [text]: Creates a new dialogue box with the text you wrote previously.\n\nPlease type all commands in lowercase.';
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

    if(terminal.value.includes("daniel")){
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerText = '\nMelhor prof\n';
      }, 000);
    }

    if(terminal.value.includes("nirvado")){
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerText = '\nMelhor prof\n';
      }, 000);
    }

    if(terminal.value.includes("roberta")){
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerText = '\nMelhor prof\n';
      }, 000);
    }

    if(terminal.value.includes("ph")){
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerText = '\nMelhor prof\n';
      }, 000);
    }

    if(terminal.value.includes("eldasio")){
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerText = '\nMelhor prof\n';
      }, 000);
    }

    if(terminal.value.includes("antonio")){
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerText = '\nAntonio deu certo\n';
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

    if(terminal.value.includes("js-console") && terminal.value.includes('sudo') === false){
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        evaul = true;
        terminalprompt.innerText = 'js-console' + '$:';
        terminalprompt.style.color = 'orange';
        terminal.focus();
        returncommand.innerHTML = '<span style="color: orange;">Opening JS Terminal...</span>';
      }, 000);
    }
    
    if(terminal.value.includes("location") && terminal.value.includes('sudo') === false){

      if(terminal.value.includes("location boot -l ")){
        setTimeout(() => {
          appcontainer.appendChild(returncommand);
          returncommand.returncommandclassvalue;
          returncommand.setAttributeNode(returncommandclass);
          returncommand.innerHTML = 'Setting boot location to' + terminal.value.slice(17) + '...';
        }, 000);
        localStorage.setItem('boot', terminal.value.slice(17));
        location.assign('../boot/bootmgr.html');

        if(terminal.value.includes("location boot -l -t")){
          if(terminal.value.includes("location boot -l -t 0")){
            setTimeout(() => {
              appcontainer.appendChild(returncommand);
              returncommand.returncommandclassvalue;
              returncommand.setAttributeNode(returncommandclass);
              returncommand.innerHTML = 'Setting boot location to' + terminal.value.slice(22) + '...';
            }, 000);
            localStorage.setItem('boot', terminal.value.slice(22));
            localStorage.setItem('rebootT', '0');
            location.assign('../boot/bootmgr.html');
          }
  
          if(terminal.value.includes("location boot -l -t 1")){
            setTimeout(() => {
              appcontainer.appendChild(returncommand);
              returncommand.returncommandclassvalue;
              returncommand.setAttributeNode(returncommandclass);
              returncommand.innerHTML = 'Setting boot location to' + terminal.value.slice(22) + '...';
            }, 000);
            localStorage.setItem('boot', terminal.value.slice(22));
            localStorage.setItem('rebootT', '1');
            location.assign('../boot/bootmgr.html');
          }
        }
      }

      if(terminal.value.includes("location reboot")){

        setTimeout(() => {
          appcontainer.appendChild(returncommand);
          returncommand.returncommandclassvalue;
          returncommand.setAttributeNode(returncommandclass);
          returncommand.innerHTML = 'Rebooting operating system...';
          location.assign('../boot/bootmgr.html');
        }, 000);
  
        if(terminal.value.includes("location reboot -t ")){
          setTimeout(() => {
            appcontainer.appendChild(returncommand);
            returncommand.returncommandclassvalue;
            returncommand.setAttributeNode(returncommandclass);
            returncommand.innerHTML = 'Rebooting operating system...';
          }, 000);
          localStorage.setItem('rebootT', terminal.value.slice(19));
          location.assign('../boot/bootmgr.html');
        }
  
      }

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

    if(terminal.value.includes("change -lsw")){
      const logonbg = document.getElementById('logon-screen');
      
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML = 'Setting wallpaper to' + lastcommand.slice(11) + '...';
        logonbg.style.backgroundImage = "url(" + lastcommand.slice(11) + ")";
        logonbg.style.backgroundSize = 'cover';
      }, 000);
    }

    if(terminal.value.includes("change -uname")){
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML = 'Setting username to ' + lastcommand.slice(13) + '...';
        localStorage.setItem('username', lastcommand.slice(13));
        document.getElementById('logon-screen-username').innerHTML = lastcommand.slice(13);
        document.getElementById('terminal-window-content-prompt').innerText = lastcommand.slice(13) + '$:';
      }, 000);
    }

    if(terminal.value.includes("change -userpw")){
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML = 'Setting your password to ' + lastcommand.slice(15) + '...';
        localStorage.setItem('userpw', lastcommand.slice(15));
        userpw = localStorage.getItem('userpw');
        userpwinput = lastcommand.slice(15);
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
      document.getElementById('desktop-beta-info').innerHTML = 'Eclipse Cloud Operating System, Beta ' + betastage + ', Build ' + build + ' Compilation: ' + comp;
    }

    appcontainer.appendChild(createtext);
    createtext.createtextclassvalue;
    createtext.setAttributeNode(createtextclass);
    createtext.innerHTML = '<span style="color: yellow;">' + (terminalprompt.innerText) + '</span> ' + (terminal.value);
    terminal.value = '';
 }

 if(event.keyCode == 13 && evaul === true){
  prelastcommand = lastcommand;
  lastcommand = terminal.value;
  
  appcontainer.appendChild(createtext);
  createtext.createtextclassvalue;
  createtext.setAttributeNode(createtextclass);
  createtext.innerHTML = '<span style="color: orange;">' + 'js-console$:' + '</span> ' + (terminal.value) + '<br>' + eval(terminal.value);
  terminal.value = '';
  eval(terminal.value);
 }

 var t = 5;

 if(event.keyCode == 13 && sudo === true){
  appcontainer.appendChild(createtext);
  createtext.createtextclassvalue;
  createtext.setAttributeNode(createtextclass);
  createtext.innerHTML = '<span style="color: lightgray;">' + '[sudo] Password for ' + username +  ':</span> ' + (terminal.value);

    if(terminal.value == localStorage.getItem('userpw')){
      appcontainer.appendChild(returncommand);
      returncommand.returncommandclassvalue;
      returncommand.setAttributeNode(returncommandclass);
      sudo = false;

      if(lastcommand.includes('sudo')) {
        terminal.value = lastcommand.replace('sudo', '');
      }

      terminalprompt.innerText = username + '$:';
      window.terminal();
    } else {
      if(t > 0){
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML = '<span style="color: lightgray;">Password is wrong, please try again.</span>';
        t = t - 1;
      }

      if(t = 0){
        sudo = false;
      }
    }

    terminal.value = '';
 }

 if(event.keyCode == 38) {
  terminal.value = lastcommand;
  }
}

// Terminal Functions

function write(text){
  return text;
}

var dimlist = [];

function dim(con){
  dimlist.push(con);
  return dimlist.lenght;
}

function exit(){
  evaul = false;
  sudo = false;

  var terminal = document.getElementById('terminal-window-terminal');
  var terminalprompt = document.getElementById('terminal-window-content-prompt');

  terminalprompt.innerText = username + '$:';
  terminalprompt.style.color = 'yellow';
  terminal.focus();
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
  var resizebutton = document.getElementById("calculator-window-resize-button");
  var minimizebutton = document.getElementById("calculator-window-minimize-button");
  
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

  calculatorrestoreheight = app.style.height;
  calculatorrestorewidth = app.style.width;
  calculatorrestoretop = app.style.top;
  calculatorrestoreleft = app.style.left;
  calculatorwindowopen = true;
}

function calculatorappfocus(app = document.getElementById('calculator-window')){
  z++;
  app.style.zIndex = z;
  document.getElementById('desktop-taskbar').style.zIndex = z + 999;
  document.getElementById('desktop-menu-main').style.zIndex = z + 998;
  document.getElementById('desktop-menu-settings').style.zIndex = z + 998;
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
      calculatorappfocus()
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
  var clienttop = window.event.clientY;
  var clientleft = window.event.clientX;

  if (clienttop <= 0) {
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

  if (clientleft <= 0) {
    sidecalculatorapp()
    // document.getElementById("calculator-window-header-title").innerHTML = 'Detected';
  }

  if(clientleft >= (window.innerWidth - 1)){
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

// beta APP
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

  betaparagraph1.innerHTML = `<span style="color: lightgreen;">Welcome back to the ECOS project! In this build (${build}) we improoved settings application and also made some new terminal commands!</span><br></br><br>• Corrections: </br><br>- Fixed the msg command creation of elements and events.</br><br>- Fixed the events of the msg command created windows.</br>`;

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

// settings APP
var settingsrestoreheight;
var settingsrestorewidth;
var settingsrestoretop;
var settingsrestoreleft;
let settingswindowopen = false;

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

function settingsappfocus(app = document.getElementById('settings-window')){
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
      settingsappfocus()
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

var allcategories = ['users', 'appearance'];

function settingsbackbtn(){
  var categories = 'settings-window-categories-';
  var sidebarbtn = 'settings-window-sidebar-buttons-';
  var appearanceradio1 = document.getElementById('settings-window-categories-appearance-multibutton-button1');

  for(c = 0; c < allcategories.length; c++){
    document.getElementById(categories + allcategories[c]).style.display = 'none';
    document.getElementById(categories + allcategories[c]).style.animation = 'system-fadeout 0.25s';
    document.getElementById(sidebarbtn + allcategories[c]).style.fontFamily = 'Inter Regular';
    document.getElementById(sidebarbtn + allcategories[c]).style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
    document.getElementById(sidebarbtn + allcategories[c]).style.left = 'calc(-0px)';
    document.getElementById(sidebarbtn + allcategories[c]).style.transition = '0.15s';
  }

  document.getElementById('settings-window-content').style.display = 'none';
  document.getElementById('settings-window-sidebar').style.display = 'block';
  document.getElementById('settings-window-sidebar').style.animation = 'system-fadein 0.25s';
}

function settingsappcategory(category){
  var categories = 'settings-window-categories-';
  var sidebarbtn = 'settings-window-sidebar-buttons-';
  var appearanceradio1 = document.getElementById('settings-window-categories-appearance-multibutton-button1');
  var selectedindicator = document.getElementById('system-input-sidebar-selected-indicator');

  for(c = 0; c < allcategories.length; c++){
    document.getElementById(categories + allcategories[c]).style.display = 'none';
    document.getElementById(categories + allcategories[c]).style.animation = 'system-fadeout 0.25s';
    document.getElementById(sidebarbtn + allcategories[c]).style.fontFamily = 'Inter Regular';
    document.getElementById(sidebarbtn + allcategories[c]).style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
    document.getElementById(sidebarbtn + allcategories[c]).style.left = 'calc(-0px)';
    document.getElementById(sidebarbtn + allcategories[c]).style.transition = '0.15s';
  }

  document.getElementById(categories + category).style.display = 'block';
  document.getElementById(categories + category).style.animation = 'system-fadein 0.25s';
  document.getElementById(sidebarbtn + category).style.fontFamily = 'Inter Med';
  document.getElementById(sidebarbtn + category).style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
  document.getElementById(sidebarbtn + category).style.left = 'calc(+0px)';
  document.getElementById(sidebarbtn + category).style.transition = '0.15s';
  

  if(category == 'users') {
    appearanceradio1.checked = 'true';
    selectedindicator.style.top = '8px';
    selectedindicator.style.transition = '0.15s';
  }

  if(category == 'appearance') {
    appearanceradio1.checked = 'true';
    selectedindicator.style.top = '50px';
    selectedindicator.style.transition = '0.15s';
  }

  selectedindicator.style.display = 'block';

  if(window.innerHeight > window.innerWidth){
    document.getElementById('settings-window-sidebar').style.display = 'none';
    document.getElementById('settings-window-content').style.display = 'block';
    document.getElementById(categories + 'users').style.display = 'none';
    document.getElementById(categories + 'appearance').style.display = 'none';

    document.getElementById(categories + category).style.display = 'block';
    document.getElementById(categories + category).style.display = 'block';
    selectedindicator.style.display = 'none';
  }
}

function changeusersettingsapp(unameinput = document.getElementById('settings-window-categories-users-input-uname'), userpwinput = document.getElementById('settings-window-categories-users-input-userpw')){
    localStorage.setItem('username', unameinput.value);
    document.getElementById('logon-screen-username').innerHTML = unameinput.value;
    document.getElementById('terminal-window-content-prompt').innerText = unameinput.value + '$:';

    //localStorage.setItem('userpw', userpwinput.value);
}

// Notepad

let notepadwindowopen = false;

function opennotepadapp(app = document.getElementById('notepad-window')){
  notepadwindowopen = true;
  var taskbarminimizedapps = document.getElementById('desktop-taskbar-minimized-apps');
  var miniapp = document.createElement('button');
  var miniappclass = document.createAttribute('class');
  var miniappid = document.createAttribute('id');
  var miniapponclick = document.createAttribute('onclick');
  var miniappclassname = miniappclass.value = 'desktop-taskbar-app-button';
  var miniappidname = miniappid.value = 'desktop-taskbar-notepad-app-button';
  var miniapponclickfunction = miniapponclick.value = 'minimizenotepadapp()';
  var resizebutton = document.getElementById("notepad-window-resize-button");
  var minimizebutton = document.getElementById("notepad-window-minimize-button");
  
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

  app.style.width = '1000px';
	app.style.height = '500px';
  app.style.top = 'calc(50% - calc(500px / 2))';
	app.style.left = 'calc(50% - calc(1000px / 2))';
  app.style.resize = "both";
  app.style.borderRadius = "4px";
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

  document.getElementById('notepad-window-content-text-editor').value = localStorage.getItem('notepad');

  restoreheight = app.style.height;
  restorewidth = app.style.width;
  restoretop = app.style.top;
  restoreleft = app.style.left;
}
  
function notepadappfocus(app = document.getElementById('notepad-window')){
  z++;
  app.style.zIndex = z;
  document.getElementById('desktop-taskbar').style.zIndex = z + 999;
  document.getElementById('desktop-menu-main').style.zIndex = z + 998;
  document.getElementById('desktop-menu-settings').style.zIndex = z + 998;
}

function closenotepadapp(app = document.getElementById('notepad-window'), miniapp = document.getElementById('desktop-taskbar-notepad-app-button')){
  var taskbarminimizedapps = document.getElementById('desktop-taskbar-minimized-apps');
  
  app.style.animation = 'closewindow 0.25s';
  app.style.animationDuration = '0.25s';
  setTimeout(() => {
    app.style.display = "none";
    miniapp.parentNode.removeChild(miniapp);
    localStorage.setItem('notepad', document.getElementById('notepad-window-content-text-editor').value);
    notepadwindowopen = false;
  }, 250);
}

function resizenotepadapp(app = document.getElementById("notepad-window")){
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

function minimizenotepadapp(app = document.getElementById("notepad-window"), miniapp = document.getElementById('desktop-taskbar-notepad-app-button')) {
  if (notepadwindowopen = true) {
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
      notepadappfocus()
    }
  }
  else {
    opennotepadapp()
  }
}

function sidenotepadapp(app = document.getElementById("notepad-window")){
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

function snapminnotepadapp(app = document.getElementById("notepad-window")){
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

function snapnotepadapp(app = document.getElementById("notepad-window")){
  var clienttop = window.event.clientY;
  var clientleft = window.event.clientX;

  if (clienttop <= 0) {
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

  if (clientleft <= 0) {
    sidenotepadapp()
    // document.getElementById("notepad-window-header-title").innerHTML = 'Detected';
  }

  if(clientleft >= (window.innerWidth - 1)){
    sidenotepadapp()
  }
}

function saverestorepos(app = document.getElementById('notepad-window')){
  restoreheight = app.style.height;
  restorewidth = app.style.width; 
  restoretop = app.style.top;
  restoreleft = app.style.left;
}

window.addEventListener("load", function(){
dragElement(document.getElementById("notepad-window"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("notepad-window-header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById("notepad-window-header").onmousedown = dragMouseDown;
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
    snapminnotepadapp();
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
    snapnotepadapp();
  }
}

});

// msgbox

function msgboxappfocus(id){
  var app = document.getElementById(`msgbox${id}-window`);
  z++;
  app.style.zIndex = z;

  document.getElementById('desktop-taskbar').style.zIndex = z + 999;
  document.getElementById('desktop-menu-main').style.zIndex = z + 998;
  document.getElementById('desktop-menu-settings').style.zIndex = z + 998;
}

function closemsgboxapp(id){  
  var desktop = document.getElementById('owner-user');
  var app = document.getElementById(`msgbox${id}-window`);

  app.style.animation = 'closewindow 0.25s';
  app.style.animationDuration = '0.25s';
  setTimeout(() => {
    desktop.removeChild(document.getElementById(`msgbox${id}-window`));
  }, 250);
}

function resizemsgboxapp(app = document.getElementById(`msgbox${msgid - 1}-window`)){
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

function minimizemsgboxapp(app = document.getElementById(`msgbox${msgid - 1}-window`)) {
  if (msgboxwindowopen = true) {
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
      msgboxappfocus()
    }
  }
  else {
    openmsgboxapp()
  }
}

function sidemsgboxapp(app = document.getElementById(`msgbox${msgid - 1}-window`)){
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

function snapminmsgboxapp(app = document.getElementById(`msgbox${msgid - 1}-window`)){
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

function snapmsgboxapp(app = document.getElementById(`msgbox${msgid - 1}-window`)){
  var clienttop = window.event.clientY;
  var clientleft = window.event.clientX;

  if (clienttop <= 0) {
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

  if (clientleft <= 0) {
    sidemsgboxapp()
    // document.getElementById("msgbox-window-header-title").innerHTML = 'Detected';
  }

  if(clientleft >= (window.innerWidth - 1)){
    sidemsgboxapp()
  }
}

function saverestorepos(app = document.getElementById(`msgbox${msgid - 1}-window`)){
  restoreheight = app.style.height;
  restorewidth = app.style.width; 
  restoretop = app.style.top;
  restoreleft = app.style.left;
}

var msgboxheader = document.getElementById(`msgbox${msgid}-window-header`);
  
  function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(`msgbox${msgid}-window-header`)) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById(`msgbox${msgid}-window-header`).onmousedown = dragMouseDown;
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
      elmnt.style.top = (elmnt.offsetTop - pos2) + `px`;
      elmnt.style.left = (elmnt.offsetLeft - pos1) + `px`;
    }
  
    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

