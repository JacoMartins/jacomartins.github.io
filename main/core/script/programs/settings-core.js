// Settings Program - Core Code

var allcategories = ['users', 'appearance'];

function settingsbackbtn(){
  var categories = 'settings-window-categories-';
  var sidebarbtn = 'settings-window-sidebar-buttons-';
  var appearanceradio1 = document.getElementById('settings-window-categories-appearance-multibutton-button1');

  for(c = 0; c < allcategories.length; c++){
    document.getElementById(categories + allcategories[c]).style.display = 'none';
    document.getElementById(categories + allcategories[c]).style.animation = 'system-fadeout 0.25s';
    document.getElementById(sidebarbtn + allcategories[c]).style.fontFamily = 'Inter Regular';
    document.getElementById(sidebarbtn + allcategories[c]).style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
    document.getElementById(sidebarbtn + allcategories[c]).style.left = 'calc(-0px)';
    document.getElementById(sidebarbtn + allcategories[c]).style.transition = '0.15s';
  }

  document.getElementById('settings-window-content').style.display = 'none';
  document.getElementById('settings-window-sidebar').style.display = 'block';
  document.getElementById('settings-window-sidebar').style.animation = 'system-fadein 0.25s';
}

function settingsappcategory(category){
  var categories = 'settings-window-categories-';
  var sidebarbtn = 'settings-window-sidebar-buttons-';
  var appearanceradio1 = document.getElementById('settings-window-categories-appearance-multibutton-button1');
  var selectedindicator = document.getElementById('system-input-sidebar-selected-indicator');

  for(c = 0; c < allcategories.length; c++){
    document.getElementById(categories + allcategories[c]).style.display = 'none';
    document.getElementById(categories + allcategories[c]).style.animation = 'system-fadeout 0.25s';
    document.getElementById(sidebarbtn + allcategories[c]).style.fontFamily = 'Inter Regular';
    document.getElementById(sidebarbtn + allcategories[c]).style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
    document.getElementById(sidebarbtn + allcategories[c]).style.left = 'calc(-0px)';
    document.getElementById(sidebarbtn + allcategories[c]).style.transition = '0.15s';
  }

  document.getElementById(categories + category).style.display = 'block';
  document.getElementById(categories + category).style.animation = 'system-fadein 0.25s';
  document.getElementById(sidebarbtn + category).style.fontFamily = 'Inter Med';
  document.getElementById(sidebarbtn + category).style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
  document.getElementById(sidebarbtn + category).style.left = 'calc(+0px)';
  document.getElementById(sidebarbtn + category).style.transition = '0.15s';
  

  if(category == 'users') {
    appearanceradio1.checked = 'true';
    selectedindicator.style.top = '8px';
    selectedindicator.style.transition = '0.15s';
  }

  if(category == 'appearance') {
    appearanceradio1.checked = 'true';
    selectedindicator.style.top = '49px';
    selectedindicator.style.transition = '0.15s';
  }

  selectedindicator.style.display = 'block';

  if(window.innerHeight > window.innerWidth){
    document.getElementById('settings-window-sidebar').style.display = 'none';
    document.getElementById('settings-window-content').style.display = 'block';
    document.getElementById(categories + 'users').style.display = 'none';
    document.getElementById(categories + 'appearance').style.display = 'none';

    document.getElementById(categories + category).style.display = 'block';
    document.getElementById(categories + category).style.display = 'block';
    selectedindicator.style.display = 'none';
  }
}

var usernameinput = document.getElementById('settings-window-categories-users-input-uname');

function changeusersettingsapp(){
    localStorage.setItem('username', unameinput.value);
    document.getElementById('logon-screen-username').innerHTML = unameinput.value;
    document.getElementById('terminal-window-content-prompt').innerText = unameinput.value + '$:';

    //localStorage.setItem('userpw', userpwinput.value);
}

// Change Password Dialogue Box Creation

var genwindow = document.createElement('div');
var genwindowclass = document.createAttribute('class');
var genwindowappid = document.createAttribute('id');
var genwindowevent = document.createAttribute('onmousedown');
var genwindowclassname = genwindowclass.value = 'window';
var genwindowidname = genwindowappid.value = 'generated' + genid + '-window';
var genwindoweventvalue = genwindowevent.value = `generatedappfocus(${genid})`;


function settingsappchangepw(){
        desktop.appendChild(genwindow);
        genwindow.genwindowidname;
        genwindow.setAttributeNode(genwindowappid);
        genwindow.genwindowclassname;
        genwindow.setAttributeNode(genwindowclass);
        genwindow.genwindoweventvalue;
        genwindow.setAttributeNode(genwindowevent);
        
        document.getElementById(`generated${genid}-window`).innerHTML = `
        
        <div id="generated${genid}-window-header" class="window-header" onmouseover="">
        
          <button id="generated${genid}-window-close-button" class="window-header-close-button" onclick="closegeneratedapp(${genid})"></button>        
          <a class="window-header-title" id="generated${genid}-window-header-title"></a>
    
        </div>
    
        <div id="generated${genid}-window-content" class="window-content">
          <a class="text-default" id="generated${genid}-window-content-p">Paragraph</a>
          <button class="system-input-button" id="generated${genid}-window-content-input-button1" onclick="closegeneratedapp(${genid})">OK</button>
        </div>
        
        `;
        
        dragElement(document.getElementById(`generated${genid}-window`));

      	document.getElementById(`generated${genid}-window`).style.animation = 'openwindow 0.25s';

        document.getElementById(`generated${genid}-window`).style.height = '134px';
        document.getElementById(`generated${genid}-window`).style.width = '352px';
        document.getElementById(`generated${genid}-window`).style.top = `calc(50% - ${(parseInt(document.getElementById(`generated${genid}-window`).style.height) * 0.5)}px)`;
        document.getElementById(`generated${genid}-window`).style.left = `calc(50% - ${(parseInt(document.getElementById(`generated${genid}-window`).style.width) * 0.5)}px)`;
        document.getElementById(`generated${genid}-window-header-title`).innerText = `Message${genid}`;
        document.getElementById(`generated${genid}-window`).style.zIndex = z + 1;

        document.getElementById(`generated${genid}-window-content-p`).style.top = '15px';
        document.getElementById(`generated${genid}-window-content-p`).style.left = '15px';

        document.getElementById(`generated${genid}-window-content-p`).innerText = 'Test';

        document.getElementById(`generated${genid}-window-content-input-button1`).style.top = `calc(calc(100% - 31px) - 15px)`;
        document.getElementById(`generated${genid}-window-content-input-button1`).style.left = `calc(calc(100% - 78px) - 15px)`;
        document.getElementById(`generated${genid}-window-content-input-button1`).focus();

        setTimeout(() => {
          document.getElementById(`generated${genid}-window`).onmousedown = generatedappfocus(genid);
        }, 00);

        genid = genid + 1;
}
