// This file sets up the operating system authentication

window.addEventListener('load', function loadusername(){
    var logonusernametext = document.getElementById("logon-screen-username");
    var loginunameinput = document.getElementById('logon-screen-input-text');
    var loginpwinput = document.getElementById('logon-screen-input-password');
    var settingsunameinput = document.getElementById("settings-window-categories-users-input-uname");
    var settingsuserpwinput = document.getElementById("settings-window-categories-users-input-userpw");
    var desktop = document.getElementById('owner-user');
    var loginwindow = document.getElementById('logon-screen');
  
    logonusernametext.innerText = username;
    logonusernametext.style.display = 'none';
    settingsunameinput.value = username;
    //settingsuserpwinput.value = userpw;
  
    loginpwinput.focus();

    if(localStorage.getItem('auth') === 'true'){
      loginunameinput.value = username;
    }
  
    if(userpw == ''){
      desktop.style.display = 'block';
      desktop.style.backgroundImage = `url('${localStorage.getItem('userwp')}')`;
      loginwindow.style.display = 'none';
      loginpwinput.setAttribute('placeholder', 'Password');
      openbetaapp();
      document.getElementById('beta-window-header-title').innerText = 'Welcome, ' + username;
    } else {
      loginwindow.style.display = 'block';
      desktop.style.display = 'none';
    }
  
  })
  
  function loginauth(){
    var desktop = document.getElementById('owner-user');
    var loginpwinput = document.getElementById('logon-screen-input-password'), loginwindow = document.getElementById('logon-screen');
    var loginunameinput = document.getElementById('logon-screen-input-text');

    if(event.keyCode == 13){
      if(loginunameinput.value == localStorage.getItem('username') && loginpwinput.value == localStorage.getItem('userpw')){
        desktop.style.display = 'block';
        desktop.style.backgroundImage = `url('${localStorage.getItem('userwp')}')`;
        loginwindow.style.display = 'none';
        loginpwinput.setAttribute('placeholder', 'Password');
        localStorage.setItem('auth', 'true');
  
        openbetaapp();
        document.getElementById('beta-window-header-title').innerText = 'Welcome, ' + username;
  
      } else {
        loginpwinput.setAttribute('placeholder', 'Invalid credentials.');
        localStorage.setItem('auth', 'false');
      }

      loginunameinput.value = '';
      loginpwinput.value = '';
    }
  }
  