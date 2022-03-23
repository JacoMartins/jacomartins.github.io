// Main Code
let build = 48;
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
})

window.addEventListener('keyup', event => {
  if (event.keyCode == 84 && event.ctrlKey && event.altKey) {
    openterminalapp();
  }

  if (event.keyCode == 77 && event.ctrlKey) {
    menutrigger();
  }
})

document.body.oncontextmenu = function () { return false };

/*Create Functions*/

function createDOMScript(id, type, src) {
  var script = document.createElement('script');
  document.head.appendChild(script);

  createDOMAttribute(script, 'id', id);
  createDOMAttribute(script, 'type', type);
  createDOMAttribute(script, 'src', src);
}

function createDOMElement(mother, child, id, cl, event, code) {
  createelmnt = document.createElement(child);

  document.getElementById(mother).appendChild(createelmnt);
  createDOMAttribute(createelmnt, 'id', id);
  createDOMAttribute(createelmnt, 'class', cl);
  createDOMAttribute(createelmnt, event, code);
}

function createDOMAttribute(id, eAtr, value) {
  var createatr = document.createAttribute(eAtr);
  var createatrvalue = createatr.value = value;

  id.createatrvalue;
  id.setAttributeNode(createatr);
}

function createWindow(id) {
  var window = document.createElement('div');

  desktop.appendChild(window);
  createDOMAttribute(window, 'id', `${id}-window`);
  createDOMAttribute(window, 'class', `window`);
}

function createWindowHeader(mother, id) {
  var header = document.createElement('window');

  desktop.appendChild(window);
  createDOMAttribute(window, 'id', `${id}-window`);
  createDOMAttribute(window, 'class', `window`);
}

function createMenuButton(mother, value, id, cl, evnt, link, icon) {
  var button = document.createElement('button');

  mother.appendChild(button);
  createDOMAttribute(button, 'id', id);
  createDOMAttribute(button, 'class', cl);
  createDOMAttribute(button, 'style', `background-image: url("${icon}");`);
  createDOMAttribute(button, evnt, link);
  button.innerText = value;
}

/*Remove window functions*/

