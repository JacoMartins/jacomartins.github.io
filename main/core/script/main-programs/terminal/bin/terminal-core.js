// Terminal Program - Command Line Code

var lastcommand;
var prelastcommand;
var lines = 0;

function terminalLine(windowId, inputId) {
  var terminal = document.getElementById(inputId);

  if (event.keyCode === 13) {
    createDOMElement(
      `terminal${windowId}-window-container`,
      `div`,
      `terminal${windowId}-window-line${lines}`,
      `terminal-window-content-text`
    );

    if (sudo === false && evaul === false && passwd === false) {
      terminal.type = 'text';
      terminal.style.color = 'lightgray';
      changeTerminalPrompt(windowId, `<span style="color: yellow;">${username}$:</span>`);
      document.getElementById(`terminal${windowId}-window-line${lines}`).innerHTML = '<span style="color: yellow;">' + document.getElementById(`terminal${windowId}-window-content-prompt`).innerText + '</span> ' + terminal.value;
    }

    if (sudo === true && evaul === false && passwd === false) {
      terminal.type = 'password';
      terminal.style.color = 'black';
      changeTerminalPrompt(windowId, `<span style="color: lightgray;">[sudo] Password for ${username}:</span>`);
      document.getElementById(`terminal${windowId}-window-line${lines}`).innerHTML = `<span style="color: lightgray;">[sudo] Password for ${username}:</span> `;
    }

    if (sudo === false && evaul === false && passwd === true) {
      terminal.type = 'text';
      terminal.style.color = 'lightgray';
      document.getElementById(`terminal${windowId}-window-line${lines}`).innerHTML = '<span style="color: lightgray;">' + document.getElementById(`terminal${windowId}-window-content-prompt`).innerText + '</span>';
    }

    lines++;
  }
}

