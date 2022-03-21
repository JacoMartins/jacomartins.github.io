// Desktop - Main Code


var desktop = document.getElementById(`owner-user`);

var z = 0;

desktop.addEventListener('contextmenu', function (){
    var creatediv = document.createElement('div');
    var divid = document.createAttribute('id');
    var dividvalue = divid.value = `desktop-context-menu`;
    var divclass = document.createAttribute('class');
    var divclassvalue = divclass.value = `desktop-menu`;

    var contextmenu = document.getElementById(`desktop-context-menu`);
    
    if(contextmenu){
        contextmenu.style.position = 'absolute';
        contextmenu.style.top = convertcsspx(window.event.clientY);
        contextmenu.style.left = convertcsspx(window.event.clientX);
        creatediv.style.animation = 'openwindow 0.15s ease-out';

        contextmenu.style.width = convertcsspx(180);
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
        creatediv.style.zIndex = -z;

        createMenuButton(
            creatediv, 
            /* Button Value */ 'Terminal', 
            /* Button Id */ 'desktop-context-menu-button-terminal',
            /* Button Class */ 'desktop-menu-button',
            /* Button Event */ 'onclick',
            /* Button Link */ 'openterminalapp()',
            /* Button Icon */ '../../res/images/icons/imageres/.png'
        );

        createMenuButton(
            creatediv, 
            /* Button Value */ 'Customize', 
            /* Button Id */ 'desktop-context-menu-button-customize',
            /* Button Class */ 'desktop-menu-button',
            /* Button Event */ 'onclick',
            /* Button Link */ 'opensettingsapp(); settingsappcategory("appearance");',
            /* Button Icon */ '../../res/images/icons/imageres/settings-small.png'
        );
    }
});

window.addEventListener('click', function (){
    var contextmenu = document.getElementById(`desktop-context-menu`);
    var notepadfilemenu = document.getElementById(`notepad-window-content-taskbar-file-menu`);
    var htmlviewerfilemenu = document.getElementById(`htmlviewer-window-content-taskbar-file-menu`);
    var iframefilemenu = document.getElementById(`iframe-window-content-taskbar-file-menu`);

    var menumain = document.getElementById('desktop-menu-main');
    var menusettings = document.getElementById('desktop-menu-settings');

    var e = window.event;

    if(contextmenu){
        desktop.removeChild(contextmenu);
    }

    if(notepadfilemenu){
        notepadfilemenuleft = parseInt(notepadfilemenu.style.left, 10);
        notepadfilemenuright = (parseInt(notepadfilemenu.style.left, 10) + parseInt(notepadfilemenu.style.width, 10));
        notepadfilemenutop = parseInt(notepadfilemenu.style.top, 10);
        notepadfilemenubot = (parseInt(notepadfilemenu.style.top, 10) + parseInt(notepadfilemenu.style.left, 10));

        if(e.clientX < notepadfilemenuleft || e.clientX > notepadfilemenuleft || e.clientY < notepadfilemenutop || e.clientY > notepadfilemenubot){
            desktop.removeChild(notepadfilemenu);
        }
    }

    if(htmlviewerfilemenu){
        htmlviewerfilemenuleft = parseInt(htmlviewerfilemenu.style.left, 10);
        htmlviewerfilemenuright = (parseInt(htmlviewerfilemenu.style.left, 10) + parseInt(htmlviewerfilemenu.style.width, 10));
        htmlviewerfilemenutop = parseInt(htmlviewerfilemenu.style.top, 10);
        htmlviewerfilemenubot = (parseInt(htmlviewerfilemenu.style.top, 10) + parseInt(htmlviewerfilemenu.style.left, 10));

        if(e.clientX < htmlviewerfilemenuleft || e.clientX > htmlviewerfilemenuleft || e.clientY < htmlviewerfilemenutop || e.clientY > htmlviewerfilemenubot){
            desktop.removeChild(htmlviewerfilemenu);
        }
    }

    if(iframefilemenu){
        iframefilemenuleft = parseInt(iframefilemenu.style.left, 10);
        iframefilemenuright = (parseInt(iframefilemenu.style.left, 10) + parseInt(iframefilemenu.style.width, 10));
        iframefilemenutop = parseInt(iframefilemenu.style.top, 10);
        iframefilemenubot = (parseInt(iframefilemenu.style.top, 10) + parseInt(iframefilemenu.style.left, 10));

        if(e.clientX < iframefilemenuleft || e.clientX > iframefilemenuleft || e.clientY < iframefilemenutop || e.clientY > iframefilemenubot){
            desktop.removeChild(iframefilemenu);
        }
    }
});

