// Desktop - Main Code


var desktop = document.getElementById(`owner-user`);

var z = 0;

desktop.addEventListener('contextmenu', function () {
  var creatediv = document.createElement('div');
  var divid = document.createAttribute('id');
  var dividvalue = divid.value = `desktop-context-menu`;
  var divclass = document.createAttribute('class');
  var divclassvalue = divclass.value = `desktop-menu`;

  var contextmenu = document.getElementById(`desktop-context-menu`);

  if (contextmenu) {
    contextmenu.style.position = 'absolute';
    contextmenu.style.top = convert('toPixels', window.event.clientY);
    contextmenu.style.left = convert('toPixels', window.event.clientX);
    creatediv.style.animation = 'openwindow 0.15s ease-out';

    contextmenu.style.width = convert('toPixels', 180);
  } else {
    desktop.appendChild(creatediv);
    creatediv.dividvalue;
    creatediv.setAttributeNode(divid);
    creatediv.divclassvalue;
    creatediv.setAttributeNode(divclass);

    creatediv.style.position = 'absolute';
    creatediv.style.top = convert('toPixels', window.event.clientY);
    creatediv.style.left = convert('toPixels', window.event.clientX);
    creatediv.style.animation = 'openwindow 0.15s ease-out';

    creatediv.style.height = 'auto';
    creatediv.style.width = convert('toPixels', 180);
    creatediv.style.zIndex = -z;

    createMenuButton(
      creatediv,
            /* Button Value */ 'Terminal',
            /* Button Id */ 'desktop-context-menu-button-terminal',
            /* Button Class */ 'desktop-menu-button',
            /* Button Event */ 'onclick',
            /* Button Link */ 'openterminalapp()',
            /* Button Icon */ '../../resources/images/icons/imageres/.png',
            /* Button Icon Size and Position */ '16px 12px 09px 09px'
    );

    createMenuButton(
      creatediv,
            /* Button Value */ 'Customize',
            /* Button Id */ 'desktop-context-menu-button-customize',
            /* Button Class */ 'desktop-menu-button',
            /* Button Event */ 'onclick',
            /* Button Link */ 'opensettingsapp(); settingsappcategory("appearance");',
            /* Button Icon */ '../../resources/images/icons/imageres/settings-small.png',
            /* Button Icon Size and Position */ '12px 12px 09px 09px'
    );
  }
});

window.addEventListener('click', function () {
  var contextmenu = document.getElementById(`desktop-context-menu`);
  var notepadfilemenu = document.getElementById(`notepad-window-content-taskbar-file-menu`);
  var htmlviewerfilemenu = document.getElementById(`htmlviewer-window-content-taskbar-file-menu`);
  var iframefilemenu = document.getElementById(`iframe-window-content-taskbar-file-menu`);

  var menumain = document.getElementById('desktop-menu-main');
  var menusettings = document.getElementById('desktop-menu-settings');

  var e = window.event;

  if (contextmenu) {
    desktop.removeChild(contextmenu);
  }

  if (notepadfilemenu) {
    notepadfilemenuleft = parseInt(notepadfilemenu.style.left, 10);
    notepadfilemenuright = (parseInt(notepadfilemenu.style.left, 10) + parseInt(notepadfilemenu.style.width, 10));
    notepadfilemenutop = parseInt(notepadfilemenu.style.top, 10);
    notepadfilemenubot = (parseInt(notepadfilemenu.style.top, 10) + parseInt(notepadfilemenu.style.left, 10));

    if (e.clientX < notepadfilemenuleft || e.clientX > notepadfilemenuleft || e.clientY < notepadfilemenutop || e.clientY > notepadfilemenubot) {
      desktop.removeChild(notepadfilemenu);
    }
  }

  if (htmlviewerfilemenu) {
    htmlviewerfilemenuleft = parseInt(htmlviewerfilemenu.style.left, 10);
    htmlviewerfilemenuright = (parseInt(htmlviewerfilemenu.style.left, 10) + parseInt(htmlviewerfilemenu.style.width, 10));
    htmlviewerfilemenutop = parseInt(htmlviewerfilemenu.style.top, 10);
    htmlviewerfilemenubot = (parseInt(htmlviewerfilemenu.style.top, 10) + parseInt(htmlviewerfilemenu.style.left, 10));

    if (e.clientX < htmlviewerfilemenuleft || e.clientX > htmlviewerfilemenuleft || e.clientY < htmlviewerfilemenutop || e.clientY > htmlviewerfilemenubot) {
      desktop.removeChild(htmlviewerfilemenu);
    }
  }

  if (iframefilemenu) {
    iframefilemenuleft = parseInt(iframefilemenu.style.left, 10);
    iframefilemenuright = (parseInt(iframefilemenu.style.left, 10) + parseInt(iframefilemenu.style.width, 10));
    iframefilemenutop = parseInt(iframefilemenu.style.top, 10);
    iframefilemenubot = (parseInt(iframefilemenu.style.top, 10) + parseInt(iframefilemenu.style.left, 10));

    if (e.clientX < iframefilemenuleft || e.clientX > iframefilemenuleft || e.clientY < iframefilemenutop || e.clientY > iframefilemenubot) {
      desktop.removeChild(iframefilemenu);
    }
  }
});