function terminalCommand(windowId, inputId) {
  var terminal = document.getElementById(inputId);
  var terminalPrompt = document.getElementById(`terminal${windowId}-window-content-prompt`);
  var confirmPasswd;

  if (event.keyCode === 13) {
    if (sudo === false && evaul === false && passwd === false) {

      if (terminal.value.slice(0, 8) == 'terminal') {
        if (terminal.value.slice(0, 18) == 'terminal isworking') {
          setTimeout(() => {
            createTerminalLine(windowId, '<span style="color: lightgreen">#: </span> Working');
          }, 000);
        }
      }

      if (terminal.value.slice(0, 5) == 'clear') {
        terminal.value = '';
        for (n = (document.querySelectorAll(`[id*="terminal${windowId}-window-line"]`).length); n > -1; n--) {
          removeDOMElement(document.querySelectorAll(`[id*="terminal${windowId}-window-line"]`)[0]);
        }
      }

      if (terminal.value.slice(0, 4) == 'exit') {
        setTimeout(() => {
          createTerminalLine(windowId, '<span style="color: lightgreen">#: </span> Exitting terminal...');
        }, 000);
        closeWindow(`terminal${windowId}-window`);
      }

      if (terminal.value.slice(0, 4) == 'sudo') {
        setTimeout(() => {
          //appcontainer.appendChild(returncommand);
          //returncommand.returncommandclassvalue;
          //returncommand.setAttributeNode(returncommandclass);
          //returncommand
          changeTerminalPrompt(windowId, `<span style="color: lightgray;">[sudo] Password for ${username}:</span>`);
          terminal.type = 'password';
          terminal.style.color = 'black';
          sudo = true;
        }, 000);
      }

      /* if(terminal.value.slice(0, 6) == 'passwd'){
        setTimeout(() => {
          //appcontainer.appendChild(returncommand);
          //returncommand.returncommandclassvalue;
          //returncommand.setAttributeNode(returncommandclass);
          //returncommand
          changeTerminalPrompt(windowId, `<span style="color: lightgray;">Current Password: </span>`);
          terminal.type = 'password';
          terminal.style.color = 'black';
          passwd = true;
        }, 000);
      }  */

      if (terminal.value.slice(0, 6) == 'passwd') {
        if (terminal.value == 'passwd') {
          setTimeout(() => {
            createTerminalLine(windowId, '<span style="color: lightgreen">$: </span> Invalid syntax. Please try passwd [Current Password] [New Password]');
          }, 000);
        }

        if(userpw == ""){
          localStorage.setItem('userpw', terminal.value.slice(7));
          userpw = localStorage.getItem('userpw');
        } else if (terminal.value.slice(7, 7 + userpw.length) == userpw) {
          //createTerminalLine(windowId, terminal.value.slice((7 + userpw.length)));
          localStorage.setItem('userpw', terminal.value.slice(8 + userpw.length));
          userpw = localStorage.getItem('userpw');
          setTimeout(() => {
            createTerminalLine(windowId, '<span style="color: lightgreen">$: </span> Password changed.');            
          }, 00);
        } else {
          setTimeout(() => {
            createTerminalLine(windowId, '<span style="color: lightgreen">$: </span> Password is wrong, please try again.');
          }, 000);
        }
        
      }

      if(terminal.value.slice(0, 3).includes("msg")){
        var msgcontent = terminal.value.slice(4);
        setTimeout(() => {

          createWindow(`owner-user`, `generated${msgid}`);

          document.getElementById(`generated${msgid}-window`).onmousedown = `focusWindow('generated${msgid}-window')`;
          
          createWindowHeader(`generated${msgid}-window`, `generated${msgid}`, 0, 2, `Message ${msgid}`, msgid);

          createDOMElement(`generated${msgid}-window`, `div`, `generated${msgid}-window-content`, 'window-content');
          
          document.getElementById(`generated${msgid}-window-content`).innerHTML = `
            <a class="text-default" id="generated${msgid}-window-content-p">Paragraph</a>
            <button class="system-input-button" id="generated${msgid}-window-content-input-button1" onclick="closeWindow('generated${msgid}-window')">OK</button>
          `;
          
          dragElement(`generated${msgid}-window`);
          
          document.getElementById(`generated${msgid}-window`).style.animation = 'openwindow 0.25s';
  
          document.getElementById(`generated${msgid}-window`).style.height = '134px';
          document.getElementById(`generated${msgid}-window`).style.width = '352px';
          document.getElementById(`generated${msgid}-window`).style.top = `calc(50% - ${(parseInt(document.getElementById(`generated${msgid}-window`).style.height) * 0.5)}px)`;
          document.getElementById(`generated${msgid}-window`).style.left = `calc(50% - ${(parseInt(document.getElementById(`generated${msgid}-window`).style.width) * 0.5)}px)`;
          document.getElementById(`generated${msgid}-window-header-title`).innerText = `Message${msgid}`;
          document.getElementById(`generated${msgid}-window`).style.zIndex = z + 1;
  
          document.getElementById(`generated${msgid}-window-content-p`).style.top = '15px';
          document.getElementById(`generated${msgid}-window-content-p`).style.left = '15px';
  
          document.getElementById(`generated${msgid}-window-content-p`).innerText = msgcontent;
  
          document.getElementById(`generated${msgid}-window-content-input-button1`).style.top = `calc(calc(100% - 31px) - 15px)`;
          document.getElementById(`generated${msgid}-window-content-input-button1`).style.left = `calc(calc(100% - 78px) - 15px)`;
          
          document.getElementById(`generated${msgid}-window-content-input-button1`).focus();
          //document.getElementById(`generated${msgid}-window`).onmousedown = `focusWindow('generated${msgid}-window')`;
  
          msgid = msgid + 1;
        }, 000);
      }
    }

    if (sudo === true && terminal.value == userpw) {
      sudo = false;
    }

    if (passwd === true) { }
    /* if(passwd === true && terminal.value == userpw){
         createTerminalLine(windowId, terminalPrompt.innerHTML);
         changeTerminalPrompt(windowId, `<span style="color: lightgray;">New Password: </span>`);
         newPasswd = true;
         passwd = false;
     }
 
     if(newPasswd === true && confirmPasswd === undefined){
       confirmPasswd = terminal.value;
       createTerminalLine(windowId, terminalPrompt.innerHTML);
       changeTerminalPrompt(windowId, `<span style="color: lightgray;">Confirm Password: </span>`);
       newPasswd = false;
       conPasswd = true;
     }
 
     if(conPasswd === true && terminal.value == confirmPasswd){
         changeTerminalPrompt(windowId, `<span style="color: lightgray;">Password changed.</span>`);
         newPasswd = false;
         passwd = false;
         conPasswd = false;
     }*/

    lastcommand = terminal.value;
    prelastcommand = lastcommand;
    terminalLine(windowId, inputId);
    terminal.value = '';
  }

  if(event.keyCode === 38){
    terminal.value = lastcommand;
  }
}

