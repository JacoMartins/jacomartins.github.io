// Terminal Application - Main Code

var terminalrestoreheight;
var terminalrestorewidth;
var terminalrestoretop;
var terminalrestoreleft;
var terminalOpen = true;
var lines = 0;
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
  // Terminal Basic Window Structure

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
    document.getElementById(`terminal${terminalWindowId}-window`),
    'div',
    `terminal${terminalWindowId}-window-content`,
    'window-content',
    `onclick`,
    `terminalPromptFocus(${terminalWindowId})`,
    // CSS
    `display: block;
    overflow: auto;`);

  createDOMElement(
    document.getElementById(`terminal${terminalWindowId}-window-content`),
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
    document.getElementById(`terminal${terminalWindowId}-window-container`),
    'div',
    `terminal${terminalWindowId}-window-content-line`,
    `terminal-window-content-line`
  );

  createDOMElement(
    document.getElementById(`terminal${terminalWindowId}-window-content-line`),
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

  document.getElementById(`terminal${terminalWindowId}-window-content-prompt`).innerText = `${email.split('@')[0]}@${username}:$`;
  document.getElementById(`terminal${terminalWindowId}-window-content-prompt`).style.color = 'yellow';
  document.getElementById(`terminal${terminalWindowId}-window-terminal`).focus();
  
  createTerminalLine(terminalWindowId, "<span style='color: lightgray;'>Welcome to eclipse's terminal, type <span style='color: salmon;'>help</span> to see available commands.</span><br></br>")

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

terminalBuildWindow();