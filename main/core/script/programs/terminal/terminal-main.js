// Terminal Application - Main Code
var terminalrestoreheight;
var terminalrestorewidth;
var terminalrestoretop;
var terminalrestoreleft;
var terminalwindowopen = false;

function callterminalscripts() {
  var appname = 'terminal';
  
  createDOMScript(`${appname}-window-functions`, 'text/javascript', '../script/programs/terminal/bin/window/window-functions.js');
  createDOMScript(`${appname}-startstop`, 'text/javascript', '../script/programs/terminal/bin/window/startstop.js');
  createDOMScript(`${appname}-core`, 'text/javascript', '../script/programs/terminal/bin/terminal-core.js');
}

callterminalscripts();