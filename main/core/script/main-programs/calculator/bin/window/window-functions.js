function calculatorfocusWindow(app = document.getElementById('calculator-window')){
  z++;
  app.style.zIndex = z;
  document.getElementById('desktop-taskbar').style.zIndex = z + 999;
  document.getElementById('desktop-menu-main').style.zIndex = z + 998;
  document.getElementById('desktop-menu-settings').style.zIndex = z + 998;
}

function calculatorResizeWindow(id) {
  var wd = document.getElementById(id);

  if (wd.style.width === '100%') {
    wd.style.width = calculatorrestorewidth;
		wd.style.height = calculatorrestoreheight;
    wd.style.left = calculatorrestoreleft;
    wd.style.top = calculatorrestoretop;
    wd.style.resize = "both";
    wd.style.borderRadius = "4px";
    wd.style.animation = 'maximizewindow 0.25s';
    wd.style.transition = "0.15s";
    setTimeout(function () {
      wd.style.transition = "none";
    }, 150)
  } else {
    calculatorrestorewidth = wd.style.width;
    calculatorrestoreheight = wd.style.height;
    calculatorrestoreleft = wd.style.left;
    calculatorrestoretop = wd.style.top;
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

function sidecalculatorapp(app = document.getElementById("calculator-window")){
  var appleft = parseInt(app.style.left, 10);
  var appwidth = parseInt(app.style.width, 10);
  
  if (appleft < 0) {
    app.style.left = '0px';
    app.style.top = '40px';
    app.style.height = 'calc(100% - 40px)';
    app.style.width = '50%';
    app.style.resize = "none";
    app.style.borderRadius = "0px";
    app.style.transition = "0.15s";
    setTimeout(function() {
			app.style.transition = "none";
		}, 150)
  }

  if (appleft > (window.innerWidth - appwidth)) {
    app.style.left = '50%';
    app.style.top = '40px';
    app.style.height = 'calc(100% - 40px)';
    app.style.width = '50%';
    app.style.resize = "none";
    app.style.borderRadius = "0px";
    app.style.transition = "0.15s";
    setTimeout(function() {
			app.style.transition = "none";
		}, 150)
  }
}

function snapmincalculatorapp(app = document.getElementById("calculator-window")){
  var appwidth = parseInt(calculatorrestorewidth, 10);
  var posleft = window.event.clientX - (appwidth * 0.5);
  var posleftcss = posleft + 'px';
  var postop = window.event.clientY + 'px';

  if (app.style.height === 'calc(100% - 40px)') {
		app.style.width = calculatorrestorewidth;
		app.style.height = calculatorrestoreheight;
    app.style.left = posleftcss;
    app.style.top = '40px';
    app.style.resize = "both";
    app.style.borderRadius = "4px";
	}
}

function snapcalculatorapp(app = document.getElementById("calculator-window")){
  var clienttop = window.event.clientY;
  var clientleft = window.event.clientX;

  if (clienttop <= 0) {
    if (app.style.width === 'calc(100% - 40px)') {
      app.style.width = calculatorrestorewidth;
      app.style.height = calculatorrestoreheight;
      app.style.resize = "both";
      app.style.borderRadius = "4px";
      app.style.transition = "0.15s";
      setTimeout(function() {
			  app.style.transition = "none";
		  }, 150)
    } else {
      app.style.width = '100%';
      app.style.height = 'calc(100% - 40px)';
      app.style.top = "40px";
      app.style.left = "0px";
      app.style.resize = "none";
      app.style.borderRadius = "0px";
      app.style.transition = "0.15s";
      setTimeout(function() {
			  app.style.transition = "none";
		  }, 150)
    }
  }

  if (clientleft <= 0) {
    sidecalculatorapp()
    // document.getElementById("calculator-window-header-title").innerHTML = 'Detected';
  }

  if(clientleft >= (window.innerWidth - 1)){
    sidecalculatorapp()
  }
}

function savecalculatorrestorepos(app = document.getElementById('calculator-window')){
  calculatorrestoreheight = app.style.height;
  calculatorrestorewidth = app.style.width; 
  calculatorrestoretop = app.style.top;
  calculatorrestoreleft = app.style.left;
}


window.addEventListener("load", function(){
    dragElement(document.getElementById("calculator-window"));
    
    
    function dragElement(elmnt) {
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      if (document.getElementById("calculator-window-header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById("calculator-window-header").onmousedown = dragMouseDown;
      } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
      }
    
      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }
    
      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        snapmincalculatorapp();
      }
    
      function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
        snapcalculatorapp();
      }
    }
    
    });
    