// Htmlviewer Program - Main

let htmlviewerwindowopen = false;

function openhtmlviewerapp(app = document.getElementById('htmlviewer-window')){
  htmlviewerwindowopen = true;
  var taskbarminimizedapps = document.getElementById('desktop-taskbar-minimized-apps');
  var miniapp = document.createElement('button');
  var miniappclass = document.createAttribute('class');
  var miniappid = document.createAttribute('id');
  var miniapponclick = document.createAttribute('onclick');
  var miniappclassname = miniappclass.value = 'desktop-taskbar-app-button';
  var miniappidname = miniappid.value = 'desktop-taskbar-htmlviewer-app-button';
  var miniapponclickfunction = miniapponclick.value = 'minimizehtmlviewerapp()';
  var resizebutton = document.getElementById("htmlviewer-window-resize-button");
  var minimizebutton = document.getElementById("htmlviewer-window-minimize-button");
  
  taskbarminimizedapps.appendChild(miniapp);
  miniapp.miniappclassname;
  miniapp.setAttributeNode(miniappclass);
  miniapp.miniappidname;
  miniapp.setAttributeNode(miniappid);
  miniapp.miniapponclickfunction;
  miniapp.setAttributeNode(miniapponclick);
  
  app.style.display = "block";
  app.style.animation = 'openwindow 0.25s';
  z++;
  app.style.zIndex = z;
  document.getElementById('desktop-taskbar').style.zIndex = z + 999;
  document.getElementById('desktop-menu-main').style.zIndex = z + 998;
  document.getElementById('desktop-menu-settings').style.zIndex = z + 998;
  miniapp.style.display = "inline-block";
  menumain = document.getElementById('desktop-menu-main')
  menusettings = document.getElementById('desktop-menu-settings')

  if(menumain.style.display = "block"){
      menumain.style.display = "none";
      menusettings.style.display = "none";
  }

  app.style.width = '75%';
	app.style.height = '500px';
  app.style.top = 'calc(50% - calc(500px / 2))';
	app.style.left = 'calc(50% - calc(75% / 2))';
  app.style.resize = "both";
  app.style.borderRadius = "4px";
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

  document.getElementById('htmlviewer-window-content-htmlviewer').value = localStorage.getItem('htmlviewer');

  restoreheight = app.style.height;
  restorewidth = app.style.width;
  restoretop = app.style.top;
  restoreleft = app.style.left;
}
  
function htmlviewerappfocus(app = document.getElementById('htmlviewer-window')){
  var savewindow = document.getElementById('htmlviewer-window-save-window');
  
  z++;
  app.style.zIndex = z;
  z++;
  if(savewindow){savewindow.style.zIndex = app.style.zIndex = z;}
  document.getElementById('desktop-taskbar').style.zIndex = z + 999;
  document.getElementById('desktop-menu-main').style.zIndex = z + 998;
  document.getElementById('desktop-menu-settings').style.zIndex = z + 998;
}

function closehtmlviewerapp(app = document.getElementById('htmlviewer-window'), miniapp = document.getElementById('desktop-taskbar-htmlviewer-app-button')){
  var taskbarminimizedapps = document.getElementById('desktop-taskbar-minimized-apps');
  
  app.style.animation = 'closewindow 0.25s';
  app.style.animationDuration = '0.25s';
  setTimeout(() => {
    app.style.display = "none";
    miniapp.parentNode.removeChild(miniapp);
    htmlviewerwindowopen = false;
  }, 250);
}