function convertcsspx(value){
    return value + 'px';
}

function createMenuButton(inside, value, id, cl, evnt, link, icon){
    var button = document.createElement('button');

    inside.appendChild(button);
    createDOMAttribute(button, 'id', id);
    createDOMAttribute(button, 'class', cl);
    createDOMAttribute(button, 'style', `background-image: url("${icon}");`);
    createDOMAttribute(button, evnt, link);
    button.innerText= value;
}

function createDOMAttribute(id, eAtr, value){
    var createatr = document.createAttribute(eAtr);
    var createatrvalue = createatr.value = value;

    id.createatrvalue;
    id.setAttributeNode(createatr);
}

function createWindow(id){
    var window = document.createElement('window');

    desktop.appendChild(window);
    createDOMAttribute(window, 'id', `${id}-window`);
    createDOMAttribute(window, 'class', `window`);
}

// generated

var genid = 0;

function generatedappfocus(id){
    var app = document.getElementById(id);
    z++;
    app.style.zIndex = z;
  
    document.getElementById('desktop-taskbar').style.zIndex = z + 999;
    document.getElementById('desktop-menu-main').style.zIndex = z + 998;
    document.getElementById('desktop-menu-settings').style.zIndex = z + 998;
  }
  
  function closegeneratedapp(id){  
    var desktop = document.getElementById('owner-user');
    var app = document.getElementById(id);
  
    app.style.animation = 'closewindow 0.25s';
    app.style.animationDuration = '0.25s';
    setTimeout(() => {
      desktop.removeChild(document.getElementById(id));
    }, 250);
  }
  
  function resizegeneratedapp(app = document.getElementById(`generated${genid - 1}-window`)){
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
  
  function minimizegeneratedapp(app = document.getElementById(`generated${genid - 1}-window`)) {
    if (generatedwindowopen = true) {
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
        generatedappfocus()
      }
    }
    else {
      opengeneratedapp()
    }
  }
  
  function sidegeneratedapp(app = document.getElementById(`generated${genid - 1}-window`)){
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
  
  function snapmingeneratedapp(app = document.getElementById(`generated${genid - 1}-window`)){
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
  
  function snapgeneratedapp(app = document.getElementById(`generated${genid - 1}-window`)){
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
      sidegeneratedapp()
      // document.getElementById("generated-window-header-title").innerHTML = 'Detected';
    }
  
    if(clientleft >= (window.innerWidth - 1)){
      sidegeneratedapp()
    }
  }
  
  function saverestorepos(app = document.getElementById(`generated${genid - 1}-window`)){
    restoreheight = app.style.height;
    restorewidth = app.style.width; 
    restoretop = app.style.top;
    restoreleft = app.style.left;
  }
  
    
    function dragElement(elmnt) {
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      if (document.getElementById(`${elmnt}-header`)) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(`${elmnt}-header`).onmousedown = dragMouseDown;
      } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        document.getElementById(elmnt).onmousedown = dragMouseDown;
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
        document.getElementById(elmnt).style.top = (document.getElementById(elmnt).offsetTop - pos2) + `px`;
        document.getElementById(elmnt).style.left = (document.getElementById(elmnt).offsetLeft - pos1) + `px`;
      }
    
      function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
  
  