// Main
let build = 16;
let isbeta = true;
let betastage = 1;
let version = '1.0.0';
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
function loginauth(user = document.getElementById('owner-user'), logininput = document.getElementById('logon-screen-input-text')){
  if(event.keyCode == 13){
    if(logininput.value == userpw){
      user.style.display = 'table';
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
  app.focus();
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

  restoreheight = app.style.height;
  restorewidth = app.style.width;
  restoretop = app.style.top;
  restoreleft = app.style.left;
}

function demoappfocus(app = document.getElementById('demo-window')){
  z++;
  app.style.zIndex = z;
  app.focus();
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
      demoappfocus()
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

  app.style.width = '680px';
	app.style.height = '420px';
  app.style.top = '120px';
	app.style.left = '120px';
  app.style.resize = "both";
  app.style.borderRadius = "4px";
  calculator.value = 'Eclipse Cloud Operating System (ECOS) Codename Sunset, Version ' + version +', Build '+ build + ', '+ today + '\n\n> ';
  app.style.zIndex = z++;
  calculator.focus();

  calculatorrestoreheight = app.style.height;
  calculatorrestorewidth = app.style.width;
  calculatorrestoretop = app.style.top;
  calculatorrestoreleft = app.style.left;
  calculatorwindowopen = true;
}

function calculatorappfocus(app = document.getElementById('calculator-window')){
  z++;
  app.style.zIndex = z;
  app.focus();
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
      calculatorappfocus()
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

function calculator(calculator = document.getElementById("calculator-window-calculator")){
  if(event.keyCode == 13){
    if(calculator.value.includes("exit")){
      calculator.value = (calculator.value).toUpperCase() + '\n[EXIT] Exitting calculator...\n';
       closecalculatorapp()
    }

    if(calculator.value.includes("info")){
      calculator.value = (calculator.value).toUpperCase() + '\n[INFO] Eclipse Cloud Operating System (ECOS), Codename Sunset\n[VERSION] ' + version +', Build '+ build + ', '+ today + '\n';
    }

    if(calculator.value.includes("help")){
      calculator.value = (calculator.value).toUpperCase() + '\n[HELP] Available commands: INFO, CLEAR, EXIT, ISWORKING, COMP.UPDATE. Please type all commands in lowercase.\n';
    }

    if(calculator.value.includes("andre")){
      calculator.value = (calculator.value).toUpperCase() + '\nSer matemáticamente perfeito.\n';
    }

    if(calculator.value.includes("clear")){
      calculator.value = '';
    }

    if(calculator.value.includes("isworking")){
      calculator.value = (calculator.value).toUpperCase() + '\nyes\n';
    }

    if(calculator.value.includes("uniaoss")){
      calculator.value = (calculator.value).toUpperCase() + '\na bond that will never be broken.\n';
    }

    if(calculator.value.includes("igorcareca")){
      const desktop = document.getElementById('owner-user');
      desktop.style.backgroundImage = "url('../../res/images/background/igor careca.png')";
      desktop.style.backgroundSize = 'contain';
      calculator.value = (calculator.value).toUpperCase() + '\nRunning IGORCARECA.png...\n';
    }

    if(calculator.value.includes("-r")){
      const desktop = document.getElementById('owner-user');
      desktop.style.backgroundImage = "url('../../res/images/background/default.jpg')";
      calculator.value = (calculator.value).toUpperCase() + '\nRunning default.png...\n';
    }

    if(calculator.value.includes("comp.update")){
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

      calculator.value = (calculator.value).toUpperCase() + '\nThe current compilation date is ' + compdays + compmonths[date.getMonth()] + compyear + comphours + compminutes + '.\n';
      document.getElementById('desktop-beta-info').innerHTML = 'Confidential Build. Eclipse Cloud Operating System, Beta ' + betastage + ', Build ' + build + ' Compilation: ' + comp;
    }

    calculator.value = (calculator.value) + '> ';
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

  app.style.width = '300px';
	app.style.height = '420px';
  app.style.top = '120px';
	app.style.left = '120px';
  app.style.resize = "both";
  app.style.borderRadius = "4px";
  app.style.zIndex = z++;
  calculator.focus();

  calculatorrestoreheight = app.style.height;
  calculatorrestorewidth = app.style.width;
  calculatorrestoretop = app.style.top;
  calculatorrestoreleft = app.style.left;
  calculatorwindowopen = true;
}

function calculatorappfocus(app = document.getElementById('calculator-window')){
  z++;
  app.style.zIndex = z;
  app.focus();
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
      calculatorappfocus()
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

