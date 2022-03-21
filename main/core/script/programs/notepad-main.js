// Notepad Program - Main

let notepadwindowopen = false;

function opennotepadapp(app = document.getElementById('notepad-window')){
  notepadwindowopen = true;
  var taskbarminimizedapps = document.getElementById('desktop-taskbar-minimized-apps');
  var miniapp = document.createElement('button');
  var miniappclass = document.createAttribute('class');
  var miniappid = document.createAttribute('id');
  var miniapponclick = document.createAttribute('onclick');
  var miniappclassname = miniappclass.value = 'desktop-taskbar-app-button';
  var miniappidname = miniappid.value = 'desktop-taskbar-notepad-app-button';
  var miniapponclickfunction = miniapponclick.value = 'minimizenotepadapp()';
  var resizebutton = document.getElementById("notepad-window-resize-button");
  var minimizebutton = document.getElementById("notepad-window-minimize-button");
  
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

  document.getElementById('notepad-window-content-text-editor').value = localStorage.getItem('notepad');

  restoreheight = app.style.height;
  restorewidth = app.style.width;
  restoretop = app.style.top;
  restoreleft = app.style.left;
}
  
function notepadappfocus(app = document.getElementById('notepad-window')){
  var savewindow = document.getElementById('notepad-window-save-window');
  
  z++;
  app.style.zIndex = z;
  z++;
  if(savewindow){savewindow.style.zIndex = app.style.zIndex = z;}
  document.getElementById('desktop-taskbar').style.zIndex = z + 999;
  document.getElementById('desktop-menu-main').style.zIndex = z + 998;
  document.getElementById('desktop-menu-settings').style.zIndex = z + 998;
}

function closenotepadapp(app = document.getElementById('notepad-window'), miniapp = document.getElementById('desktop-taskbar-notepad-app-button')){
  var taskbarminimizedapps = document.getElementById('desktop-taskbar-minimized-apps');
  
  app.style.animation = 'closewindow 0.25s';
  app.style.animationDuration = '0.25s';
  setTimeout(() => {
    app.style.display = "none";
    miniapp.parentNode.removeChild(miniapp);
    notepadwindowopen = false;
  }, 250);
}

function resizenotepadapp(app = document.getElementById("notepad-window")){
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

function minimizenotepadapp(app = document.getElementById("notepad-window"), miniapp = document.getElementById('desktop-taskbar-notepad-app-button')) {
  if (notepadwindowopen = true) {
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
      notepadappfocus()
    }
  }
  else {
    opennotepadapp()
  }
}

