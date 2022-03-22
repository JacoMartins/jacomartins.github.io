// Open and close functions - Calculator app
openapplication('calculator');
opencalculatorinfo();

function opencalculatorinfo(app = 'calculator'){
  /*Sets up variable values to make the code easier.*/

  var window = document.getElementById(`${app}-window`);
  var resizebutton = document.getElementById(`${app}-window-resize-button`);
  var minimizebutton = document.getElementById(`${app}-window-minimize-button`);
  var menumain = document.getElementById('desktop-menu-main');
  var menusettings = document.getElementById('desktop-menu-settings');

  /*Sets up specific window style configuration*/

  window.style.width = '240px';
  window.style.height = '355px';
  window.style.top = '120px';
  window.style.left = '120px';
  window.style.resize = "both";
  window.style.borderRadius = "4px";

  /*Make window style configuration adaptable for mobile users*/

  if (window.innerHeight > window.innerWidth){
    restoreheight = window.style.height;
    restorewidth = window.style.width; 
    restoretop = window.style.top;
    restoreleft = window.style.left;
    window.style.width = '100%';
    window.style.height = 'calc(100% - 50px)';
    window.style.top = "0px";
    window.style.left = "0px";
    window.style.resize = "none";
    window.style.borderRadius = "0px";
    window.style.transition = "0.15s";
    resizebutton.style.display = 'none';
    minimizebutton.style.left = '31px';
    setTimeout(function() {
      window.style.transition = "none";
    }, 150)
  }

  /*Saves window location and size, to restore it when the window functions demand it.*/

  calculatorrestoreheight = window.style.height;
  calculatorrestorewidth = window.style.width;
  calculatorrestoretop = window.style.top;
  calculatorrestoreleft = window.style.left;
  calculatorwindowopen = true;
}

function closecalculatorapp(){
  var app = document.getElementById('calculator-window');
  var miniapp = document.getElementById('desktop-taskbar-calculator-app-button');

  app.style.animation = 'closewindow 0.25s';
  app.style.animationDuration = '0.25s';
  setTimeout(() => {
    app.style.display = "none";
    calculatorwindowopen = false;
    removeDOMElement('desktop-taskbar-calculator-app-button');
  }, 250);

  removeDOMElement('calculator-main');
  removeDOMElement('calculator-core');
  removeDOMElement('calculator-startstop');
  removeDOMElement('calculator-window-functions');
}
