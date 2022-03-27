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
  if (!document.getElementById(`${appname}-window-functions`)) {
    createDOMScript(`${appname}-window-functions`, 'text/javascript', '../script/main-programs/calculator/bin/window/window-functions.js');
    createDOMScript(`${appname}-core`, 'text/javascript', '../script/main-programs/calculator/bin/calculator-core.js');
  } else {
    removeDOMElementById(`${appname}-main`);
  }
}

callcalculatorscripts();

function calculatorBuildWindow() {
  // Calculator Basic Window Structure

  z++;

  createWindow('owner-user', `calculator${calculatorWindowId}`);

  document.getElementById(`calculator${calculatorWindowId}-window`).style.width = '240px';
  document.getElementById(`calculator${calculatorWindowId}-window`).style.height = '355px';
  document.getElementById('desktop-taskbar').style.zIndex = z + 999;
  document.getElementById('desktop-menu-main').style.zIndex = z + 998;
  document.getElementById('desktop-menu-settings').style.zIndex = z + 998;

  document.getElementById(`calculator${calculatorWindowId}-window`).style.zIndex = z;

  createDOMAttribute(document.getElementById(`calculator${calculatorWindowId}-window`), 'onmousedown', `focusWindow("calculator${calculatorWindowId}-window");`);

  createDOMAttribute(document.getElementById(`calculator${calculatorWindowId}-window`), 'onclick', `dragElement('calculator${calculatorWindowId}-window', 'calculator${calculatorWindowId}-window-header', calculatorrestorewidth, calculatorrestoreheight);`);

  createWindowHeader(`calculator${calculatorWindowId}-window`, 'calculator', 0, 0, 'Calculator', calculatorWindowId);

  createButton(document.getElementById('desktop-taskbar-minimized-apps'), '', `desktop-taskbar-calculator${calculatorWindowId}-app-button`, 'desktop-taskbar-app-button', 'onclick', `minimizeWindow("calculator${calculatorWindowId}-window", calculatorOpen);`,
    'background-image: url("../script/main-programs/calculator/resources/icon12x.png"); background-size: 9px 12px;'
  );

  createDOMElement(
    document.getElementById(`calculator${calculatorWindowId}-window`),
    'div',
    `calculator${calculatorWindowId}-window-content`,
    'window-content',
    undefined,
    undefined,
    // CSS
    ` background-color: rgba(0, 0, 0, 0);
    margin: 6px;
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: 72px calc(100% - 108px);
    grid-template-columns: calc(100% - 24px);
    row-gap: 4px;
    --text-input-size: 48px; `);

  document.getElementById(`calculator${calculatorWindowId}-window-content`).style.backgroundColor = 'rgba(0, 0, 0, 0)';

  // Calculator Content

  createInput(
    document.getElementById(`calculator${calculatorWindowId}-window-content`),
    '',
    '',
    'text',
    `calculator${calculatorWindowId}-window-content-input-text1`,
    `system-input-transparent-text`,
    'onkeydown',
    `inputCalculatorEqual('calculator${calculatorWindowId}-window-content-input-text1');`,
    // CSS
    ` position: relative;
    top: 0px;
    margin-top: 0px;
    width: 100%;
    height: 100%;
    font-size: 40px;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 11px;
    text-align: right;
  `
  )

  createDOMElement(
    document.getElementById(`calculator${calculatorWindowId}-window-content`),
    'div',
    `calculator${calculatorWindowId}-window-container`,
    undefined,
    undefined,
    undefined,
    // CSS
    ` display: grid;
    grid-auto-flow: row;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 10% 18% 18% 18% 18% 18%;
    column-gap: 4px;
    row-gap: 4px;`
  );

  createButton(
    document.getElementById(`calculator${calculatorWindowId}-window-container`),
    '%',
    `calculator${calculatorWindowId}-window-content-button-%`,
    'system-input-button-transparent calculator-window-content-input-button-small',
    `onclick`,
    `calculatorInsert('* 0.', 'calculator${calculatorWindowId}-window-content-input-text1')`
  );

  createButton(
    document.getElementById(`calculator${calculatorWindowId}-window-container`),
    'CE',
    `calculator${calculatorWindowId}-window-content-button-ce`,
    'system-input-button-transparent calculator-window-content-input-button-small',
    `onclick`,
    `calculatorDelete(-2, 'calculator${calculatorWindowId}-window-content-input-text1')`
  );

  createButton(
    document.getElementById(`calculator${calculatorWindowId}-window-container`),
    'C',
    `calculator${calculatorWindowId}-window-content-button-0`,
    'system-input-button-transparent calculator-window-content-input-button-small',
    `onclick`,
    `calculatorClear('calculator${calculatorWindowId}-window-content-input-text1')`
  );

  createButton(
    document.getElementById(`calculator${calculatorWindowId}-window-container`),
    'Delete',
    `calculator${calculatorWindowId}-window-content-button-0`,
    'system-input-button-transparent calculator-window-content-input-button-small',
    `onclick`,
    `calculatorDelete(-1, 'calculator${calculatorWindowId}-window-content-input-text1')`
  );

  createButton(
    document.getElementById(`calculator${calculatorWindowId}-window-container`),
    '%',
    `calculator${calculatorWindowId}-window-content-button-0`,
    'system-input-button-transparent calculator-window-content-input-button',
    `onclick`,
    `calculatorInsert('* 0.', 'calculator${calculatorWindowId}-window-content-input-text1')`
  );

  createButton(
    document.getElementById(`calculator${calculatorWindowId}-window-container`),
    '()',
    `calculator${calculatorWindowId}-window-content-button-0`,
    'system-input-button-transparent calculator-window-content-input-button',
    `onclick`,
    `calculatorInsertOrg('calculator${calculatorWindowId}-window-content-input-text1')`
  );

  createButton(
    document.getElementById(`calculator${calculatorWindowId}-window-container`),
    'X²',
    `calculator${calculatorWindowId}-window-content-button-0`,
    'system-input-button-transparent calculator-window-content-input-button',
    `onclick`,
    `calculatorInsert('**', 'calculator${calculatorWindowId}-window-content-input-text1')`
  );

  createButton(
    document.getElementById(`calculator${calculatorWindowId}-window-container`),
    '÷',
    `calculator${calculatorWindowId}-window-content-button-0`,
    'system-input-button-transparent calculator-window-content-input-button',
    `onclick`,
    `calculatorInsert('/', 'calculator${calculatorWindowId}-window-content-input-text1')`
  );

  createButton(
    document.getElementById(`calculator${calculatorWindowId}-window-container`),
    '7',
    `calculator${calculatorWindowId}-window-content-button-0`,
    'system-input-button-transparent calculator-window-content-input-button',
    `onclick`,
    `calculatorInsert('7', 'calculator${calculatorWindowId}-window-content-input-text1')`
  );

  createButton(
    document.getElementById(`calculator${calculatorWindowId}-window-container`),
    '8',
    `calculator${calculatorWindowId}-window-content-button-0`,
    'system-input-button-transparent calculator-window-content-input-button',
    `onclick`,
    `calculatorInsert('8', 'calculator${calculatorWindowId}-window-content-input-text1')`
  );

  createButton(
    document.getElementById(`calculator${calculatorWindowId}-window-container`),
    '9',
    `calculator${calculatorWindowId}-window-content-button-0`,
    'system-input-button-transparent calculator-window-content-input-button',
    `onclick`,
    `calculatorInsert('9', 'calculator${calculatorWindowId}-window-content-input-text1')`
  );

  createButton(
    document.getElementById(`calculator${calculatorWindowId}-window-container`),
    '×',
    `calculator${calculatorWindowId}-window-content-button-0`,
    'system-input-button-transparent calculator-window-content-input-button',
    `onclick`,
    `calculatorInsert('*', 'calculator${calculatorWindowId}-window-content-input-text1')`
  );

  createButton(
    document.getElementById(`calculator${calculatorWindowId}-window-container`),
    '4',
    `calculator${calculatorWindowId}-window-content-button-0`,
    'system-input-button-transparent calculator-window-content-input-button',
    `onclick`,
    `calculatorInsert('4', 'calculator${calculatorWindowId}-window-content-input-text1')`
  );

  createButton(
    document.getElementById(`calculator${calculatorWindowId}-window-container`),
    '5',
    `calculator${calculatorWindowId}-window-content-button-0`,
    'system-input-button-transparent calculator-window-content-input-button',
    `onclick`,
    `calculatorInsert('5', 'calculator${calculatorWindowId}-window-content-input-text1')`
  );

  createButton(
    document.getElementById(`calculator${calculatorWindowId}-window-container`),
    '6',
    `calculator${calculatorWindowId}-window-content-button-0`,
    'system-input-button-transparent calculator-window-content-input-button',
    `onclick`,
    `calculatorInsert('6', 'calculator${calculatorWindowId}-window-content-input-text1')`
  );

  createButton(
    document.getElementById(`calculator${calculatorWindowId}-window-container`),
    '-',
    `calculator${calculatorWindowId}-window-content-button-0`,
    'system-input-button-transparent calculator-window-content-input-button',
    `onclick`,
    `calculatorInsert('-', 'calculator${calculatorWindowId}-window-content-input-text1')`
  );

  createButton(
    document.getElementById(`calculator${calculatorWindowId}-window-container`),
    '1',
    `calculator${calculatorWindowId}-window-content-button-0`,
    'system-input-button-transparent calculator-window-content-input-button',
    `onclick`,
    `calculatorInsert('1', 'calculator${calculatorWindowId}-window-content-input-text1')`
  );

  createButton(
    document.getElementById(`calculator${calculatorWindowId}-window-container`),
    '2',
    `calculator${calculatorWindowId}-window-content-button-0`,
    'system-input-button-transparent calculator-window-content-input-button',
    `onclick`,
    `calculatorInsert('2', 'calculator${calculatorWindowId}-window-content-input-text1')`
  );

  createButton(
    document.getElementById(`calculator${calculatorWindowId}-window-container`),
    '3',
    `calculator${calculatorWindowId}-window-content-button-0`,
    'system-input-button-transparent calculator-window-content-input-button',
    `onclick`,
    `calculatorInsert('3', 'calculator${calculatorWindowId}-window-content-input-text1')`
  );

  createButton(
    document.getElementById(`calculator${calculatorWindowId}-window-container`),
    '+',
    `calculator${calculatorWindowId}-window-content-button-0`,
    'system-input-button-transparent calculator-window-content-input-button',
    `onclick`,
    `calculatorInsert('+', 'calculator${calculatorWindowId}-window-content-input-text1')`
  );

  createButton(
    document.getElementById(`calculator${calculatorWindowId}-window-container`),
    '+/-',
    `calculator${calculatorWindowId}-window-content-button-0`,
    'system-input-button-transparent calculator-window-content-input-button-small',
    `onclick`,
    `calculatorInsert('*(-1)', 'calculator${calculatorWindowId}-window-content-input-text1'); calculatorEqual('', 'calculator${calculatorWindowId}-window-content-input-text1')`
  );

  createButton(
    document.getElementById(`calculator${calculatorWindowId}-window-container`),
    '0',
    `calculator${calculatorWindowId}-window-content-button-0`,
    'system-input-button-transparent calculator-window-content-input-button',
    `onclick`,
    `calculatorInsert('0', 'calculator${calculatorWindowId}-window-content-input-text1')`
  );

  createButton(
    document.getElementById(`calculator${calculatorWindowId}-window-container`),
    '.',
    `calculator${calculatorWindowId}-window-content-button-0`,
    'system-input-button-transparent calculator-window-content-input-button',
    `onclick`,
    `calculatorInsert('.', 'calculator${calculatorWindowId}-window-content-input-text1')`
  );

  createButton(
    document.getElementById(`calculator${calculatorWindowId}-window-container`),
    '=',
    `calculator${calculatorWindowId}-window-content-button-0`,
    'system-input-button-transparent calculator-window-content-input-button',
    `onclick`,
    `calculatorEqual('', 'calculator${calculatorWindowId}-window-content-input-text1')`
  );

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

}

calculatorBuildWindow();
