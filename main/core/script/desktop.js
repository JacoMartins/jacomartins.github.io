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
    var menumain = document.getElementById('desktop-menu-main');
    var menusettings = document.getElementById('desktop-menu-settings');

    if(contextmenu){
        desktop.removeChild(contextmenu);
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