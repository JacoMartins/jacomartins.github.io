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

function changeusersettingsapp(unameinput = document.getElementById('settings-window-categories-users-input-uname'), userpwinput = document.getElementById('settings-window-categories-users-input-userpw')){
    localStorage.setItem('username', unameinput.value);
    document.getElementById('logon-screen-username').innerHTML = unameinput.value;
    document.getElementById('terminal-window-content-prompt').innerText = unameinput.value + '$:';

    //localStorage.setItem('userpw', userpwinput.value);
}
