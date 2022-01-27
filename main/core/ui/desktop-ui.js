window.addEventListener("load", function(){
    dragElement(document.getElementById("developer-window-background"));
    
    function dragElement(elmnt) {
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      if (document.getElementById("developer-window-header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById("developer-window-header").onmousedown = dragMouseDown;
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
      }
    
      function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
    
    });

function menutrigger(menumain = document.getElementById('desktop-menu-main'), menusettings = document.getElementById('desktop-menu-settings')){
    if(menumain.style.display === "none"){
        menumain.style.display = "block";
        menusettings.style.display = "none";
    } else {
        menumain.style.display = "none";
    }
}

function settingstrigger(menusettings = document.getElementById('desktop-menu-settings'), menumain = document.getElementById('desktop-menu-main')){
  if(menusettings.style.display === "none"){
      menusettings.style.display = "block";
      menumain.style.display = "none";
  } else {
      menusettings.style.display = "none";
  }
}

// Settings

function opensettingsapp(app = document.getElementById('settings-window')){
    app.style.display = "block";
    menumain = document.getElementById('desktop-menu-main')

    if(menumain.style.display = "block"){
        menumain.style.display = "none";
    }
}

function closesettingsapp(app = document.getElementById('settings-window')){
    app.style.display = "none";
}

function igorcareca(desktop = document.getElementById("owner-user")){
    desktop.style.backgroundImage = "url('../../res/images/background/igor careca.png')";
}
