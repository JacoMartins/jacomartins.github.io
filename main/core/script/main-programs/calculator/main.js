// Calculator Program - Main Code

var calculatorrestoreheight;
var calculatorrestorewidth;
var calculatorrestoretop;
var calculatorrestoreleft;
var calculatorOpen = true;

if (calculatorWindowId === undefined) {
  var calculatorWindowId = 0;
}

function callcalculatorscripts() {
  var appname = 'calculator';
  if (!document.getElementById(`${appname}-startstop`)) {
    createDOMScript(`${appname}-startstop`, 'text/javascript', '../script/main-programs/calculator/bin/window/startstop.js');
    createDOMScript(`${appname}-window-functions`, 'text/javascript', '../script/main-programs/calculator/bin/window/window-functions.js');
    createDOMScript(`${appname}-core`, 'text/javascript', '../script/main-programs/calculator/bin/calculator-core.js');
  }
}

callcalculatorscripts();

z++;

createWindow('owner-user', `calculator${calculatorWindowId}`);

document.getElementById(`calculator${calculatorWindowId}-window`).style.width = '240px';
document.getElementById(`calculator${calculatorWindowId}-window`).style.height = '355px';

document.getElementById(`calculator${calculatorWindowId}-window`).style.zIndex = z;

createDOMAttribute(document.getElementById(`calculator${calculatorWindowId}-window`), 'onmousedown', `focusWindow("calculator${calculatorWindowId}-window");`);

createDOMAttribute(document.getElementById(`calculator${calculatorWindowId}-window`), 'onclick', `dragElement('calculator${calculatorWindowId}-window', 'calculator${calculatorWindowId}-window-header', calculatorrestorewidth, calculatorrestoreheight);`);

createWindowHeader(`calculator${calculatorWindowId}-window`, 'calculator', 0, 0, undefined);

createButton(document.getElementById('desktop-taskbar-minimized-apps'), '', `desktop-taskbar-calculator${calculatorWindowId}-app-button`, 'desktop-taskbar-app-button', 'onclick', `minimizeWindow("calculator${calculatorWindowId}-window", calculatorOpen);`,
  'background-image: url("../script/main-programs/calculator/resources/icon12x.png"); background-size: 9px 12px;'
);

createDOMElement(`calculator${calculatorWindowId}-window`, 'div', `calculator${calculatorWindowId}-window-content`, 'window-content');

document.getElementById(`calculator${calculatorWindowId}-window-content`).style.backgroundColor = 'rgba(0, 0, 0, 0)';

dragElement(`calculator${calculatorWindowId}-window`, `calculator${calculatorWindowId}-window-header`, calculatorrestorewidth, calculatorrestoreheight);

if (document.getElementById(`desktop-menu-main`).style.display = "block") {
  document.getElementById(`desktop-menu-main`).style.display = "none";
  document.getElementById(`desktop-menu-settings`).style.display = "none";
}

calculatorrestorewidth = document.getElementById(`calculator${calculatorWindowId}-window`).style.width;
calculatorrestoreheight = document.getElementById(`calculator${calculatorWindowId}-window`).style.height;
calculatorrestoreleft = document.getElementById(`calculator${calculatorWindowId}-window`).style.left;
calculatorrestoretop = document.getElementById(`calculator${calculatorWindowId}-window`).style.top;

calculatorWindowId++;
