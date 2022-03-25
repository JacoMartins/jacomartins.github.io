/* function opencalculatorapp(app = document.getElementById('calculator-window'), miniapp = document.getElementById('desktop-taskbar-calculator-app-button')){
  var calculator = document.getElementById('calculator-window-calculator');
  
  var taskbarminimizedapps = document.getElementById('desktop-taskbar-minimized-apps');
  
  var miniapp = document.createElement('button');
  var miniappclass = document.createAttribute('class');
  var miniappid = document.createAttribute('id');
  var miniapponclick = document.createAttribute('onclick');
  var miniappclassname = miniappclass.value = 'desktop-taskbar-app-button';
  var miniappidname = miniappid.value = 'desktop-taskbar-calculator-app-button';
  var miniapponclickfunction = miniapponclick.value = 'minimizecalculatorapp()';
  var resizebutton = document.getElementById("calculator-window-resize-button");
  var minimizebutton = document.getElementById("calculator-window-minimize-button");
  
  taskbarminimizedapps.appendChild(miniapp);
  miniapp.miniappclassname;
  miniapp.setAttributeNode(miniappclass);
  miniapp.miniappidname;
  miniapp.setAttributeNode(miniappid);
  miniapp.miniapponclickfunction;
  miniapp.setAttributeNode(miniapponclick);
  
  app.style.display = "block";
  app.style.animation = 'openwindow 0.25s';
  menumain = document.getElementById('desktop-menu-main')
  menusettings = document.getElementById('desktop-menu-settings')

  if(menumain.style.display = "block"){
      menumain.style.display = "none";
      menusettings.style.display = "none";
  }

  app.style.width = '240px';
	app.style.height = '355px';
  app.style.top = '120px';
	app.style.left = '120px';
  app.style.resize = "both";
  app.style.borderRadius = "4px";
  z++;
  app.style.zIndex = z;
  document.getElementById('desktop-taskbar').style.zIndex = z + 999;
  document.getElementById('desktop-menu-main').style.zIndex = z + 998;
  document.getElementById('desktop-menu-settings').style.zIndex = z + 998;
  resizebutton.style.display = 'block';
  minimizebutton.style.left = '51px';

  if (window.innerHeight > window.innerWidth){
    restoreheight = app.style.height;
    restorewidth = app.style.width; 
    restoretop = app.style.top;
    restoreleft = app.style.left;
		app.style.width = '100%';
		app.style.height = 'calc(100% - 50px)';
		app.style.top = "0px";
		app.style.left = "0px";
    app.style.resize = "none";
    app.style.borderRadius = "0px";
    app.style.transition = "0.15s";
    resizebutton.style.display = 'none';
    minimizebutton.style.left = '31px';
    setTimeout(function() {
			  app.style.transition = "none";
		}, 150)
  }

  calculatorrestoreheight = app.style.height;
  calculatorrestorewidth = app.style.width;
  calculatorrestoretop = app.style.top;
  calculatorrestoreleft = app.style.left;
  calculatorwindowopen = true;
} */

function closecalculatorapp(app = document.getElementById('calculator-window'), miniapp = document.getElementById('desktop-taskbar-calculator-app-button')){
  app.style.animation = 'closewindow 0.25s';
  app.style.animationDuration = '0.25s';
  setTimeout(() => {
    app.style.display = "none";
    miniapp.parentNode.removeChild(miniapp);
    calculatorwindowopen = false;
    calculatorWindowId--;
  }, 250);
}
