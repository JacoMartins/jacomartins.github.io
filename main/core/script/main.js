// Main Code
let build = 48;
let isbeta = true;
let betastage = 1;
let version = '1.0.0';
let systemname = 'Eclipse Cloud Operating System (ECOS)';
let versionname = 'Beta';
let permlevel = 0;
var date = new Date();

if (localStorage.getItem('auth') == undefined){
  localStorage.setItem('auth', 'true');
}

if (localStorage.getItem('username') == undefined){
  localStorage.setItem('username', 'owner');
}

if (localStorage.getItem('notepad') == undefined){
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
  if(window.innerHeight > window.innerWidth){
    var date = new Date();
    var DateMonths = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    var DateDays = 0;
    var DateHours = 0;
    var DateMinutes = 0;
    var DateSeconds = 0;
    if (date.getDate() < 10) {DateDays = '0' + date.getDate();} else {DateDays = date.getDate();}
    if (date.getHours() < 10) {DateHours = '0' + date.getHours();} else {DateHours = date.getHours();}
    if (date.getMinutes() < 10) {DateMinutes = '0' + date.getMinutes();} else {DateMinutes = date.getMinutes();}
    if (date.getSeconds() < 10) {DateSeconds = '0' + date.getSeconds();} else {DateSeconds = date.getSeconds();}
  
    document.getElementById('desktop-taskbar-clock').innerHTML = '<span style="opacity: 0.6; margin-right: 4px;">' + DateHours + ':' + DateMinutes + '</span>' + '  ' + DateMonths[date.getMonth()].substr(0, 3) + ', ' + DateDays + ', ' + date.getFullYear().toString().substr(2,4);  
  } else {
    var date = new Date();
    var DateMonths = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    var DateDays = 0;
    var DateHours = 0;
    var DateMinutes = 0;
    var DateSeconds = 0;
    if (date.getDate() < 10) {DateDays = '0' + date.getDate();} else {DateDays = date.getDate();}
    if (date.getHours() < 10) {DateHours = '0' + date.getHours();} else {DateHours = date.getHours();}
    if (date.getMinutes() < 10) {DateMinutes = '0' + date.getMinutes();} else {DateMinutes = date.getMinutes();}
    if (date.getSeconds() < 10) {DateSeconds = '0' + date.getSeconds();} else {DateSeconds = date.getSeconds();}
  
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

  if (date.getDate() < 10) {compdays = '0' + date.getDate();} else {compdays = date.getDate();}
  if (date.getHours() < 10) {comphours = '0' + date.getHours();} else {comphours = date.getHours();}
  if (date.getMinutes() < 10) {compminutes = '0' + date.getMinutes();} else {compminutes = date.getMinutes();}
      
  var comp = compdays + compmonths[date.getMonth()] + compyear + comphours + compminutes;

  const bootbetatext = document.getElementById('bootscreen-text-default-main');
  const desktopbetatext = document.getElementById('desktop-beta-info');

  bootbetatext.innerHTML = 'beta ' + betastage + ' build ' + build;
  desktopbetatext.innerHTML = 'Eclipse Cloud Operating System, Beta ' + betastage + ', Build ' + build + ' Compilation: ' + comp + '.';
}, 250);

window.addEventListener('load', function(){
  const bootscreen = document.getElementById('bootscreen');
  bootscreen.className += '.done';
})

window.addEventListener('keyup', event => {
  if(event.keyCode == 84 && event.ctrlKey && event.altKey){
    openterminalapp();
  }

  if(event.keyCode == 77 && event.ctrlKey){
    menutrigger();
  }
})

document.body.oncontextmenu = function(){return false};

/*Create Functions*/

function createDOMScript(id, type, src){
  var script = document.createElement('script');
  document.head.appendChild(script);

  createDOMAttribute(script, 'id', id);
  createDOMAttribute(script, 'type', type);
  createDOMAttribute(script, 'src', src);
}

function createDOMElement(mother, child, id, cl, event, code){
  createelmnt = document.createElement(child);

  document.getElementById(mother).appendChild(createelmnt);
  createDOMAttribute(createelmnt, 'id', id);
  createDOMAttribute(createelmnt, 'class', cl);
  createDOMAttribute(createelmnt, event, code);
}

function createDOMAttribute(id, eAtr, value){
  var createatr = document.createAttribute(eAtr);
  var createatrvalue = createatr.value = value;

  id.createatrvalue;
  id.setAttributeNode(createatr);
}

function createWindow(id){
  var window = document.createElement('div');

  desktop.appendChild(window);
  createDOMAttribute(window, 'id', `${id}-window`);
  createDOMAttribute(window, 'class', `window`);
}

function createWindowHeader(mother, id){
  var header = document.createElement('window');

  desktop.appendChild(window);
  createDOMAttribute(window, 'id', `${id}-window`);
  createDOMAttribute(window, 'class', `window`);
}

function createMenuButton(mother, value, id, cl, evnt, link, icon){
  var button = document.createElement('button');

  mother.appendChild(button);
  createDOMAttribute(button, 'id', id);
  createDOMAttribute(button, 'class', cl);
  createDOMAttribute(button, 'style', `background-image: url("${icon}");`);
  createDOMAttribute(button, evnt, link);
  button.innerText= value;
}

/*Remove window functions*/

function removeDOMElement(child){
  var elmnt = document.getElementById(child);

  elmnt.parentNode.removeChild(elmnt);
}

/*Convert Functions*/

function convert(command, value){
  if(command == 'toPixels'){
    return value + 'px';
  }

  if(command == 'toInt'){
    return parseInt(value, 10);
  }
}

/*Window functions*/

function openapplication(app){
  /*Sets up variable values to make the code easier.*/
  var window = document.getElementById(`${app}-window`);
  var resizebutton = document.getElementById(`${app}-window-resize-button`);
  var minimizebutton = document.getElementById(`${app}-window-minimize-button`);
  var menumain = document.getElementById('desktop-menu-main');
  var menusettings = document.getElementById('desktop-menu-settings');

  createDOMElement(
    /*Mother Element*/ 'desktop-taskbar-minimized-apps',
    /*Child Element*/ 'div',
    /*Puts an ID attribute in your new element*/ 'desktop-taskbar-calculator-app-button',
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

  if(menumain.style.display = "block"){
    menumain.style.display = "none";
    menusettings.style.display = "none";
  }
}