/* function terminal(windowId){
  const terminal = document.getElementById(`terminal${windowId}-window-terminal`);
  const terminalprompt = document.getElementById(`terminal${windowId}-window-content-prompt`);
  const appcontainer = document.getElementById(`terminal${windowId}-window-container`);

  var returncommand = document.createElement('div');
  var returncommandclass = document.createAttribute('class');
  var returncommandclassvalue = returncommandclass.value = `terminal${windowId}-window-content-text`;


  var createtext = document.createElement('div');
  var createtextclass = document.createAttribute('class');
  var createtextclassvalue = createtextclass.value = `terminal${windowId}-window-content-text`;
  var textelements = document.getElementsByClassName(`terminal${windowId}-window-content-text`);

  var genwindow = document.createElement('div');
  var genwindowclass = document.createAttribute('class');
  var genwindowappid = document.createAttribute('id');
  var genwindowevent = document.createAttribute('onmousedown');
  var genwindowclassname = genwindowclass.value = 'window';
  var genwindowidname = genwindowappid.value = 'generated' + msgid + '-window';
  var genwindoweventvalue = genwindowevent.value = `applicationfocus('generated${msgid}-window')`;

  var resizebutton = document.getElementById("demo-window-resize-button");
  var minimizebutton = document.getElementById("demo-window-minimize-button");

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
        
        document.getElementById(`generated${msgid}-window`).innerHTML = `
        
        <div id="generated${msgid}-window-header" class="window-header" onmouseover="">
        
          <button id="generated${msgid}-window-close-button" class="window-header-close-button" onclick="closeWindow('generated${msgid}-window')"></button>        
          <a class="window-header-title" id="generated${msgid}-window-header-title"></a>
    
        </div>
    
        <div id="generated${msgid}-window-content" class="window-content">
          <a class="text-default" id="generated${msgid}-window-content-p">Paragraph</a>
          <button class="system-input-button" id="generated${msgid}-window-content-input-button1" onclick="closeWindow('generated${msgid}-window')">OK</button>
        </div>
        
        `;
        
        dragElement(`generated${msgid}-window`);

        document.getElementById(`generated${msgid}-window`).style.animation = 'openwindow 0.25s';

        document.getElementById(`generated${msgid}-window`).style.height = '134px';
        document.getElementById(`generated${msgid}-window`).style.width = '352px';
        document.getElementById(`generated${msgid}-window`).style.top = `calc(50% - ${(parseInt(document.getElementById(`generated${msgid}-window`).style.height) * 0.5)}px)`;
        document.getElementById(`generated${msgid}-window`).style.left = `calc(50% - ${(parseInt(document.getElementById(`generated${msgid}-window`).style.width) * 0.5)}px)`;
        document.getElementById(`generated${msgid}-window-header-title`).innerText = `Message${msgid}`;
        document.getElementById(`generated${msgid}-window`).style.zIndex = z + 1;

        document.getElementById(`generated${msgid}-window-content-p`).style.top = '15px';
        document.getElementById(`generated${msgid}-window-content-p`).style.left = '15px';

        document.getElementById(`generated${msgid}-window-content-p`).innerText = msgcontent;

        document.getElementById(`generated${msgid}-window-content-input-button1`).style.top = `calc(calc(100% - 31px) - 15px)`;
        document.getElementById(`generated${msgid}-window-content-input-button1`).style.left = `calc(calc(100% - 78px) - 15px)`;
        document.getElementById(`generated${msgid}-window-content-input-button1`).focus();

        msgid = msgid + 1;
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

    if(terminal.value.includes("change -uname")){
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        returncommand.innerHTML = 'Setting username to ' + lastcommand.slice(14) + '...';
        localStorage.setItem('username', lastcommand.slice(14));
        document.getElementById('logon-screen-username').innerHTML = lastcommand.slice(14);
        document.getElementById('terminal-window-content-prompt').innerText = lastcommand.slice(14) + '$:';
      }, 000);
    }

    if(terminal.value.includes("change -userpw")){
      setTimeout(() => {
        appcontainer.appendChild(returncommand);
        returncommand.returncommandclassvalue;
        returncommand.setAttributeNode(returncommandclass);
        terminalprompt.innerHTML = '<span style="color: lightgray;">[sudo] Password for ' + username + ':</span>';
        sudo = true;
        returncommand.innerHTML = 'Setting your password to ' + lastcommand.slice(15) + '...';
        localStorage.setItem('userpw', lastcommand.slice(15));
        userpw = localStorage.getItem('userpw');
        userpwinput = lastcommand.slice(15);
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
  
  createDOMElement('terminal-window-container', 'div', `line${lines}`, 'terminal-window-content-text');
  document.getElementById(`line${lines}`).innerHTML = '<span style="color: orange;">' + 'js-console$:' + '</span> ' + (terminal.value) + '<br><span style="color: lightgreen;">console:</span> ' + eval(terminal.value);
  terminal.value = '';
  eval(terminal.value);
  lines = lines + 1;
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
} */

function terminalPromptFocus(windowId) {
  document.getElementById(`terminal${windowId}-window-terminal`).focus();
}


// Terminal Functions

function write(text) {
  return text;
}

var dimlist = [];

function dim(con) {
  dimlist.push(con);
  return dimlist.lenght;
}

function clear() {
  terminal.value = '';
  for (n = (textelements.length - 1); n > -1; n--) {
    appcontainer.removeChild(textelements[0]);
  }
}

function exit() {
  evaul = false;
  sudo = false;

  var terminal = document.getElementById('terminal-window-terminal');
  var terminalprompt = document.getElementById('terminal-window-content-prompt');

  terminalprompt.innerText = username + '$:';
  terminalprompt.style.color = 'yellow';
  terminal.focus();
}