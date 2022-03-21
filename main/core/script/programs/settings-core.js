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

function settingsappchangeuname(){
    localStorage.setItem('username', usernameinput.value);
    document.getElementById('logon-screen-username').innerHTML = usernameinput.value;
    document.getElementById('terminal-window-content-prompt').innerText = usernameinput.value + '$:';
}

// Change Password Dialogue Box Creation

var genwindow = document.createElement('div');

function settingsappchangepwform(){
        desktop.appendChild(genwindow);
        createDOMAttribute(genwindow, 'id', 'settings-changepw-subwindow');
        createDOMAttribute(genwindow, 'class', 'window');
        createDOMAttribute(genwindow, 'onmousedown', "generatedappfocus('settings-changepw-subwindow', 1, 'settings-window')");

        document.getElementById(`settings-changepw-subwindow`).innerHTML = `
        
        <div id="settings-changepw-subwindow-header" class="window-header">
        
          <button id="settings-changepw-subwindow-close-button" class="window-header-close-button" onclick="closegeneratedapp('settings-changepw-subwindow')"></button>        
          <a class="window-header-title" id="settings-changepw-subwindow-header-title"></a>
    
        </div>
    
        <div id="settings-changepw-subwindow-content" class="window-content">

          <a class="text-default" id="settings-changepw-subwindow-content-p">Please write a password you'll remember.</a>

          <input id="settings-changepw-subwindow-content-currentuserpw-input" class="system-input-text" type="password" placeholder="Enter your current password" onkeydown="settingsappchangepw()">

          <input id="settings-changepw-subwindow-content-userpw-input" class="system-input-text" type="password" placeholder="Password" onkeydown="settingsappchangepw()">
          <input id="settings-changepw-subwindow-content-cuserpw-input" class="system-input-text" type="password" placeholder="Confirm Password" onkeydown="settingsappchangepw()">
          
          <button class="system-input-button" id="settings-changepw-subwindow-content-input-button1" onclick="settingsappchangepw()">Change Password</button>
        
        </div>
        
        `;
        
        dragElement(`settings-changepw-subwindow`);

      	document.getElementById(`settings-changepw-subwindow`).style.animation = 'openwindow 0.25s';

        document.getElementById(`settings-changepw-subwindow`).style.height = '277px';
        document.getElementById(`settings-changepw-subwindow`).style.width = '276px';
        document.getElementById(`settings-changepw-subwindow`).style.top = `calc(50% - ${(parseInt(document.getElementById(`settings-changepw-subwindow`).style.height) * 0.5)}px)`;
        document.getElementById(`settings-changepw-subwindow`).style.left = `calc(50% - ${(parseInt(document.getElementById(`settings-changepw-subwindow`).style.width) * 0.5)}px)`;
        document.getElementById(`settings-changepw-subwindow-header-title`).innerText = `Change password`;
        document.getElementById(`settings-changepw-subwindow`).style.zIndex = z + 1;
        document.getElementById(`settings-changepw-subwindow`).style.resize = 'none';

        document.getElementById(`settings-changepw-subwindow-content-p`).style.top = '13px';
        document.getElementById(`settings-changepw-subwindow-content-p`).style.left = '15px';

        document.getElementById(`settings-changepw-subwindow-content-input-button1`).style.top = `calc(calc(100% - 31px) - 15px)`;
        document.getElementById(`settings-changepw-subwindow-content-input-button1`).style.left = `15px`;
        document.getElementById(`settings-changepw-subwindow-content-input-button1`).style.width = `246px`;
        document.getElementById(`settings-changepw-subwindow-content-input-button1`).focus();

        document.getElementById('settings-changepw-subwindow-content-currentuserpw-input').style.position = 'absolute';
        document.getElementById('settings-changepw-subwindow-content-currentuserpw-input').style.top = '66px';
        document.getElementById('settings-changepw-subwindow-content-currentuserpw-input').style.left = '15px';
        document.getElementById('settings-changepw-subwindow-content-currentuserpw-input').style.width = '236px';
        
        document.getElementById('settings-changepw-subwindow-content-userpw-input').style.position = 'absolute';
        document.getElementById('settings-changepw-subwindow-content-userpw-input').style.top = '114px';
        document.getElementById('settings-changepw-subwindow-content-userpw-input').style.left = '15px';
        document.getElementById('settings-changepw-subwindow-content-userpw-input').style.width = '236px';

        document.getElementById('settings-changepw-subwindow-content-cuserpw-input').style.position = 'absolute';
        document.getElementById('settings-changepw-subwindow-content-cuserpw-input').style.top = '146px';
        document.getElementById('settings-changepw-subwindow-content-cuserpw-input').style.left = '15px';
        document.getElementById('settings-changepw-subwindow-content-cuserpw-input').style.width = '236px';
}

function settingsappchangepw(){
  var currentpwinput = document.getElementById('settings-changepw-subwindow-content-currentuserpw-input');
  var pwinput = document.getElementById('settings-changepw-subwindow-content-userpw-input');
  var confirmpwinput = document.getElementById('settings-changepw-subwindow-content-cuserpw-input');

  if(currentpwinput.value === localStorage.getItem('userpw') && confirmpwinput.value === pwinput.value && confirmpwinput.value.length > 5){
    localStorage.setItem('userpw', pwinput.value);
    closegeneratedapp('settings-changepw-subwindow');
  } else if(confirmpwinput.value !== pwinput.value) {
    document.getElementById(`settings-changepw-subwindow-content-p`).innerText = "The two passwords don't match, please try again.";
  } else if(confirmpwinput.value === '') {
    document.getElementById(`settings-changepw-subwindow-content-p`).innerText = "Please fill all the inputs.";
  } else if(confirmpwinput.value.length <= 5) {
    document.getElementById(`settings-changepw-subwindow-content-p`).innerText = "Please write a password with at least 6 characters.";
  } else if(currentpwinput.value !== localStorage.getItem('userpw')){
    document.getElementById(`settings-changepw-subwindow-content-p`).innerText = "Please enter your current user password correctly.";
  } else {
    document.getElementById(`settings-changepw-subwindow-content-p`).innerText = "Invalid Password";
  }
}