function resizehtmlviewerapp(app = document.getElementById("htmlviewer-window")){
  if (app.style.width === '100%') {
		app.style.width = restorewidth;
		app.style.height = restoreheight;
    app.style.left = restoreleft;
    app.style.top = restoretop;
    app.style.resize = "both";
    app.style.borderRadius = "4px";
    app.style.animation = 'maximizewindow 0.25s';
    app.style.transition = "0.15s";
    setTimeout(function() {
			  app.style.transition = "none";
		}, 150)
	} else {
    restoreheight = app.style.height;
    restorewidth = app.style.width; 
    restoretop = app.style.top;
    restoreleft = app.style.left;
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

function minimizehtmlviewerapp(app = document.getElementById("htmlviewer-window"), miniapp = document.getElementById('desktop-taskbar-htmlviewer-app-button')) {
  if (htmlviewerwindowopen = true) {
    if(app.style.display === 'block'){
      app.style.animation = 'minimizewindow 0.25s';
      app.style.animationDuration = '0.25s';
      setTimeout(() => {
        app.style.display = 'none';
      }, 250);
    }
    else {
      app.style.display = 'block';
      app.style.animation = 'callwindow 0.25s';
      htmlviewerappfocus()
    }
  }
  else {
    openhtmlviewerapp()
  }
}

function sidehtmlviewerapp(app = document.getElementById("htmlviewer-window")){
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

function snapminhtmlviewerapp(app = document.getElementById("htmlviewer-window")){
  var appwidth = parseInt(restorewidth, 10);
  var posleft = window.event.clientX - (appwidth * 0.5);
  var posleftcss = posleft + 'px';
  var postop = window.event.clientY + 'px';

  if (app.style.height === 'calc(100% - 40px)') {
		app.style.width = restorewidth;
		app.style.height = restoreheight;
    app.style.left = posleftcss;
    app.style.top = '40px';
    app.style.resize = "both";
    app.style.borderRadius = "4px";
	}
}

function snaphtmlviewerapp(app = document.getElementById("htmlviewer-window")){
  var clienttop = window.event.clientY;
  var clientleft = window.event.clientX;

  if (clienttop <= 0) {
    if (app.style.width === 'calc(100% - 40px)') {
      app.style.width = restorewidth;
      app.style.height = restoreheight;
      app.style.resize = "both";
      app.style.borderRadius = "4px";
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
    sidehtmlviewerapp()
    // document.getElementById("htmlviewer-window-header-title").innerHTML = 'Detected';
  }

  if(clientleft >= (window.innerWidth - 1)){
    sidehtmlviewerapp()
  }
}

function saverestorepos(app = document.getElementById('htmlviewer-window')){
  restoreheight = app.style.height;
  restorewidth = app.style.width; 
  restoretop = app.style.top;
  restoreleft = app.style.left;
}

window.addEventListener("load", function(){
dragElement(document.getElementById("htmlviewer-window"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("htmlviewer-window-header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById("htmlviewer-window-header").onmousedown = dragMouseDown;
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
    snapminhtmlviewerapp();
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
    snaphtmlviewerapp();
  }
}

});

var htmlviewertaskbarfile = document.getElementById('htmlviewer-window-content-taskbar-file');

htmlviewertaskbarfile.addEventListener('click', event => {
  var creatediv = document.createElement('div');
  var divid = document.createAttribute('id');
  var dividvalue = divid.value = `htmlviewer-window-content-taskbar-file-menu`;
  var divclass = document.createAttribute('class');
  var divclassvalue = divclass.value = `desktop-menu`;

  var htmleditorfilemenu = document.getElementById(`htmlviewer-window-content-taskbar-file-menu`);
  
  if(htmleditorfilemenu){
    desktop.removeChild(htmleditorfilemenu);
  } else {
    desktop.appendChild(creatediv);
    creatediv.dividvalue;
    creatediv.setAttributeNode(divid);
    creatediv.divclassvalue;
    creatediv.setAttributeNode(divclass);

    creatediv.style.position = 'absolute';
    creatediv.style.top = convertcsspx(window.event.clientY);
    creatediv.style.left = convertcsspx(window.event.clientX);
    creatediv.style.animation = 'openwindow 0.15s ease-out';

    creatediv.style.height = 'auto';
    creatediv.style.width = convertcsspx(180);
    creatediv.style.zIndex = document.getElementById('htmlviewer-window').style.zIndex + 1;

    createMenuButton(
      creatediv, 
      /* Button Value */ 'Open', 
      /* Button Id */ 'htmlviewer-window-content-taskbar-file-menu-openbutton',
      /* Button Class */ 'desktop-menu-button',
      /* Button Event */ 'onclick',
      /* Button Link */ "htmlviewerappopenwindow()",
      /* Button Icon */ '../../res/images/icons/imageres/checked_small.png'
  );
  }
});

function htmlviewerappopenwindow(){
  desktop.appendChild(genwindow);
  createDOMAttribute(genwindow, 'id', 'htmlviewer-window-open-window');
  createDOMAttribute(genwindow, 'class', 'window');
  createDOMAttribute(genwindow, 'onmousedown', "generatedappfocus('htmlviewer-window-open-window')");

  document.getElementById(`htmlviewer-window-open-window`).innerHTML = `
  
  <div id="htmlviewer-window-open-window-header" class="window-header">
  
    <button id="htmlviewer-window-open-window-close-button" class="window-header-close-button" onclick="closegeneratedapp('htmlviewer-window-open-window')"></button>        
    <a class="window-header-title" id="htmlviewer-window-open-window-header-title"></a>

  </div>

  <div id="htmlviewer-window-open-window-content" class="window-content">

    <a class="text-default" id="htmlviewer-window-open-window-content-p">File list: </a>

    <div class="system-file-finder" id="htmlviewer-window-save-window-content-file-finder">
    </div>

    <input id="htmlviewer-window-open-window-content-filename-input" class="system-input-text" type="text" placeholder="File Name" onkeydown="htmlviewerappopeninput()">
    
    <button class="system-input-button" id="htmlviewer-window-open-window-content-input-button1" onclick="htmlviewerappopen()">Open</button>
  
  </div>
  
  `;
  
  dragElement(`htmlviewer-window-open-window`);

  document.getElementById(`htmlviewer-window-open-window`).style.animation = 'openwindow 0.25s';

  document.getElementById(`htmlviewer-window-open-window`).style.height = '200px';
  document.getElementById(`htmlviewer-window-open-window`).style.width = '460px';
  document.getElementById(`htmlviewer-window-open-window`).style.top = `calc(50% - ${(parseInt(document.getElementById(`htmlviewer-window-open-window`).style.height) * 0.5)}px)`;
  document.getElementById(`htmlviewer-window-open-window`).style.left = `calc(50% - ${(parseInt(document.getElementById(`htmlviewer-window-open-window`).style.width) * 0.5)}px)`;
  document.getElementById(`htmlviewer-window-open-window-header-title`).innerText = `Open File`;
  document.getElementById(`htmlviewer-window-open-window`).style.zIndex = z + 1;
  document.getElementById(`htmlviewer-window-open-window`).style.resize = 'both';

  if(window.innerHeight > window.innerWidth){
    document.getElementById(`htmlviewer-window-open-window`).style.height = 'calc(100% - 40px)';
    document.getElementById(`htmlviewer-window-open-window`).style.width = '100%';
    document.getElementById(`htmlviewer-window-open-window`).style.top = `0px`;
    document.getElementById(`htmlviewer-window-open-window`).style.left = `0px`;
    document.getElementById(`htmlviewer-window-open-window`).style.resize = 'none';
  }

  document.getElementById(`htmlviewer-window-open-window-content-p`).style.top = '13px';
  document.getElementById(`htmlviewer-window-open-window-content-p`).style.left = '15px';

  document.getElementById(`htmlviewer-window-open-window-content-input-button1`).style.top = `calc(calc(100% - 31px) - 15px)`;
  document.getElementById(`htmlviewer-window-open-window-content-input-button1`).style.left = `calc(calc(100% - 72px) - 15px)`;
  document.getElementById(`htmlviewer-window-open-window-content-input-button1`).style.width = `72px`;
  document.getElementById(`htmlviewer-window-open-window-content-input-button1`).style.paddingLeft = '0px';
  document.getElementById(`htmlviewer-window-open-window-content-input-button1`).style.paddingRight = '0px';
  document.getElementById(`htmlviewer-window-open-window-content-input-button1`).focus();

  document.getElementById('htmlviewer-window-open-window-content-filename-input').style.position = 'absolute';
  document.getElementById('htmlviewer-window-open-window-content-filename-input').style.top = `calc(calc(100% - 31px) - 15px)`;
  document.getElementById('htmlviewer-window-open-window-content-filename-input').style.left = '15px';
  document.getElementById('htmlviewer-window-open-window-content-filename-input').style.height = '22px';
  document.getElementById('htmlviewer-window-open-window-content-filename-input').style.width = '335px';

  document.getElementById('htmlviewer-window-save-window-content-file-finder').innerHTML = localStorage.getItem('txtfilelist');
}

function htmlviewerappopeninput(){
if(event.keyCode == 13){
var filenameinput = document.getElementById('htmlviewer-window-open-window-content-filename-input');
var htmlviewercontent = document.getElementById('htmlviewer-window-content-htmlviewer');

htmlviewercontent.innerHTML = localStorage.getItem(filenameinput.value);
closegeneratedapp('htmlviewer-window-open-window');
}
}

function htmlviewerappopen(){
var filenameinput = document.getElementById('htmlviewer-window-open-window-content-filename-input');
var htmlviewercontent = document.getElementById('htmlviewer-window-content-htmlviewer');

htmlviewercontent.innerHTML = localStorage.getItem(filenameinput.value);

closegeneratedapp('htmlviewer-window-open-window');
}