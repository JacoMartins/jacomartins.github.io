// This file sets up the operating system authentication

window.addEventListener('load', function loadusername(){
    var logonusernametext = document.getElementById("logon-screen-username");
    var logininput = document.getElementById('logon-screen-input-text');
    var settingsunameinput = document.getElementById("settings-window-categories-users-input-uname");
    var settingsuserpwinput = document.getElementById("settings-window-categories-users-input-userpw");
    var user = document.getElementById('owner-user'), logininput = document.getElementById('logon-screen-input-text'), loginwindow = document.getElementById('logon-screen');
  
    logonusernametext.innerText = username;
    settingsunameinput.value = username;
    //settingsuserpwinput.value = userpw;
  
    logininput.focus();
  
    if(userpw == ''){
      user.style.display = 'block';
      user.style.backgroundImage = `url('${localStorage.getItem('userwp')}')`;
      loginwindow.style.display = 'none';
      logininput.setAttribute('placeholder', 'Password');
      openbetaapp();
      document.getElementById('beta-window-header-title').innerText = 'Welcome, ' + username;
    } else {
      loginwindow.style.display = 'block';
      user.style.display = 'none';
    }
  
  })
  
  function loginauth(user = document.getElementById('owner-user'), logininput = document.getElementById('logon-screen-input-text'), loginwindow = document.getElementById('logon-screen')){
    if(event.keyCode == 13){
      if(logininput.value == localStorage.getItem('userpw')){
        user.style.display = 'block';
        user.style.backgroundImage = `url('${localStorage.getItem('userwp')}')`;
        loginwindow.style.display = 'none';
        logininput.setAttribute('placeholder', 'Password');
  
        //var msgid = 0;
  
        //var createwindow = document.createElement('div');
        //var addwindowidatr = document.createAttribute('id');
        //var addwindowclassatr = document.createAttribute('class');
        //var idname = addwindowidatr.value = 'window' + (msgid + 1);
        //var classname = addwindowclassatr.value = 'window';
        
        //user.appendChild(createwindow);
        //createwindow.classname;
        //createwindow.setAttributeNode(addwindowclassatr);
        //createwindow.idname;
        //createwindow.setAttributeNode(addwindowidatr);
        
        //var windowid = document.getElementById('window' + (msgid + 1));
        //windowid.innerHTML = '<div id="' + 'window' + (msgid + 1) + '-window-header" class="window-header"><button id="' + 'window' + (msgid + 1) + '-window-close-button" class="window-header-close-button"></button><button id="' + 'window' + (msgid + 1) + '-window-resize-button" class="window-header-resize-button"></button><button id="' + 'window' + (msgid + 1) + '-window-minimize-button" class="window-header-minimize-button"></button><a class="window-header-title" id="' + 'window' + (msgid + 1) + '-window-header-title">window test</a></div><div id="' + 'window' + (msgid + 1) + '-window-content" class="window-content"><h1 class="text-header1" id="' + 'window' + (msgid + 1) + '-window-content-header1">H1</h1><h2 class="text-header2" id="' + 'window' + (msgid + 1) + '-window-content-header2">H2</h2><a class="text-default" id="' + 'window' + (msgid + 1) + '-window-content-p">Paragraph</a><input class="system-input-text" type="text" id="' + 'window' + (msgid + 1) + '-window-content-input-text1"><input class="system-input-button" type="button" id="' + 'window' + (msgid + 1) + '-window-content-input-button1" value="Button"><label class="system-input-checkbox-label" for="' + 'window' + (msgid + 1) + '-window-content-input-checkbox1">CheckBox<input class="system-input-checkbox" type="checkbox" name="' + 'window' + (msgid + 1) + '-window-content-input-checkbox1" id="' + 'window' + (msgid + 1) + '-window-content-input-checkbox1" checked="checked"><span class="system-input-checkbox-checkmark"></span></label></div>';
        //windowid.createAttribute('onclick').value = '';
        //windowid.setAttributeNode();
  
  
        // ' + 'window' + (msgid + 1) + '
  
        openbetaapp();
        document.getElementById('beta-window-header-title').innerText = 'Welcome, ' + username;
  
      } else {
        logininput.setAttribute('placeholder', 'Wrong password.');
      }
      logininput.value = '';
    }
  }
  
