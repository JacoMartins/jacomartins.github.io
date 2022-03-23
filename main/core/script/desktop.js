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
        contextmenu.style.top = convert('toPixels', window.event.clientY);
        contextmenu.style.left = convert('toPixels', window.event.clientX);
        creatediv.style.animation = 'openwindow 0.15s ease-out';

        contextmenu.style.width = convert('toPixels', 180);
    } else {
        desktop.appendChild(creatediv);
        creatediv.dividvalue;
        creatediv.setAttributeNode(divid);
        creatediv.divclassvalue;
        creatediv.setAttributeNode(divclass);

        creatediv.style.position = 'absolute';
        creatediv.style.top = convert('toPixels', window.event.clientY);
        creatediv.style.left = convert('toPixels', window.event.clientX);
        creatediv.style.animation = 'openwindow 0.15s ease-out';

        creatediv.style.height = 'auto';
        creatediv.style.width = convert('toPixels', 180);
        creatediv.style.zIndex = -z;

        createMenuButton(
            creatediv, 
            /* Button Value */ 'Terminal', 
            /* Button Id */ 'desktop-context-menu-button-terminal',
            /* Button Class */ 'desktop-menu-button',
            /* Button Event */ 'onclick',
            /* Button Link */ 'openterminalapp()',
            /* Button Icon */ '../../resources/images/icons/imageres/.png'
        );

        createMenuButton(
            creatediv, 
            /* Button Value */ 'Customize', 
            /* Button Id */ 'desktop-context-menu-button-customize',
            /* Button Class */ 'desktop-menu-button',
            /* Button Event */ 'onclick',
            /* Button Link */ 'opensettingsapp(); settingsappcategory("appearance");',
            /* Button Icon */ '../../resources/images/icons/imageres/settings-small.png'
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
        htmlviewerfilemenuleft = convert('toInt', htmlviewerfilemenu.style.left);
        htmlviewerfilemenuright = (convert('toInt', htmlviewerfilemenu.style.left) + convert('toInt', htmlviewerfilemenu.style.width));
        htmlviewerfilemenutop = convert('toInt', htmlviewerfilemenu.style.top);
        htmlviewerfilemenubot = (convert('toInt', htmlviewerfilemenu.style.top) + convert('toInt', htmlviewerfilemenu.style.height));

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

// generated

var genid = 0;