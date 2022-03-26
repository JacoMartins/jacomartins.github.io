// Terminal Application - Main Code
var terminalrestoreheight;
var terminalrestorewidth;
var terminalrestoretop;
var terminalrestoreleft;
var terminalOpen = true;
sudo = false;
passwd = false;
newPasswd = false;
conPasswd = false;
evaul = false;

if (terminalWindowId === undefined) {
  var terminalWindowId = 0;
}

function callterminalscripts() {
  var appname = 'terminal';

  if (!document.getElementById(`${appname}-window-functions`)) {
    createDOMScript(`${appname}-window-functions`, 'text/javascript', `../script/main-programs/${appname}/bin/window/window-functions.js`);
    createDOMScript(`${appname}-core`, 'text/javascript', `../script/main-programs/${appname}/bin/${appname}-core.js`);
  } else {
    removeDOMElementById(`${appname}-main`);
  }
}

callterminalscripts();

function terminalBuildWindow() {
  // terminal Basic Window Structure

  z++;

  createWindow('owner-user', `terminal${terminalWindowId}`);

  document.getElementById(`terminal${terminalWindowId}-window`).style.width = '680px';
  document.getElementById(`terminal${terminalWindowId}-window`).style.height = '420px';
  document.getElementById(`terminal${terminalWindowId}-window`).style.top = '120px';
  document.getElementById(`terminal${terminalWindowId}-window`).style.left = '120px';
  document.getElementById('desktop-taskbar').style.zIndex = z + 999;
  document.getElementById('desktop-menu-main').style.zIndex = z + 998;
  document.getElementById('desktop-menu-settings').style.zIndex = z + 998;

  document.getElementById(`terminal${terminalWindowId}-window`).style.zIndex = z;

  createDOMAttribute(document.getElementById(`terminal${terminalWindowId}-window`), 'onmousedown', `focusWindow("terminal${terminalWindowId}-window");`);

  createDOMAttribute(document.getElementById(`terminal${terminalWindowId}-window`), 'onclick', `dragElement('terminal${terminalWindowId}-window', 'terminal${terminalWindowId}-window-header', terminalrestorewidth, terminalrestoreheight);`);

  createWindowHeader(`terminal${terminalWindowId}-window`, 'terminal', 0, 0, 'Terminal (Beta)', terminalWindowId);

  createButton(document.getElementById('desktop-taskbar-minimized-apps'), '', `desktop-taskbar-terminal${terminalWindowId}-app-button`, 'desktop-taskbar-app-button', 'onclick', `minimizeWindow("terminal${terminalWindowId}-window", terminalOpen);`,
    'background-image: url("../script/main-programs/terminal/resources/icon12x.png"); background-size: 16px 12px;'
  );

  createDOMElement(
    `terminal${terminalWindowId}-window`,
    'div',
    `terminal${terminalWindowId}-window-content`,
    'window-content',
    `onclick`,
    `terminalPromptFocus(${terminalWindowId})`,
    // CSS
    `display: block;
    overflow: auto;`);

  createDOMElement(
    `terminal${terminalWindowId}-window-content`,
    'div',
    `terminal${terminalWindowId}-window-container`,
    '',
    'onclick',
    `terminalPromptFocus(${terminalWindowId});`,
    // CSS

    ` background-color: black;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        overflow: visible;`
  );

  createDOMElement(
    `terminal${terminalWindowId}-window-container`,
    'div',
    `terminal${terminalWindowId}-window-content-line`,
    `terminal-window-content-line`
  );

  createDOMElement(
    `terminal${terminalWindowId}-window-content-line`,
    `span`,
    `terminal${terminalWindowId}-window-content-prompt`,
    `terminal-window-content-prompt`,
    undefined, undefined,
    `color: yellow;`
  );

  createInput(
    document.getElementById(`terminal${terminalWindowId}-window-content-line`),
    '',
    '',
    'text',
    `terminal${terminalWindowId}-window-terminal`,
    `terminalinput`,
    `onkeydown`,
    `terminalCommand(${terminalWindowId}, 'terminal${terminalWindowId}-window-terminal');`
  );

  document.getElementById(`terminal${terminalWindowId}-window-content-prompt`).innerText = username + '$:';
  document.getElementById(`terminal${terminalWindowId}-window-content-prompt`).style.color = 'yellow';
  document.getElementById(`terminal${terminalWindowId}-window-terminal`).focus();

  dragElement(`terminal${terminalWindowId}-window`, `terminal${terminalWindowId}-window-header`, terminalrestorewidth, terminalrestoreheight);

  if (document.getElementById(`desktop-menu-main`).style.display = "block") {
    document.getElementById(`desktop-menu-main`).style.display = "none";
    document.getElementById(`desktop-menu-settings`).style.display = "none";
  }

  terminalrestorewidth = document.getElementById(`terminal${terminalWindowId}-window`).style.width;
  terminalrestoreheight = document.getElementById(`terminal${terminalWindowId}-window`).style.height;
  terminalrestoreleft = document.getElementById(`terminal${terminalWindowId}-window`).style.left;
  terminalrestoretop = document.getElementById(`terminal${terminalWindowId}-window`).style.top;

  terminalWindowId++;
}

/* function openterminalapp(app = document.getElementById('terminal-window'), miniapp = document.getElementById('desktop-taskbar-terminal-app-button'), appcontainer = document.getElementById('terminal-window-container')){
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
} */

terminalBuildWindow();