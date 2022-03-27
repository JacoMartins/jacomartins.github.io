

/*Window functions*/

function openapplication(id) {
  /*Sets up variable values to make the code easier.*/
  var wd = document.getElementById(`${id}-window`);
  var resizebutton = document.getElementById(`${id}-window-resize-button`);
  var minimizebutton = document.getElementById(`${id}-window-minimize-button`);
  var menumain = document.getElementById('desktop-menu-main');
  var menusettings = document.getElementById('desktop-menu-settings');

  createDOMElement(
    /*Mother Element*/ document.getElementById('desktop-taskbar-minimized-apps'),
    /*Child Element*/ 'div',
    /*Puts an ID attribute in your new element*/ `desktop-taskbar-${id}-app-button`,
    /*Puts a class attribute in your new element*/ 'desktop-taskbar-app-button',
    /*Puts an event attribute in your new element*/ 'onclick',
    /*Gives the created event a code*/ 'minimizecalculatorapp()'
  );

  wd.style.display = "block";
  wd.style.animation = 'openwindow 0.25s';

  /*Bring window to the front along with the taskbar.*/
  z++;
  wd.style.zIndex = z;
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


function closeWindow(id, isopen) {
  /*Sets up variable values to make the code easier.*/

  var wd = document.getElementById(`${id}-window`);

  // Make closing window instructions

  wd.style.animation = 'closewindow 0.25s';
  wd.style.animationDuration = '0.25s';
  setTimeout(() => {
    wd.style.display = "none";
    isopen = false;
    removeDOMElement(`desktop-taskbar-${id}-app-button`);
  }, 250);
}


function taskbarapplication(id, isopen, src) {
  /*Sets up variable values to make the code easier.*/
  var wd = document.getElementById(`${id}-window`);

  /*Checks if the application is open or not.*/
  if (isopen = true) {
    /*If open, the button will minimize the current application.*/
    if (wd.style.display === 'block') {
      wd.style.animation = 'minimizewindow 0.25s';
      wd.style.animationDuration = '0.25s';
      setTimeout(() => {
        wd.style.display = 'none';
      }, 250);
    }
    else {
      /*If not open, the button will open an application.*/
      createDOMScript(`${id}-window-main`, 'text/javascript', src);
      openapplication(id);
      wd.style.display = 'block';
      wd.style.animation = 'callwindow 0.25s';
      focusWindow(id);
    }
  }
  else {
    openapplication(id);
  }
}

function focusWindow(id) {
  /*Sets up variable values to make the code easier.*/
  var wd = document.getElementById(`${id}-window`);

  // Increment the z-index variable and set the new z-index to the z variable.
  z++;
  wd.style.zIndex = z;

  // Bring desktop main elements to the front everytime you focus an application.
  document.getElementById('desktop-taskbar').style.zIndex = z + 999;
  document.getElementById('desktop-menu-main').style.zIndex = z + 998;
  document.getElementById('desktop-menu-settings').style.zIndex = z + 998;
}

function resizeWindowlication(id, storewidth, storeheight, storeleft, storetop) {
  /*Sets up variable values to make the code easier.*/
  var wd = document.getElementById(`${id}-window`);

  // If the window is full screen, restore its previous size and place.
  if (wd.style.width === '100%') {
    wd.style.width = storewidth;
    wd.style.height = storeheight;
    wd.style.left = storeleft;
    wd.style.top = storetop;
    wd.style.resize = "both";
    wd.style.borderRadius = "4px";
    wd.style.animation = 'maximizewindow 0.25s';
    wd.style.transition = "0.15s";
    setTimeout(function () {
      wd.style.transition = "none";
    }, 150)
  } else {
    // If not, maximize the window.
    storeheight = wd.style.height;
    storewidth = wd.style.width;
    storetop = wd.style.top;
    storeleft = wd.style.left;
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


function splitWindow(id) {
  /*Sets up variable values to make the code easier.*/
  var wd = document.getElementById(id);
  var wdleft = convert('toInt', document.getElementById(id).style.left);
  var wdwidth = convert('toInt', document.getElementById(id).style.width);

  // If the window hit or surpass the left corner of the screen, split it to the specified side.
  if (windowleft < 0) {
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

  // If the window hit or surpass the right corner of the screen, split it to the specified side.
  if (windowleft > (window.innerWidth - windowwidth)) {
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

// When the user moves the maximized window, restore it to its previous size and place.
function snapMinimizeWindowlication(id) {
  /*Sets up variable values to make the code easier.*/
  var wd = document.getElementById(`${id}-window`);

  var wdwidth = convert('toInt', restorewidth);
  var mouseleft = window.event.clientX - (appwidth * 0.5);
  var mousetop = window.event.clientY + 'px';

  if (wd.style.height === 'calc(100% - 40px)') {
    wd.style.width = restorewidth;
    wd.style.height = restoreheight;
    wd.style.left = convert('toPixels', mouseleft);
    wd.style.top = '40px';
    wd.style.resize = "both";
    wd.style.borderRadius = "4px";
  }
}

// Window Snap
function snapWindowlication(id) {
  var wd = document.getElementById(`${id}-window`);
  var mousetop = window.event.clientY;
  var mouseleft = window.event.clientX;

  // When the user pulls the window to the top, make it full screen.
  if (mousetop <= 0) {
    if (wd.style.width === 'calc(100% - 40px)') {
      wd.style.width = restorewidth;
      wd.style.height = restoreheight;
      wd.style.resize = "both";
      wd.style.borderRadius = "4px";
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

  // When the user pulls the window to the left, split it to the left.
  if (mouseleft <= 0) {
    splitWindowlication(id)
  }

  // When the user pulls the window to the right, split it to the right.
  if (mouseleft >= (window.innerWidth - 1)) {
    splitWindowlication(id)
  }
}

function saverestorepos(id) {
  var wd = document.getElementById(`${id}-window`);

  restoreheight = wd.style.height;
  restorewidth = wd.style.width;
  restoretop = wd.style.top;
  restoreleft = wd.style.left;
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

