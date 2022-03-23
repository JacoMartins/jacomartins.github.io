// Window functions source code (Move, Focus, Resize, Minimize ETC).

function terminalappfocus(app = document.getElementById('terminal-window')) {
    z++;
    app.style.zIndex = z;
    document.getElementById('desktop-taskbar').style.zIndex = z + 999;
    document.getElementById('desktop-menu-main').style.zIndex = z + 998;
    document.getElementById('desktop-menu-settings').style.zIndex = z + 998;
}

function promptfocus(prompt = document.getElementById("terminal-window-terminal")) {
    prompt.focus();
}

function resizeterminalapp(app = document.getElementById("terminal-window")) {
    if (app.style.width === '100%') {
        app.style.width = terminalrestorewidth;
        app.style.height = terminalrestoreheight;
        app.style.left = terminalrestoreleft;
        app.style.top = terminalrestoretop;
        app.style.resize = "both";
        app.style.borderRadius = "4px";
        app.style.animation = 'maximizewindow 0.25s';
        app.style.transition = "0.15s";
        setTimeout(function () {
            app.style.transition = "none";
        }, 150)
    } else {
        terminalrestoreheight = app.style.height;
        terminalrestorewidth = app.style.width;
        terminalrestoretop = app.style.top;
        terminalrestoreleft = app.style.left;
        app.style.width = '100%';
        app.style.height = 'calc(100% - 40px)';
        app.style.top = "40px";
        app.style.left = "0px";
        app.style.resize = "none";
        app.style.borderRadius = "0px";
        app.style.animation = 'maximizewindow 0.25s';
        app.style.transition = "0.15s";
        setTimeout(function () {
            app.style.transition = "none";
        }, 150)
    }
}

function minimizeterminalapp(app = document.getElementById("terminal-window"), miniapp = document.getElementById('desktop-taskbar-terminal-app-button')) {
    if (terminalwindowopen = true) {
        if (app.style.display === 'block') {
            app.style.animation = 'minimizewindow 0.25s';
            app.style.animationDuration = '0.25s';
            setTimeout(() => {
                app.style.display = 'none';
            }, 250);
        }
        else {
            app.style.display = 'block';
            app.style.animation = 'callwindow 0.25s';
            terminalappfocus()
        }
    }
    else {
        openterminalapp()
    }
}

function sideterminalapp(app = document.getElementById("terminal-window")) {
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
        setTimeout(function () {
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
        setTimeout(function () {
            app.style.transition = "none";
        }, 150)
    }
}

function snapminterminalapp(app = document.getElementById("terminal-window")) {
    var appwidth = parseInt(terminalrestorewidth, 10);
    var posleft = window.event.clientX - (appwidth * 0.5);
    var posleftcss = posleft + 'px';
    var postop = window.event.clientY + 'px';

    if (app.style.height === 'calc(100% - 40px)') {
        app.style.width = terminalrestorewidth;
        app.style.height = terminalrestoreheight;
        app.style.left = posleftcss;
        app.style.top = '40px';
        app.style.resize = "both";
        app.style.borderRadius = "4px";
    }
}

function snapterminalapp(app = document.getElementById("terminal-window")) {
    var clienttop = window.event.clientY;
    var clientleft = window.event.clientX;

    if (clienttop <= 0) {
        if (app.style.width === 'calc(100% - 40px)') {
            app.style.width = terminalrestorewidth;
            app.style.height = terminalrestoreheight;
            app.style.resize = "both";
            app.style.borderRadius = "4px";
            app.style.transition = "0.15s";
            setTimeout(function () {
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
            setTimeout(function () {
                app.style.transition = "none";
            }, 150)
        }
    }

    if (clientleft <= 0) {
        sideterminalapp()
        // document.getElementById("terminal-window-header-title").innerHTML = 'Detected';
    }

    if (clientleft >= (window.innerWidth - 1)) {
        sideterminalapp()
    }
}

function saveterminalrestorepos(app = document.getElementById('terminal-window')) {
    terminalrestoreheight = app.style.height;
    terminalrestorewidth = app.style.width;
    terminalrestoretop = app.style.top;
    terminalrestoreleft = app.style.left;
}

dragElement(document.getElementById("terminal-window"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById("terminal-window-header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById("terminal-window-header").onmousedown = dragMouseDown;
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
        snapminterminalapp();
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
        snapterminalapp();
    }
}

function promptfocus(prompt = document.getElementById("terminal-window-terminal")) {
    prompt.focus();
}  