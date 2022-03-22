// Terminal Program - Command Line Code

var lastcommand;
var prelastcommand;
var sudo = false;
var evaul = false;

function terminal(){
  const terminal = document.getElementById("terminal-window-terminal");
  const appcontainer = document.getElementById("terminal-window-container");
  const terminalprompt = document.getElementById("terminal-window-content-prompt");

  var createtext = document.createElement('div');
  var createtextclass = document.createAttribute('class');
  var createtextclassvalue = createtextclass.value = 'terminal-window-content-text';
  var textelements = document.getElementsByClassName('terminal-window-content-text');

  var genwindow = document.createElement('div');
  var genwindowclass = document.createAttribute('class');
  var genwindowappid = document.createAttribute('id');
  var genwindowevent = document.createAttribute('onmousedown');
  var genwindowclassname = genwindowclass.value = 'window';
  var genwindowidname = genwindowappid.value = 'generated' + genid + '-window';
  var genwindoweventvalue = genwindowevent.value = `generatedappfocus('generated${genid}-window')`;

  var resizebutton = document.getElementById("demo-window-resize-button");
  var minimizebutton = document.getElementById("demo-window-minimize-button");

  var returncommand = document.createElement('div');
  var returncommandclass = document.createAttribute('class');
  var returncommandclassvalue = returncommandclass.value = 'terminal-window-content-text';

  var desktop = document.getElementById('owner-user');


  if(terminal.value.includes("<br>")){
    setTimeout(() => {
      appcontainer.appendChild(returncommand);
      returncommand.returncommandclassvalue;
      returncommand.setAttributeNode(returncommandclass);
      returncommand.innerText = '\n';
    }, 000);
  }

  if(event.keyCode == 13 && evaul === false && sudo === false){

    prelastcommand = lastcommand;
    lastcommand = terminal.value;

    if(terminal.value.includes("exit")){
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerText = '\nExitting terminal...\n';
      }, 000);
       closeterminalapp()
    }

    if(terminal.value.includes("sudo")){
      setTimeout(() => {
        //appcontainer.appendChild(returncommand);
        //returncommand.returncommandclassvalue;
        //returncommand.setAttributeNode(returncommandclass);
        //returncommand
        terminalprompt.innerHTML = '<span style="color: lightgray;">[sudo] Password for ' + username + ':</span>';
        sudo = true;
      }, 000);
    }

    if(terminal.value.includes("msg")){
      var msgcontent = terminal.value.slice(4);
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand

        desktop.appendChild(genwindow);
        genwindow.genwindowidname;
        genwindow.setAttributeNode(genwindowappid);
        genwindow.genwindowclassname;
        genwindow.setAttributeNode(genwindowclass);
        genwindow.genwindoweventvalue;
        genwindow.setAttributeNode(genwindowevent);
        
        document.getElementById(`generated${genid}-window`).innerHTML = `
        
        <div id="generated${genid}-window-header" class="window-header" onmouseover="">
        
          <button id="generated${genid}-window-close-button" class="window-header-close-button" onclick="closegeneratedapp('generated${genid}-window')"></button>        
          <a class="window-header-title" id="generated${genid}-window-header-title"></a>
    
        </div>
    
        <div id="generated${genid}-window-content" class="window-content">
          <a class="text-default" id="generated${genid}-window-content-p">Paragraph</a>
          <button class="system-input-button" id="generated${genid}-window-content-input-button1" onclick="closegeneratedapp('generated${genid}-window')">OK</button>
        </div>
        
        `;
        
        dragElement(`generated${genid}-window`);

      	document.getElementById(`generated${genid}-window`).style.animation = 'openwindow 0.25s';

        document.getElementById(`generated${genid}-window`).style.height = '134px';
        document.getElementById(`generated${genid}-window`).style.width = '352px';
        document.getElementById(`generated${genid}-window`).style.top = `calc(50% - ${(parseInt(document.getElementById(`generated${genid}-window`).style.height) * 0.5)}px)`;
        document.getElementById(`generated${genid}-window`).style.left = `calc(50% - ${(parseInt(document.getElementById(`generated${genid}-window`).style.width) * 0.5)}px)`;
        document.getElementById(`generated${genid}-window-header-title`).innerText = `Message${genid}`;
        document.getElementById(`generated${genid}-window`).style.zIndex = z + 1;

        document.getElementById(`generated${genid}-window-content-p`).style.top = '15px';
        document.getElementById(`generated${genid}-window-content-p`).style.left = '15px';

        document.getElementById(`generated${genid}-window-content-p`).innerText = msgcontent;

        document.getElementById(`generated${genid}-window-content-input-button1`).style.top = `calc(calc(100% - 31px) - 15px)`;
        document.getElementById(`generated${genid}-window-content-input-button1`).style.left = `calc(calc(100% - 78px) - 15px)`;
        document.getElementById(`generated${genid}-window-content-input-button1`).focus();

        genid = genid + 1;
      }, 000);
    }

    if(terminal.value.includes("<br>")){
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerText = '\n';
      }, 000);
    }

    if(terminal.value.includes("info")){
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerText = '\n- System Info: \n[System Name] ' + systemname + '\n[Version Name] ' + versionname + '\n[Build] '+ build + '\n[Compilation] ' + today;
      }, 000);
    }

    if(terminal.value.includes("help")){
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerText = '\n- Available commands: \ninfo: This comand shows the main system information\n\nclear: Wipes terminal text\n\nexit: Closes terminal application\n\nterminal: Shows terminal status. Sintax: terminal [command]\n\nchange: Customizes the selected element in the operating system. Syntax: change [-w, -lsw, -uname, -userpw].\n\ncomp update: Updates the operating system current compilation data\n\njs-console: Opens a javascript command console.\n\nlocation: Change the browser location settings of the operating system. Example: [location boot -l -t 0 url].\n\nlocation boot: Change the loading file of the operating system.\n\nlocation reboot -t (0 or 1): Choose if you want to boot directly on terminal or in the file.\n\nmsg [text]: Creates a new dialogue box with the text you wrote previously.\n\nPlease type all commands in lowercase.';
      }, 000);
    }

    if(terminal.value.includes("andre")){
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerText = '\nMelhor prof\n';
      }, 000);
    }

    if(terminal.value.includes("daniel")){
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerText = '\nMelhor prof\n';
      }, 000);
    }

    if(terminal.value.includes("nirvado")){
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerText = '\nMelhor prof\n';
      }, 000);
    }

    if(terminal.value.includes("roberta")){
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerText = '\nMelhor prof\n';
      }, 000);
    }

    if(terminal.value.includes("ph")){
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerText = '\nMelhor prof\n';
      }, 000);
    }

    if(terminal.value.includes("eldasio")){
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerText = '\nMelhor prof\n';
      }, 000);
    }

    if(terminal.value.includes("antonio")){
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerText = '\nAntonio deu certo\n';
      }, 000);
    }

    if(terminal.value.includes("clear")){
      terminal.value = '';
      while(textelements.length > -1) appcontainer.removeChild(textelements[0]);
    }

    if(terminal.value.includes("terminal")){
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML = '<span style="color: red;">Wrong Sintax</span>, please use "terminal [command]".';
      }, 000);
    }

    if(terminal.value.includes("js-console") && terminal.value.includes('sudo') === false){
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        evaul = true;
        terminalprompt.innerText = 'js-console' + '$:';
        terminalprompt.style.color = 'orange';
        terminal.focus();
        returncommand.innerHTML = '<span style="color: orange;">Opening JS Terminal...</span>';
      }, 000);
    }
    
    if(terminal.value.includes("location") && terminal.value.includes('sudo') === false){

      if(terminal.value.includes("location boot -l ")){
        setTimeout(() => {
          appcontainer.appendChild(returncommand);
          returncommand.returncommandclassvalue;
          returncommand.setAttributeNode(returncommandclass);
          returncommand.innerHTML = 'Setting boot location to' + terminal.value.slice(17) + '...';
        }, 000);
        localStorage.setItem('boot', terminal.value.slice(17));
        location.assign('../boot/bootmgr.html');

        if(terminal.value.includes("location boot -l -t")){
          if(terminal.value.includes("location boot -l -t 0")){
            setTimeout(() => {
              appcontainer.appendChild(returncommand);
              returncommand.returncommandclassvalue;
              returncommand.setAttributeNode(returncommandclass);
              returncommand.innerHTML = 'Setting boot location to' + terminal.value.slice(22) + '...';
            }, 000);
            localStorage.setItem('boot', terminal.value.slice(22));
            localStorage.setItem('rebootT', '0');
            location.assign('../boot/bootmgr.html');
          }
  
          if(terminal.value.includes("location boot -l -t 1")){
            setTimeout(() => {
              appcontainer.appendChild(returncommand);
              returncommand.returncommandclassvalue;
              returncommand.setAttributeNode(returncommandclass);
              returncommand.innerHTML = 'Setting boot location to' + terminal.value.slice(22) + '...';
            }, 000);
            localStorage.setItem('boot', terminal.value.slice(22));
            localStorage.setItem('rebootT', '1');
            location.assign('../boot/bootmgr.html');
          }
        }
      }

      if(terminal.value.includes("location reboot")){

        setTimeout(() => {
          appcontainer.appendChild(returncommand);
          returncommand.returncommandclassvalue;
          returncommand.setAttributeNode(returncommandclass);
          returncommand.innerHTML = 'Rebooting operating system...';
          location.assign('../boot/bootmgr.html');
        }, 000);
  
        if(terminal.value.includes("location reboot -t ")){
          setTimeout(() => {
            appcontainer.appendChild(returncommand);
            returncommand.returncommandclassvalue;
            returncommand.setAttributeNode(returncommandclass);
            returncommand.innerHTML = 'Rebooting operating system...';
          }, 000);
          localStorage.setItem('rebootT', terminal.value.slice(19));
          location.assign('../boot/bootmgr.html');
        }
  
      }

    }

    if(terminal.value.includes("terminal") && terminal.value.includes("isworking")){
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML = '<span style="color: lightgreen;">Yes</span>.';
      }, 000);
    }

    if(terminal.value.includes("abnt")){
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML =  '<span style="color: lightblue; font-size: 128px; font-family: Inter Med;">' + lastcommand.slice(4) + '</span>';
      }, 000);
    }

    if(terminal.value.includes("write")){
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerText =  lastcommand.slice(5);
      }, 000);
    }

    if(terminal.value.includes("change -w")){
      const desktop = document.getElementById('owner-user');
      
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML = 'Setting wallpaper to' + lastcommand.slice(10) + '...';
        desktop.style.backgroundImage = "url(" + lastcommand.slice(10) + ")";
        desktop.style.backgroundSize = 'cover';
        localStorage.setItem('userwp', lastcommand.slice(10));
      }, 000);
    }

    if(terminal.value.includes("change -lsw")){
      const logonbg = document.getElementById('logon-screen');
      
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML = 'Setting wallpaper to' + lastcommand.slice(11) + '...';
        logonbg.style.backgroundImage = "url(" + lastcommand.slice(11) + ")";
        logonbg.style.backgroundSize = 'cover';
      }, 000);
    }

    if(terminal.value.includes("usermod -l")){
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML = 'Setting username to ' + lastcommand.slice(11) + '...';
        localStorage.setItem('username', lastcommand.slice(11));
        document.getElementById('logon-screen-username').innerHTML = lastcommand.slice(11);
        document.getElementById('terminal-window-content-prompt').innerText = lastcommand.slice(11) + '$:';
      }, 000);
    }

    if(terminal.value.includes("passwd")){
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        terminalprompt.innerHTML = '<span style="color: lightgray;">[sudo] Password for ' + username + ':</span>';
        sudo = true;
        returncommand.innerHTML = 'Setting your password to ' + lastcommand.slice(7) + '...';
        localStorage.setItem('userpw', lastcommand.slice(7));
        userpw = localStorage.getItem('userpw');
        userpwinput = lastcommand.slice(7);
      }, 000);
    }

    if(terminal.value.includes("system lock")){
      const desktop = document.getElementById('owner-user');
      const loginwindow = document.getElementById('logon-screen');
      const logininput = document.getElementById('logon-screen-input-text');
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML = 'Done';
        desktop.style.display = 'none';
        loginwindow.style.display = 'block';
        logininput.focus();
      }, 000);
    }

    if(terminal.value.includes("system off")){
      const desktop = document.getElementById('owner-user');
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML = 'Done';
      }, 000);
    }
    
    if(terminal.value.includes("-w igorcareca")){
      const desktop = document.getElementById('owner-user');
      
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML = 'Setting wallpaper to ../../resources/images/background/igor careca.png...';
        desktop.style.backgroundColor = 'black';
        desktop.style.backgroundImage = "url('../../resources/images/background/igor careca.png')";
        desktop.style.backgroundSize = 'contain';
      }, 000);
    }

    if(terminal.value.includes("-w ioripeito")){
      const desktop = document.getElementById('owner-user');
      
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML = 'Setting wallpaper to ../../resources/images/background/peitudoiori.jpeg...';
        desktop.style.backgroundColor = 'black';
        desktop.style.backgroundImage = "url('../../resources/images/background/peitudoiori.jpeg')";
        desktop.style.backgroundSize = 'contain';
      }, 000);
    }

    if(terminal.value.includes("-w default")){
      const desktop = document.getElementById('owner-user');

      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML = 'Setting wallpaper to ../../resources/images/background/default.jpg...';
        desktop.style.backgroundColor = 'black';
        desktop.style.backgroundImage = "url('../../resources/images/background/default.jpg')";
        desktop.style.backgroundSize = 'cover';
      }, 000);
    }

    if(terminal.value.includes("-w default1")){
      const desktop = document.getElementById('owner-user');

      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML = 'Setting wallpaper to ../../resources/images/background/wpp1.jpg...';
        desktop.style.backgroundColor = 'black';
        desktop.style.backgroundImage = "url('../../resources/images/background/wpp1.jpg')";
        desktop.style.backgroundSize = 'cover';
      }, 000);
    }

    if(terminal.value.includes("-w default2")){
      const desktop = document.getElementById('owner-user');

      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML = 'Setting wallpaper to ../../resources/images/background/wpp2.jpg...';
        desktop.style.backgroundColor = 'black';
        desktop.style.backgroundImage = "url('../../resources/images/background/wpp2.jpg')";
        desktop.style.backgroundSize = 'cover';
      }, 000);
    }

    if(terminal.value.includes("-w default3")){
      const desktop = document.getElementById('owner-user');
      
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML = 'Setting wallpaper to ../../resources/images/background/wpp3.jpg...';
        desktop.style.backgroundColor = 'black';
        desktop.style.backgroundImage = "url('../../resources/images/background/wpp3.jpg')";
        desktop.style.backgroundSize = 'cover';
      }, 000);
    }

    if(terminal.value.includes("-w default4")){
      const desktop = document.getElementById('owner-user');
      
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML = 'Setting wallpaper to ../../resources/images/background/wpp4.jpg...';
        desktop.style.backgroundColor = 'black';
        desktop.style.backgroundImage = "url('../../resources/images/background/wpp4.jpg')";
        desktop.style.backgroundSize = 'cover';
      }, 000);
    }

    if(terminal.value.includes("-w default5")){
      const desktop = document.getElementById('owner-user');

      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML = 'Setting wallpaper to ../../resources/images/background/wpp5.jpg...';
        desktop.style.backgroundColor = 'black';
        desktop.style.backgroundImage = "url('../../resources/images/background/wpp5.jpg')";
        desktop.style.backgroundSize = 'cover';
      }, 000);
    }

    if(terminal.value.includes("-w default6")){
      const desktop = document.getElementById('owner-user');
      
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML = 'Setting wallpaper to ../../resources/images/background/wpp6.jpg...';
        desktop.style.backgroundColor = 'black';
        desktop.style.backgroundImage = "url('../../resources/images/background/wpp6.jpg')";
        desktop.style.backgroundSize = 'cover';
      }, 000);
    }

    if(terminal.value.includes("comp update")){
      var date = new Date();
      var compyear = date.getFullYear();
      var compmonths = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
      var compdays = 0;
      var comphours = 0;
      var compminutes = 0;

      if (date.getDate() < 10) {compdays = '0' + date.getDate();} else {compdays = date.getDate();}
      if (date.getHours() < 10) {comphours = '0' + date.getHours();} else {comphours = date.getHours();}
      if (date.getMinutes() < 10) {compminutes = '0' + date.getMinutes();} else {compminutes = date.getMinutes();}
      
      var comp = compdays + compmonths[date.getMonth()] + compyear + comphours + compminutes;
      build = build + 1;

      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML = '<span style="color: lightgreen;">The current compilation date is ' + compdays + compmonths[date.getMonth()] + compyear + comphours + compminutes + '</span>';
      }, 000);
      document.getElementById('desktop-beta-info').innerHTML = 'Eclipse Cloud Operating System, Beta ' + betastage + ', Build ' + build + ' Compilation: ' + comp;
    }

    appcontainer.appendChild(createtext);
    createtext.createtextclassvalue;
    createtext.setAttributeNode(createtextclass);
    createtext.innerHTML = '<span style="color: yellow;">' + (terminalprompt.innerText) + '</span> ' + (terminal.value);
    terminal.value = '';
 }

 if(event.keyCode == 13 && evaul === true){
  prelastcommand = lastcommand;
  lastcommand = terminal.value;
  
  appcontainer.appendChild(createtext);
  createtext.createtextclassvalue;
  createtext.setAttributeNode(createtextclass);
  createtext.innerHTML = '<span style="color: orange;">' + 'js-console$:' + '</span> ' + (terminal.value) + '<br>' + eval(terminal.value);
  terminal.value = '';
  eval(terminal.value);
 }

 var t = 5;

 if(event.keyCode == 13 && sudo === true){
  appcontainer.appendChild(createtext);
  createtext.createtextclassvalue;
  createtext.setAttributeNode(createtextclass);
  createtext.innerHTML = '<span style="color: lightgray;">' + '[sudo] Password for ' + username +  ':</span> ' + (terminal.value);

    if(terminal.value == localStorage.getItem('userpw')){
      appcontainer.appendChild(returncommand);
      returncommand.returncommandclassvalue;
      returncommand.setAttributeNode(returncommandclass);
      sudo = false;

      if(lastcommand.includes('sudo')) {
        terminal.value = lastcommand.replace('sudo', '');
      }

      terminalprompt.innerText = username + '$:';
      window.terminal();
    } else {
      if(t > 0){
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML = '<span style="color: lightgray;">Password is wrong, please try again.</span>';
        t = t - 1;
      }

      if(t = 0){
        sudo = false;
      }
    }

    terminal.value = '';
 }

 if(event.keyCode == 38) {
  terminal.value = lastcommand;
  }
}

// Terminal Functions

function write(text){
  return text;
}

var dimlist = [];

function dim(con){
  dimlist.push(con);
  return dimlist.lenght;
}

function exit(){
  evaul = false;
  sudo = false;

  var terminal = document.getElementById('terminal-window-terminal');
  var terminalprompt = document.getElementById('terminal-window-content-prompt');

  terminalprompt.innerText = username + '$:';
  terminalprompt.style.color = 'yellow';
  terminal.focus();
}