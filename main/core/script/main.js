// Main Code
let build = 55;
let isbeta = true;
let betastage = 1;
let version = '1.0.0';
let systemname = 'Eclipse Cloud Operating System (ECOS)';
let versionname = 'Beta';
let permlevel = 0;
var date = new Date();

if (localStorage.getItem('auth') == undefined) {
  localStorage.setItem('auth', 'true');
}

if (localStorage.getItem('username') == undefined) {
  localStorage.setItem('username', 'owner');
}

if (localStorage.getItem('notepad') == undefined) {
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

if (localStorage.getItem('userwp') == undefined) {
  localStorage.setItem('userwp', '../../resources/images/background/default.jpg')
}

if (localStorage.getItem('txtfilelist') == undefined) {
  localStorage.setItem('txtfilelist', '')
}

var scripts = ['../script/desktop.js', '../script/menu.js', '../script/main-programs/welcome-program.js', '../script/auth.js'];

if (localStorage.getItem('loadscript') == undefined) {
  localStorage.setItem('loadscript', JSON.stringify(scripts));
}

var loadscripts = JSON.parse(localStorage.getItem('loadscript'));

function loadscript() {
  for (n = (loadscripts.length - 1); n > -1; n--) {
    createDOMScript(`system-${loadscripts[n].slice(10, -3)}`, 'text/javascript', loadscripts[n]);
  }
}

setTimeout(() => {
  loadscript();
}, 00);

var username = localStorage.getItem('username');
var userpw = localStorage.getItem('userpw');

setInterval(function time() {
  if (window.innerHeight > window.innerWidth) {
    var date = new Date();
    var DateMonths = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    var DateDays = 0;
    var DateHours = 0;
    var DateMinutes = 0;
    var DateSeconds = 0;
    if (date.getDate() < 10) { DateDays = '0' + date.getDate(); } else { DateDays = date.getDate(); }
    if (date.getHours() < 10) { DateHours = '0' + date.getHours(); } else { DateHours = date.getHours(); }
    if (date.getMinutes() < 10) { DateMinutes = '0' + date.getMinutes(); } else { DateMinutes = date.getMinutes(); }
    if (date.getSeconds() < 10) { DateSeconds = '0' + date.getSeconds(); } else { DateSeconds = date.getSeconds(); }

    document.getElementById('desktop-taskbar-clock').innerHTML = '<span style="opacity: 0.6; margin-right: 4px;">' + DateHours + ':' + DateMinutes + '</span>' + '  ' + DateMonths[date.getMonth()].substr(0, 3) + ', ' + DateDays + ', ' + date.getFullYear().toString().substr(2, 4);
  } else {
    var date = new Date();
    var DateMonths = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    var DateDays = 0;
    var DateHours = 0;
    var DateMinutes = 0;
    var DateSeconds = 0;
    if (date.getDate() < 10) { DateDays = '0' + date.getDate(); } else { DateDays = date.getDate(); }
    if (date.getHours() < 10) { DateHours = '0' + date.getHours(); } else { DateHours = date.getHours(); }
    if (date.getMinutes() < 10) { DateMinutes = '0' + date.getMinutes(); } else { DateMinutes = date.getMinutes(); }
    if (date.getSeconds() < 10) { DateSeconds = '0' + date.getSeconds(); } else { DateSeconds = date.getSeconds(); }

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

  if (date.getDate() < 10) { compdays = '0' + date.getDate(); } else { compdays = date.getDate(); }
  if (date.getHours() < 10) { comphours = '0' + date.getHours(); } else { comphours = date.getHours(); }
  if (date.getMinutes() < 10) { compminutes = '0' + date.getMinutes(); } else { compminutes = date.getMinutes(); }

  var comp = compdays + compmonths[date.getMonth()] + compyear + comphours + compminutes;

  const bootbetatext = document.getElementById('bootscreen-text-default-main');
  const desktopbetatext = document.getElementById('desktop-beta-info');

  bootbetatext.innerHTML = 'beta ' + betastage + ' build ' + build;
  desktopbetatext.innerHTML = 'Eclipse Cloud Operating System, Beta ' + betastage + ', Build ' + build + ' Compilation: ' + comp + '.';
}, 250);

window.addEventListener('load', function () {
  const bootscreen = document.getElementById('bootscreen');
  bootscreen.className += '.done';
});

window.addEventListener('keyup', event => {
  if (event.keyCode == 84 && event.ctrlKey && event.altKey) {
    createDOMScript(`terminal-main`, `text/javascript`, `../script/main-programs/terminal/main.js`);
  }

  if (event.keyCode == 77 && event.ctrlKey) {
    menutrigger();
  }
});

window.oncontextmenu = function () { return false };

// Main Functions

/*Create Functions*/

function createDOMScript(id, type, src) {
  var script = document.createElement('script');
  document.head.appendChild(script);

  createDOMAttribute(script, 'id', id);
  createDOMAttribute(script, 'type', type);
  createDOMAttribute(script, 'src', src);
}

function createDOMElement(mother, child, id, cl, evnt, link, css) {
  createelmnt = document.createElement(child);

  document.getElementById(mother).appendChild(createelmnt);
  createDOMAttribute(createelmnt, 'id', id);
  createDOMAttribute(createelmnt, 'class', cl);
  createDOMAttribute(createelmnt, evnt, link);
  createDOMAttribute(createelmnt, 'style', css);
}

function createDOMAttribute(elmnt, eAtr, value) {
  var createatr = document.createAttribute(eAtr);
  var createatrvalue = createatr.value = value;

  elmnt.createatrvalue;
  elmnt.setAttributeNode(createatr);
}

function createWindow(mother, id) {
  var desktop = document.getElementById(mother);
  var window = document.createElement('div');

  desktop.appendChild(window);
  createDOMAttribute(window, 'id', `${id}-window`);
  createDOMAttribute(window, 'class', `window`);

  window.style.display = 'block';
  window.style.animation = 'openwindow 0.25s';
}

function createWindowHeader(mother, mothername, type, scheme, title, windowid) {
  var window = document.getElementById(mother);
  var header = document.createElement('div');

  if (type === 0) {
    window.appendChild(header);
    createDOMAttribute(header, 'id', `${mother}-header`);
    createDOMAttribute(header, 'class', `window-header`);

    if (scheme === 0) {
      createButton(header, '', `${mother}-header-close-button`, 'window-header-close-button', 'onclick', `closeWindow('${mother}');`);
      createButton(header, '', `${mother}-header-resize-button`, 'window-header-resize-button', 'onclick', `${mothername}ResizeWindow('${mother.slice(0, -7)}-window');`);
      createButton(header, '', `${mother}-header-minimize-button`, 'window-header-minimize-button', 'onclick', `minimizeWindow('${mothername + windowid}-window', ${mothername}Open)`);
      createText(header, title, `${mother}-header-title`, 'window-header-title', '');
    }

    if (scheme === 1) {
      createButton(header, '', `${mother}-header-close-button`, 'window-header-close-button', 'onclick', `closeWindow('${mother}')`);
      createButton(header, '', `${mother}-header-minimize-button`, 'window-header-minimize-button', 'onclick', `${mothername}ResizeWindow('${mother.slice(0, -7)}-window');`);
      createText(header, title, `${mother}-header-title`, 'window-header-title', '');
    }

    if (scheme === 2) {
      createButton(header, '', `${mother}-header-close-button`, 'window-header-close-button', 'onclick', `closeWindow('${mother}')`);
      createText(header, title, `${mother}-header-title`, 'window-header-title', '');
    }
  }
  if (type === 1) {
    window.appendChild(header);
    createDOMAttribute(header, 'id', `${mother}-header`);
    createDOMAttribute(header, 'class', `window-header`);
  }
}

function createText(mother, value, id, cl, css) {
  var text = document.createElement('p');
  mother.appendChild(text);
  createDOMAttribute(text, 'id', id);
  createDOMAttribute(text, 'class', cl);
  createDOMAttribute(text, 'style', css);
  text.innerText = value;
}

function createButton(mother, value, id, cl, evnt, link, css) {
  var button = document.createElement('button');

  mother.appendChild(button);
  createDOMAttribute(button, 'id', id);
  createDOMAttribute(button, 'class', cl);
  createDOMAttribute(button, evnt, link);
  createDOMAttribute(button, 'style', css);
  button.innerText = value;
}

function createMenuButton(mother, value, id, cl, evnt, link, icon, iconinfo) {
  var button = document.createElement('button');

  mother.appendChild(button);
  createDOMAttribute(button, 'id', id);
  createDOMAttribute(button, 'class', cl);
  createDOMAttribute(button, 'style', `background-image: url("${icon}"); background-size: ${iconinfo.slice(0, 9)}; background-position: ${iconinfo.slice(-9)};`);
  createDOMAttribute(button, evnt, link);
  button.innerText = value;
}

function createInput(mother, value, placeholder, type, id, cl, evnt, link, css) {
  var input = document.createElement('input');

  mother.appendChild(input);
  createDOMAttribute(input, 'placeholder', placeholder);
  createDOMAttribute(input, 'type', type);
  createDOMAttribute(input, 'id', id);
  createDOMAttribute(input, 'class', cl);
  createDOMAttribute(input, 'style', css);
  createDOMAttribute(input, evnt, link);
  input.value = value;
  input.spellcheck = 'false';
}

function createTerminalLine(windowId, content) {
  createDOMElement(
    `terminal${windowId}-window-container`,
    `div`,
    `terminal${windowId}-window-line${lines}`,
    `terminal-window-content-text`
  );

  document.getElementById(`terminal${windowId}-window-line${lines}`).innerHTML = content;

  lines++;
}

/* Change Values Functions */

function changeTerminalPrompt(windowId, content) {
  document.getElementById(`terminal${windowId}-window-content-prompt`).innerHTML = content;
}

/*Remove window functions*/

function removeDOMElementById(child) {
  var elmnt = document.getElementById(child);

  elmnt.parentNode.removeChild(elmnt);
}

function removeDOMElement(child) {
  child.parentNode.removeChild(child);
}

/*Convert Functions*/

function convert(command, value) {
  if (command == 'toPixels') {
    return value + 'px';
  }

  if (command == 'toInt') {
    return parseInt(value, 10);
  }
}

// Responsivity Algorithm

function screenratio(desktop, mobile) {
  if (window.innerHeight > window.innerWidth) {
    mobile;
  } else {
    desktop;
  }
}

// Informational Terminal Functions

function showKeyNames(dicionary) {
  for (n = (Object.keys(dicionary).length - 1); n > -1; n--) {
    createDOMElement('terminal-window-container', 'div', `line${lines}`, 'terminal-window-content-text');
    document.getElementById(`line${lines}`).innerText = Object.keys(dicionary)[n];
    lines++;
  }
}