// 

var msgid = 0;

function focusWindow(id) {
  var app = document.getElementById(id);
  z++;
  app.style.zIndex = z;

  document.getElementById('desktop-taskbar').style.zIndex = z + 999;
  document.getElementById('desktop-menu-main').style.zIndex = z + 998;
  document.getElementById('desktop-menu-settings').style.zIndex = z + 998;
}

function closeWindow(id) {
  var desktop = document.getElementById('owner-user');
  var wd = document.getElementById(id);

  wd.style.animation = 'closewindow 0.25s';
  wd.style.animationDuration = '0.25s';
  setTimeout(() => {
    desktop.removeChild(document.getElementById(id));
    document.getElementById(`desktop-taskbar-${id.slice(0, -7)}-app-button`).parentNode.removeChild(document.getElementById(`desktop-taskbar-${id.slice(0, -7)}-app-button`));
    removeDOMElement(`${id.slice(0, -8)}-main`);
    removeDOMElement(`${id.slice(0, -8)}-window-functions`);
    removeDOMElement(`${id.slice(0, -8)}-startstop`);
    removeDOMElement(`${id.slice(0, -8)}-core`);
  }, 250);
}

var restorewidth;
var restoreheight;
var restoreleft;
var restoretop;

function resizeWindow(id) {
  var wd = document.getElementById(id);

  if (wd.style.width === '100%') {
    wd.style.resize = "both";
    wd.style.borderRadius = "4px";
    wd.style.animation = 'maximizewindow 0.25s';
    wd.style.transition = "0.15s";
    setTimeout(function () {
      wd.style.transition = "none";
    }, 150)
  } else {
    wd.style.width = '100%';
    wd.style.height = 'calc(100% - 40px)';
    wd.style.top = "40px";
    wd.style.left = "0px";
    wd.style.resize = "none";
    wd.style.borderRadius = "0px";
    wd.style.transition = "0.15s";
    setTimeout(function () {
      wd.style.transition = "none";
    }, 150)
  }
}

function minimizeWindow(id, isopen) {
  var wd = document.getElementById(id);

  if (isopen === true) {
    if (wd.style.display === 'block') {
      wd.style.animation = 'minimizewindow 0.25s';
      wd.style.animationDuration = '0.25s';
      setTimeout(() => {
        wd.style.display = 'none';
      }, 250);
    }
    else {
      wd.style.display = 'block';
      wd.style.animation = 'callwindow 0.25s';
      focusWindow(id);
    }
  }
  else {
    createDOMScript(`${appname}-startstop`, 'text/javascript', '../script/main-programs/calculator/bin/window/startstop.js');
    createDOMScript(`${appname}-window-functions`, 'text/javascript', '../script/main-programs/calculator/bin/window/window-functions.js');
    createDOMScript(`${appname}-core`, 'text/javascript', '../script/main-programs/calculator/bin/calculator-core.js');  
  }
}

