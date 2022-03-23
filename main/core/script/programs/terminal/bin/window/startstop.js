// Open and close functions - Terminal app

openapplication('terminal');

openterminalinfo();

function openterminalinfo(id = 'terminal') {
  /*Sets up variable values to make the code easier.*/

  var window = document.getElementById(`${id}-window`);
  var windowcontainer = `${id}-window-container`;
  var terminal = document.getElementById('terminal-window-terminal');
  var terminalprompt = document.getElementById('terminal-window-content-prompt');
  var resizebutton = document.getElementById(`${id}-window-resize-button`);
  var minimizebutton = document.getElementById(`${id}-window-minimize-button`);
  var menumain = document.getElementById('desktop-menu-main');
  var menusettings = document.getElementById('desktop-menu-settings');


  /*Sets up specific window style configuration*/

  window.style.width = '680px';
  window.style.height = '420px';
  window.style.top = '120px';
  window.style.left = '120px';
  window.style.resize = "both";
  window.style.borderRadius = "4px";

  /*Make window style configuration adaptable for mobile users*/

  if (window.innerHeight > window.innerWidth) {
    restoreheight = app.style.height;
    restorewidth = app.style.width;
    restoretop = app.style.top;
    restoreleft = app.style.left;
    window.style.width = '100%';
    window.style.height = 'calc(100% - 50px)';
    window.style.top = "0px";
    window.style.left = "0px";
    window.style.resize = "none";
    window.style.borderRadius = "0px";
    window.style.transition = "0.15s";
    resizebutton.style.display = 'none';
    minimizebutton.style.left = '31px';
    setTimeout(function () {
      window.style.transition = "none";
    }, 150)
  }

  setTimeout(() => {
    createDOMElement(windowcontainer, 'div', 'terminal-window-content-default-text', 'terminal-window-content-text');
    document.getElementById('terminal-window-content-default-text').innerHTML = "<span style='color: lightgray;'>Welcome to eclipse's terminal, type <span style='color: salmon;'>help</span> to see available commands.</span><br></br>";
  }, 000);

  terminalprompt.innerText = username + '$:';
  terminalprompt.style.color = 'yellow';
  terminal.focus();

  saveterminalrestorepos();
  terminalwindowopen = true;
  evaul = false;
  sudo = false;
}

function closeterminalappinfo() {
  var textelements = document.getElementsByClassName('terminal-window-content-text');
  var appcontainer = document.getElementById('terminal-window-container');

  setTimeout(() => {
    while (textelements.length > 0) appcontainer.removeChild(textelements[0]);
    removeDOMElement('desktop-taskbar-terminal-app-button');
  }, 250);
  removeDOMElement('terminal-main');
  removeDOMElement('terminal-core');
  removeDOMElement('terminal-startstop');
  removeDOMElement('terminal-window-functions');
}