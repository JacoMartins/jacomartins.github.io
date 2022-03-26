function terminalResizeWindow(id) {
  var wd = document.getElementById(id);

  if (wd.style.width === '100%') {
    wd.style.width = terminalrestorewidth;
		wd.style.height = terminalrestoreheight;
    wd.style.left = terminalrestoreleft;
    wd.style.top = terminalrestoretop;
    wd.style.resize = "both";
    wd.style.borderRadius = "4px";
    wd.style.animation = 'maximizewindow 0.25s';
    wd.style.transition = "0.15s";
    setTimeout(function () {
      wd.style.transition = "none";
    }, 150)
  } else {
    terminalrestorewidth = wd.style.width;
    terminalrestoreheight = wd.style.height;
    terminalrestoreleft = wd.style.left;
    terminalrestoretop = wd.style.top;
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

function saveterminalrestorepos(app = document.getElementById('terminal-window')){
  terminalrestoreheight = app.style.height;
  terminalrestorewidth = app.style.width; 
  terminalrestoretop = app.style.top;
  terminalrestoreleft = app.style.left;
}