function splitWindow(id) {
  var wd = document.getElementById(id);

  if (convert('toInt', wd.style.left) < 0) {
    wd.style.left = '0px';
    wd.style.top = '40px';
    wd.style.height = 'calc(100% - 40px)';
    wd.style.width = '50%';
    wd.style.resize = "none";
    wd.style.borderRadius = "0px";
    wd.style.transition = "0.15s";
    setTimeout(function () {
      wd.style.transition = "none";
    }, 150)
  }

  if (convert('toInt', wd.style.left) > (window.innerWidth - convert('toInt', wd.style.width))) {
    wd.style.left = '50%';
    wd.style.top = '40px';
    wd.style.height = 'calc(100% - 40px)';
    wd.style.width = '50%';
    wd.style.resize = "none";
    wd.style.borderRadius = "0px";
    wd.style.transition = "0.15s";
    setTimeout(function () {
      wd.style.transition = "none";
    }, 150)
  }
}

function snapResizeWindow(id, restorewidth, restoreheight) {
  var wd = document.getElementById(id);
  var leftpos = window.event.clientX - (convert('toInt', restorewidth) * 0.5);

  if (wd.style.height === 'calc(100% - 40px)') {
    wd.style.width = restorewidth;
    wd.style.height = restoreheight;
    wd.style.left = convert('toPixels', leftpos);
    wd.style.top = '40px';
    wd.style.resize = "both";
    wd.style.borderRadius = "4px";
  }

  //console.log(restoreheight, '\n', restorewidth);
}

function snapWindow(app = document.getElementById(`${msgid - 1}-window`)) {
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
      setTimeout(function () {
        app.style.transition = "none";
      }, 150)
    }
  }

  if (clientleft <= 0) {
    splitWindow()
    // document.getElementById("-window-header-title").innerHTML = 'Detected';
  }

  if (clientleft >= (window.innerWidth - 1)) {
    splitWindow()
  }
}

function dragElement(elmnt, puller, restorewidth, restoreheight) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(puller)) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(puller).onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    document.getElementById(elmnt).onmousedown = dragMouseDown;
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
    document.getElementById(elmnt).style.top = (document.getElementById(elmnt).offsetTop - pos2) + `px`;
    document.getElementById(elmnt).style.left = (document.getElementById(elmnt).offsetLeft - pos1) + `px`;
    snapResizeWindow(elmnt, restorewidth, restoreheight);
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Menu

createMenuButton(
  document.getElementById("desktop-menu-essential-category"),
  'Calculator',
  "desktop-menu-button-calculator",
  "desktop-menu-button",
  "onclick",
  "createDOMScript(`calculator-main`, `text/javascript`, `../script/main-programs/calculator/main.js`);",
  "../script/main-programs/calculator/resources/icon12x.png",
  '9px 12px 12px 09px'
)

createMenuButton(
  document.getElementById("desktop-menu-essential-category"),
  'Terminal',
  "desktop-menu-button-terminal",
  "desktop-menu-button",
  "onclick",
  "createDOMScript(`terminal-main`, `text/javascript`, `../script/main-programs/terminal/main.js`);",
  "../../resources/images/icons/imageres/terminal-small.png",
  '16px 12px 09px 09px'
)

createMenuButton(
  document.getElementById("desktop-menu-essential-category"),
  'Notepad',
  "desktop-menu-button-notepad",
  "desktop-menu-button",
  "onclick",
  "createDOMScript(`notepad-main`, `text/javascript`, `../script/main-programs/textpros/notepad-main.js`);",
  "../../resources/images/icons/imageres/app-small.png",
  '12x 12px 09px 09px'
)