function removeDOMElement(child) {
  var elmnt = document.getElementById(child);

  elmnt.parentNode.removeChild(elmnt);
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

/*Window functions*/

function openapplication(id) {
  /*Sets up variable values to make the code easier.*/
  var window = document.getElementById(`${id}-window`);
  var resizebutton = document.getElementById(`${id}-window-resize-button`);
  var minimizebutton = document.getElementById(`${id}-window-minimize-button`);
  var menumain = document.getElementById('desktop-menu-main');
  var menusettings = document.getElementById('desktop-menu-settings');

  createDOMElement(
    /*Mother Element*/ 'desktop-taskbar-minimized-apps',
    /*Child Element*/ 'div',
    /*Puts an ID attribute in your new element*/ `desktop-taskbar-${id}-app-button`,
    /*Puts a class attribute in your new element*/ 'desktop-taskbar-app-button',
    /*Puts an event attribute in your new element*/ 'onclick',
    /*Gives the created event a code*/ 'minimizecalculatorapp()'
  );

  window.style.display = "block";
  window.style.animation = 'openwindow 0.25s';

  /*Bring window to the front along with the taskbar.*/
  z++;
  window.style.zIndex = z;
  document.getElementById('desktop-taskbar').style.zIndex = z + 999;
  document.getElementById('desktop-menu-main').style.zIndex = z + 998;
  document.getElementById('desktop-menu-settings').style.zIndex = z + 998;

  /*Specifies what buttons should show or not in the desktop screen*/
  resizebutton.style.display = 'block';
  minimizebutton.style.left = '51px';

  /*Closes start menu automatically when application is open*/

  if (menumain.style.display = "block") {
    menumain.style.display = "none";
    menusettings.style.display = "none";
  }
}


function closeapplication(id, isopen) {
  /*Sets up variable values to make the code easier.*/

  var window = document.getElementById(`${id}-window`);

  // Make closing window instructions

  window.style.animation = 'closewindow 0.25s';
  window.style.animationDuration = '0.25s';
  setTimeout(() => {
    window.style.display = "none";
    isopen = false;
    removeDOMElement(`desktop-taskbar-${id}-app-button`);
  }, 250);
}


function taskbarapplication(id, isopen, src) {
  /*Sets up variable values to make the code easier.*/
  var window = document.getElementById(`${id}-window`);

  /*Checks if the application is open or not.*/
  if (isopen = true) {
    /*If open, the button will minimize the current application.*/
    if (window.style.display === 'block') {
      window.style.animation = 'minimizewindow 0.25s';
      window.style.animationDuration = '0.25s';
      setTimeout(() => {
        window.style.display = 'none';
      }, 250);
    }
    else {
      /*If not open, the button will open an application.*/
      createDOMScript(`${id}-window-main`, 'text/javascript', src);
      openapplication(id);
      window.style.display = 'block';
      window.style.animation = 'callwindow 0.25s';
      focusapplication(id);
    }
  }
  else {
    openapplication(id);
  }
}

function focusapplication(id) {
  /*Sets up variable values to make the code easier.*/
  var window = document.getElementById(`${id}-window`);

  // Increment the z-index variable and set the new z-index to the z variable.
  z++;
  window.style.zIndex = z;

  // Bring desktop main elements to the front everytime you focus an application.
  document.getElementById('desktop-taskbar').style.zIndex = z + 999;
  document.getElementById('desktop-menu-main').style.zIndex = z + 998;
  document.getElementById('desktop-menu-settings').style.zIndex = z + 998;
}

function resizeapplication(id, storewidth, storeheight, storeleft, storetop) {
  /*Sets up variable values to make the code easier.*/
  var window = document.getElementById(`${id}-window`);

  // If the window is full screen, restore its previous size and place.
  if (window.style.width === '100%') {
    window.style.width = storewidth;
    window.style.height = storeheight;
    window.style.left = storeleft;
    window.style.top = storetop;
    window.style.resize = "both";
    window.style.borderRadius = "4px";
    window.style.animation = 'maximizewindow 0.25s';
    window.style.transition = "0.15s";
    setTimeout(function () {
      window.style.transition = "none";
    }, 150)
  } else {
    // If not, maximize the window.
    storeheight = window.style.height;
    storewidth = window.style.width;
    storetop = window.style.top;
    storeleft = window.style.left;
    window.style.width = '100%';
    window.style.height = 'calc(100% - 40px)';
    window.style.top = "40px";
    window.style.left = "0px";
    window.style.resize = "none";
    window.style.borderRadius = "0px";
    window.style.transition = "0.15s";
    setTimeout(function () {
      window.style.transition = "none";
    }, 150)
  }
}


function sideapplication(id) {
  /*Sets up variable values to make the code easier.*/
  var window = document.getElementById(id);
  var windowleft = convert('toInt', document.getElementById(id).style.left);
  var windowwidth = convert('toInt', document.getElementById(id).style.width);

  // If the window hit or surpass the left corner of the screen, split it to the specified side.
  if (windowleft < 0) {
    window.style.left = '0px';
    window.style.top = '40px';
    window.style.height = 'calc(100% - 40px)';
    window.style.width = '50%';
    window.style.resize = "none";
    window.style.borderRadius = "0px";
    window.style.transition = "0.15s";
    setTimeout(function () {
      window.style.transition = "none";
    }, 150)
  }

  // If the window hit or surpass the right corner of the screen, split it to the specified side.
  if (windowleft > (window.innerWidth - windowwidth)) {
    window.style.left = '50%';
    window.style.top = '40px';
    window.style.height = 'calc(100% - 40px)';
    window.style.width = '50%';
    window.style.resize = "none";
    window.style.borderRadius = "0px";
    window.style.transition = "0.15s";
    setTimeout(function () {
      window.style.transition = "none";
    }, 150)
  }
}

// When the user moves the maximized window, restore it to its previous size and place.
function snapminapplication(id) {
  /*Sets up variable values to make the code easier.*/
  var window = document.getElementById(`${id}-window`);

  var windowwidth = convert('toInt', restorewidth);
  var mouseleft = window.event.clientX - (appwidth * 0.5);
  var mousetop = window.event.clientY + 'px';

  if (window.style.height === 'calc(100% - 40px)') {
    window.style.width = restorewidth;
    window.style.height = restoreheight;
    window.style.left = convert('toPixels', mouseleft);
    window.style.top = '40px';
    window.style.resize = "both";
    window.style.borderRadius = "4px";
  }
}

// Window Snap
function snapapplication(id) {
  var window = document.getElementById(`${id}-window`);
  var mousetop = window.event.clientY;
  var mouseleft = window.event.clientX;

  // When the user pulls the window to the top, make it full screen.
  if (mousetop <= 0) {
    if (window.style.width === 'calc(100% - 40px)') {
      window.style.width = restorewidth;
      window.style.height = restoreheight;
      window.style.resize = "both";
      window.style.borderRadius = "4px";
    } else {
      window.style.width = '100%';
      window.style.height = 'calc(100% - 40px)';
      window.style.top = "40px";
      window.style.left = "0px";
      window.style.resize = "none";
      window.style.borderRadius = "0px";
      window.style.transition = "0.15s";
      setTimeout(function () {
        window.style.transition = "none";
      }, 150)
    }
  }

  // When the user pulls the window to the left, split it to the left.
  if (mouseleft <= 0) {
    sideapplication(id)
  }

  // When the user pulls the window to the right, split it to the right.
  if (mouseleft >= (window.innerWidth - 1)) {
    sideapplication(id)
  }
}

function saverestorepos(id) {
  var window = document.getElementById(`${id}-window`);

  restoreheight = window.style.height;
  restorewidth = window.style.width;
  restoretop = window.style.top;
  restoreleft = window.style.left;
}


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(`${elmnt}-header`)) {
    // If present, the header is where you move the DIV from:
    document.getElementById(`${elmnt}-header`).onmousedown = dragMouseDown;
  } else {
    // Otherwise, move the DIV from anywhere inside the DIV:
    document.getElementById(elmnt).onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // Get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // Call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // Calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // Set the element's new position:
    document.getElementById(elmnt).style.top = (document.getElementById(elmnt).offsetTop - pos2) + `px`;
    document.getElementById(elmnt).style.left = (document.getElementById(elmnt).offsetLeft - pos1) + `px`;
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