function sidenotepadapp(app = document.getElementById("notepad-window")){
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

function snapminnotepadapp(app = document.getElementById("notepad-window")){
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

function snapnotepadapp(app = document.getElementById("notepad-window")){
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
    sidenotepadapp()
    // document.getElementById("notepad-window-header-title").innerHTML = 'Detected';
  }

  if(clientleft >= (window.innerWidth - 1)){
    sidenotepadapp()
  }
}

function saverestorepos(app = document.getElementById('notepad-window')){
  restoreheight = app.style.height;
  restorewidth = app.style.width; 
  restoretop = app.style.top;
  restoreleft = app.style.left;
}

window.addEventListener("load", function(){
dragElement(document.getElementById("notepad-window"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("notepad-window-header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById("notepad-window-header").onmousedown = dragMouseDown;
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
    snapminnotepadapp();
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
    snapnotepadapp();
  }
}

});

var notepadtaskbarfile = document.getElementById('notepad-window-content-taskbar-file');

notepadtaskbarfile.addEventListener('click', event => {
  var creatediv = document.createElement('div');
  var divid = document.createAttribute('id');
  var dividvalue = divid.value = `notepad-window-content-taskbar-file-menu`;
  var divclass = document.createAttribute('class');
  var divclassvalue = divclass.value = `desktop-menu`;

  var filemenu = document.getElementById(`notepad-window-content-taskbar-file-menu`);
  
  if(filemenu){
    desktop.removeChild(filemenu);
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
    creatediv.style.zIndex = document.getElementById('notepad-window').style.zIndex + 1;

    createMenuButton(
        creatediv, 
        /* Button Value */ 'Save', 
        /* Button Id */ 'notepad-window-content-taskbar-file-menu-savebutton',
        /* Button Class */ 'desktop-menu-button',
        /* Button Event */ 'onclick',
        /* Button Link */ "notepadappsavewindow()",
        /* Button Icon */ '../../res/images/icons/imageres/checked_small.png'
    );

    createMenuButton(
      creatediv, 
      /* Button Value */ 'Open', 
      /* Button Id */ 'notepad-window-content-taskbar-file-menu-openbutton',
      /* Button Class */ 'desktop-menu-button',
      /* Button Event */ 'onclick',
      /* Button Link */ "notepadappopenwindow()",
      /* Button Icon */ '../../res/images/icons/imageres/checked_small.png'
  );
  }
});

function notepadappsavewindow(){
        desktop.appendChild(genwindow);
        createDOMAttribute(genwindow, 'id', 'notepad-window-save-window');
        createDOMAttribute(genwindow, 'class', 'window');
        createDOMAttribute(genwindow, 'onmousedown', "generatedappfocus('notepad-window-save-window')");

        document.getElementById(`notepad-window-save-window`).innerHTML = `
        
        <div id="notepad-window-save-window-header" class="window-header">
        
          <button id="notepad-window-save-window-close-button" class="window-header-close-button" onclick="closegeneratedapp('notepad-window-save-window')"></button>        
          <a class="window-header-title" id="notepad-window-save-window-header-title"></a>
    
        </div>
    
        <div id="notepad-window-save-window-content" class="window-content">

          <a class="text-default" id="notepad-window-save-window-content-p">File list: </a>

          <div class="system-file-finder" id="notepad-window-save-window-content-file-finder">
          </div>

          <input id="notepad-window-save-window-content-filename-input" class="system-input-text" type="text" placeholder="File Name" onkeydown="notepadappsaveinput()">
          
          <button class="system-input-button" id="notepad-window-save-window-content-input-button1" onclick="notepadappsave()">Save</button>
        
        </div>
        
        `;
        
        dragElement(`notepad-window-save-window`);

      	document.getElementById(`notepad-window-save-window`).style.animation = 'openwindow 0.25s';

        document.getElementById(`notepad-window-save-window`).style.height = '200px';
        document.getElementById(`notepad-window-save-window`).style.width = '460px';
        document.getElementById(`notepad-window-save-window`).style.top = `calc(50% - ${(parseInt(document.getElementById(`notepad-window-save-window`).style.height) * 0.5)}px)`;
        document.getElementById(`notepad-window-save-window`).style.left = `calc(50% - ${(parseInt(document.getElementById(`notepad-window-save-window`).style.width) * 0.5)}px)`;
        document.getElementById(`notepad-window-save-window-header-title`).innerText = `Save File`;
        document.getElementById(`notepad-window-save-window`).style.zIndex = z + 1;
        document.getElementById(`notepad-window-save-window`).style.resize = 'both';

        if(window.innerHeight > window.innerWidth){
          document.getElementById(`notepad-window-save-window`).style.height = 'calc(100% - 40px)';
          document.getElementById(`notepad-window-save-window`).style.width = '100%';
          document.getElementById(`notepad-window-save-window`).style.top = `0px`;
          document.getElementById(`notepad-window-save-window`).style.left = `0px`;
          document.getElementById(`notepad-window-save-window`).style.resize = 'none';
        }      

        document.getElementById(`notepad-window-save-window-content-p`).style.top = '13px';
        document.getElementById(`notepad-window-save-window-content-p`).style.left = '15px';

        document.getElementById(`notepad-window-save-window-content-input-button1`).style.top = `calc(calc(100% - 31px) - 15px)`;
        document.getElementById(`notepad-window-save-window-content-input-button1`).style.left = `calc(calc(100% - 72px) - 15px)`;
        document.getElementById(`notepad-window-save-window-content-input-button1`).style.width = `72px`;
        document.getElementById(`notepad-window-save-window-content-input-button1`).style.paddingLeft = '0px';
        document.getElementById(`notepad-window-save-window-content-input-button1`).style.paddingRight = '0px';
        document.getElementById(`notepad-window-save-window-content-input-button1`).focus();

        document.getElementById('notepad-window-save-window-content-filename-input').style.position = 'absolute';
        document.getElementById('notepad-window-save-window-content-filename-input').style.top = `calc(calc(100% - 31px) - 15px)`;
        document.getElementById('notepad-window-save-window-content-filename-input').style.left = '15px';
        document.getElementById('notepad-window-save-window-content-filename-input').style.height = '22px';
        document.getElementById('notepad-window-save-window-content-filename-input').style.width = '335px';

        document.getElementById('notepad-window-save-window-content-file-finder').innerHTML = localStorage.getItem('txtfilelist');
}

function notepadappsaveinput(){
  if(event.keyCode == 13){
    var filenameinput = document.getElementById('notepad-window-save-window-content-filename-input');
    var notepadtextarea = document.getElementById('notepad-window-content-text-editor');
    
    if(localStorage.getItem(filenameinput.value)){
      localStorage.setItem(filenameinput.value, notepadtextarea.value);
    } else {
      localStorage.setItem(filenameinput.value, notepadtextarea.value);
      localStorage.setItem('txtfilelist', localStorage.getItem('txtfilelist') + `<button class="system-file-button" onclick="
      if(document.getElementById('notepad-window-save-window-content-filename-input')){
        document.getElementById('notepad-window-save-window-content-filename-input').value = '${filenameinput.value}';
      }

      if(document.getElementById('notepad-window-open-window-content-filename-input')){
        document.getElementById('notepad-window-open-window-content-filename-input').value = '${filenameinput.value}';
      }

      if(document.getElementById('htmlviewer-window-open-window-content-filename-input')){
        document.getElementById('htmlviewer-window-open-window-content-filename-input').value = '${filenameinput.value}';
      }
      
      "
      
      ondblclick="
      if(document.getElementById('notepad-window-save-window-content-filename-input')){
        notepadappsave()
      }

      if(document.getElementById('notepad-window-open-window-content-filename-input')){
        notepadappopen()
      }

      if(document.getElementById('htmlviewer-window-open-window-content-filename-input')){
        htmlviewerappopen()
      }

      ">${filenameinput.value}</button>`);
    }

    closegeneratedapp('notepad-window-save-window');
  }
}

function notepadappsave(){
    var filenameinput = document.getElementById('notepad-window-save-window-content-filename-input');
    var notepadtextarea = document.getElementById('notepad-window-content-text-editor');
    
    if(localStorage.getItem(filenameinput.value)){
      localStorage.setItem(filenameinput.value, notepadtextarea.value);
    } else {
      localStorage.setItem(filenameinput.value, notepadtextarea.value);
      localStorage.setItem('txtfilelist', localStorage.getItem('txtfilelist') + `<button class="system-file-button" onclick="
      if(document.getElementById('notepad-window-save-window-content-filename-input')){
        document.getElementById('notepad-window-save-window-content-filename-input').value = '${filenameinput.value}';
      }

      if(document.getElementById('notepad-window-open-window-content-filename-input')){
        document.getElementById('notepad-window-open-window-content-filename-input').value = '${filenameinput.value}';
      }

      if(document.getElementById('htmlviewer-window-open-window-content-filename-input')){
        document.getElementById('htmlviewer-window-open-window-content-filename-input').value = '${filenameinput.value}';
      }
      
      "
      
      ondblclick="
      if(document.getElementById('notepad-window-save-window-content-filename-input')){
        notepadappsave()
      }

      if(document.getElementById('notepad-window-open-window-content-filename-input')){
        notepadappopen()
      }

      if(document.getElementById('htmlviewer-window-open-window-content-filename-input')){
        htmlviewerappopen()
      }

      ">${filenameinput.value}</button>`);
    }

    closegeneratedapp('notepad-window-save-window');
}

function notepadappopenwindow(){
  desktop.appendChild(genwindow);
  createDOMAttribute(genwindow, 'id', 'notepad-window-open-window');
  createDOMAttribute(genwindow, 'class', 'window');
  createDOMAttribute(genwindow, 'onmousedown', "generatedappfocus('notepad-window-open-window')");

  document.getElementById(`notepad-window-open-window`).innerHTML = `
  
  <div id="notepad-window-open-window-header" class="window-header">
  
    <button id="notepad-window-open-window-close-button" class="window-header-close-button" onclick="closegeneratedapp('notepad-window-open-window')"></button>        
    <a class="window-header-title" id="notepad-window-open-window-header-title"></a>

  </div>

  <div id="notepad-window-open-window-content" class="window-content">

    <a class="text-default" id="notepad-window-open-window-content-p">File list: </a>

    <div class="system-file-finder" id="notepad-window-save-window-content-file-finder">
    </div>

    <input id="notepad-window-open-window-content-filename-input" class="system-input-text" type="text" placeholder="File Name" onkeydown="notepadappopeninput()">
    
    <button class="system-input-button" id="notepad-window-open-window-content-input-button1" onclick="notepadappopen()">Open</button>
  
  </div>
  
  `;
  
  dragElement(`notepad-window-open-window`);

  document.getElementById(`notepad-window-open-window`).style.animation = 'openwindow 0.25s';

  document.getElementById(`notepad-window-open-window`).style.height = '200px';
  document.getElementById(`notepad-window-open-window`).style.width = '460px';
  document.getElementById(`notepad-window-open-window`).style.top = `calc(50% - ${(parseInt(document.getElementById(`notepad-window-open-window`).style.height) * 0.5)}px)`;
  document.getElementById(`notepad-window-open-window`).style.left = `calc(50% - ${(parseInt(document.getElementById(`notepad-window-open-window`).style.width) * 0.5)}px)`;
  document.getElementById(`notepad-window-open-window-header-title`).innerText = `Open File`;
  document.getElementById(`notepad-window-open-window`).style.zIndex = z + 1;
  document.getElementById(`notepad-window-open-window`).style.resize = 'both';

  if(window.innerHeight > window.innerWidth){
    document.getElementById(`notepad-window-open-window`).style.height = 'calc(100% - 40px)';
    document.getElementById(`notepad-window-open-window`).style.width = '100%';
    document.getElementById(`notepad-window-open-window`).style.top = `0px`;
    document.getElementById(`notepad-window-open-window`).style.left = `0px`;
    document.getElementById(`notepad-window-open-window`).style.resize = 'none';
  }      

  document.getElementById(`notepad-window-open-window-content-p`).style.top = '13px';
  document.getElementById(`notepad-window-open-window-content-p`).style.left = '15px';

  document.getElementById(`notepad-window-open-window-content-input-button1`).style.top = `calc(calc(100% - 31px) - 15px)`;
  document.getElementById(`notepad-window-open-window-content-input-button1`).style.left = `calc(calc(100% - 72px) - 15px)`;
  document.getElementById(`notepad-window-open-window-content-input-button1`).style.width = `72px`;
  document.getElementById(`notepad-window-open-window-content-input-button1`).style.paddingLeft = '0px';
  document.getElementById(`notepad-window-open-window-content-input-button1`).style.paddingRight = '0px';
  document.getElementById(`notepad-window-open-window-content-input-button1`).focus();

  document.getElementById('notepad-window-open-window-content-filename-input').style.position = 'absolute';
  document.getElementById('notepad-window-open-window-content-filename-input').style.top = `calc(calc(100% - 31px) - 15px)`;
  document.getElementById('notepad-window-open-window-content-filename-input').style.left = '15px';
  document.getElementById('notepad-window-open-window-content-filename-input').style.height = '22px';
  document.getElementById('notepad-window-open-window-content-filename-input').style.width = '335px';

  document.getElementById('notepad-window-save-window-content-file-finder').innerHTML = localStorage.getItem('txtfilelist');
}

function notepadappopeninput(){
if(event.keyCode == 13){
var filenameinput = document.getElementById('notepad-window-open-window-content-filename-input');
var notepadtextarea = document.getElementById('notepad-window-content-text-editor');

notepadtextarea.value = localStorage.getItem(filenameinput.value);
closegeneratedapp('notepad-window-open-window');
}
}

function notepadappopen(){
var filenameinput = document.getElementById('notepad-window-open-window-content-filename-input');
var notepadtextarea = document.getElementById('notepad-window-content-text-editor');

notepadtextarea.value = localStorage.getItem(filenameinput.value);

closegeneratedapp('notepad-window-open-window');
}