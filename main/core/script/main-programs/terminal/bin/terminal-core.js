// Terminal Program - Command Line Code

var lastcommand;
var prelastcommand;

function terminalLine(windowId, inputId) {
  var terminal = document.getElementById(inputId);
  var terminalContent = document.getElementById(`terminal${windowId}-window-content`);

  if (event.keyCode === 13) {
    createDOMElement(
      document.getElementById(`terminal${windowId}-window-container`),
      `div`,
      `terminal${windowId}-window-line${lines}`,
      `terminal-window-content-text`
    );

    if (sudo === false && evaul === false && passwd === false) {
      terminal.type = 'text';
      terminal.style.color = 'lightgray';
      changeTerminalPrompt(windowId, `<span style="color: yellow;">${email.split('@')[0]}@${usernamme}</span>`);
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
  var terminalContent = document.getElementById(`terminal${windowId}-window-content`);
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

        if (userpw == "") {
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

      if (terminal.value.slice(0, 3).includes("msg")) {
        var msgcontent = terminal.value.slice(4);
        setTimeout(() => {

          createWindow(`owner-user`, `generated${msgid}`);

          document.getElementById(`generated${msgid}-window`).onmousedown = `focusWindow('generated${msgid}-window')`;

          createWindowHeader(`generated${msgid}-window`, `generated${msgid}`, 0, 2, `Message ${msgid}`, msgid);

          createDOMElement(document.getElementById(`generated${msgid}-window`), `div`, `generated${msgid}-window-content`, 'window-content');

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

      if (terminal.value.slice(0, 4) == '<br>') {
        setTimeout(() => {
          createTerminalLine(windowId, '<br>');
        }, 000);
      }

      if (terminal.value.slice(0, 4).includes("info")) {
        setTimeout(() => {
          createTerminalLine(windowId, `<br>- System Info: <br>[System Name] ${systemname}<br>[Build type] ${buildtype}<br>[Build] ${build}<br>[Compilation] ${today}<br></br>`);
        }, 000);
      }

      if (terminal.value.slice(0, 4).includes("help")) {
        setTimeout(() => {
          createTerminalLine(windowId, 
            `<br>- Available commands: 
            <br>info: This comand shows the main system information<br>
            <br>clear: Wipes terminal text<br>
            <br>exit: Closes terminal application<br>
            <br>terminal: Shows terminal status. Sintax: terminal [command]<br>
            <br>set: Customizes a selected element in the operating system. Syntax: set [-w, -fw, -username].<br>
            <br>ecos -sysbuild: Updates the operating system current compilation data<br>
            <br>js-console: Opens a javascript command line.<br>
            <br>location: Change the browser location settings of the operating system. Example: [location boot -l -t 0 url].<br>
            <br>location boot: Change the loading file of the operating system. Syntax: location boot [fileURL]<br>
            <br>location reboot -t (0 or 1): Choose if you want to boot directly on terminal or in the file. 0 => System boots with the UI, 1 => System boots in terminal.<br>
            <br>msg [text]: Creates a new dialogue box with the text you give it.<br>
            <br>import: Brings a new and foreign file to the operating system. Be careful when using this command.</br>
            <br>Please type all commands in lowercase.`);
        }, 000);
      }

      if (terminal.value.slice(0, 5).includes("andre")) {
        setTimeout(() => {
          createTerminalLine(windowId, '<br>Melhor prof<br></br></br>');
        }, 000);
      }

      if (terminal.value.slice(0, 8).includes("import")) {
        setTimeout(() => {
          createTerminalLine(windowId, '<br>Please try: import [type] [URL]<br></br></br>');
        }, 000);
        if (terminal.value.slice(0, 13).includes("import script")){
          createDOMScript(`${terminal.value.slice(14)}-imported`, `text/javascript`, terminal.value.slice(14));
        }
      }

      if (terminal.value.slice(0, 6).includes("daniel")) {
        setTimeout(() => {
          createTerminalLine(windowId, '<br>Melhor prof<br></br>');
        }, 000);
      }

      if (terminal.value.slice(0, 7).includes("nirvado")) {
        setTimeout(() => {
          createTerminalLine(windowId, '<br>Melhor prof<br></br>');
        }, 000);
      }

      if (terminal.value.slice(0, 7).includes("roberta")) {
        setTimeout(() => {
          createTerminalLine(windowId, '<br>Melhor prof<br></br>');
        }, 000);
      }

      if (terminal.value.slice(0, 2).includes("ph")) {
        setTimeout(() => {
          createTerminalLine(windowId, '<br>Melhor prof<br></br>');
        }, 000);
      }

      if (terminal.value.slice(0, 7).includes("eldasio")) {
        setTimeout(() => {
          createTerminalLine(windowId, '<br>Melhor prof<br></br>');
        }, 000);
      }

      if (terminal.value.slice(0, 7).includes("antonio")) {
        setTimeout(() => {
          createTerminalLine(windowId, '<br>Antonio deu certo<br>');
        }, 000);
      }

      if (terminal.value.slice(0, 10).includes("js-console") && terminal.value.includes('sudo') === false) {
        setTimeout(() => {
          evaul = true;
          terminalPrompt.innerText = 'js-console' + '$:';
          terminalPrompt.style.color = 'orange';
          terminal.focus();
          createTerminalLine('<span style="color: orange;">Opening JS Terminal...</span>');
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

    if (terminal.value.slice(0, 8).includes("location") && terminal.value.includes('sudo') === false) {

      if (terminal.value.slice(0, 17).includes("location boot -l ")) {
        setTimeout(() => {
          createTerminalLine(windowId, 'Setting boot location to' + terminal.value.slice(17) + '...');
        }, 000);
        localStorage.setItem('boot', terminal.value.slice(17));
        location.assign('../boot/bootmgr.html');

        if (terminal.value.slice(0, 19).includes("location boot -l -t")) {
          if (terminal.value.slice(0, 21).includes("location boot -l -t 0")) {
            setTimeout(() => {
              createTerminalLine(windowId, 'Setting boot location to' + terminal.value.slice(22) + '...');
            }, 000);
            localStorage.setItem('boot', terminal.value.slice(22));
            localStorage.setItem('rebootT', '0');
            location.assign('../boot/bootmgr.html');
          }

          if (terminal.value.slice(0, 21).includes("location boot -l -t 1")) {
            setTimeout(() => {
              createTerminalLine(windowId, 'Setting boot location to' + terminal.value.slice(22) + '...');
            }, 000);
            localStorage.setItem('boot', terminal.value.slice(22));
            localStorage.setItem('rebootT', '1');
            location.assign('../boot/bootmgr.html');
          }
        }
      }

      if (terminal.value.slice(0, 15).includes("location reboot")) {

        setTimeout(() => {
          createTerminalLine(windowId, 'Rebooting operating system...');
          location.assign('../boot/bootmgr.html');
        }, 000);

        if (terminal.value.includes("location reboot -t ")) {
          setTimeout(() => {
            createTerminalLine(windowId, 'Rebooting operating system...');
          }, 000);
          localStorage.setItem('rebootT', terminal.value.slice(19));
          location.assign('../boot/bootmgr.html');
        }

      }

    }

    if (terminal.value.slice(0, 10).includes("echo -abnt")) {
      setTimeout(() => {
        createTerminalLine(windowId, '<span style="color: lightblue; font-size: 128px; font-family: Inter Med;">' + lastcommand.slice(11) + '</span>');
      }, 000);
    }

    if (terminal.value.slice(0, 4).includes("echo")) {
      setTimeout(() => {
        createTerminalLine(windowId, lastcommand.slice(5));
      }, 000);
    }

    if (terminal.value.slice(0, 3).includes("set")) {

      if (terminal.value.slice(0, 6).includes("set -w")) {
        const desktop = document.getElementById('owner-user');

        setTimeout(() => {
          createTerminalLine(windowId, 'Setting wallpaper to ' + lastcommand.slice(7) + '...');
          desktop.style.backgroundImage = "url(" + lastcommand.slice(7) + ")";
          desktop.style.backgroundSize = 'cover';
          localStorage.setItem('userwp', lastcommand.slice(7));
        }, 000);
      }

      if (terminal.value.slice(0, 7).includes("set -fw")) {
        const logonbg = document.getElementById('logon-screen');

        setTimeout(() => {
          createTerminalLine(windowId, 'Setting lock screen wallpaper to ' + lastcommand.slice(8) + '...');
          logonbg.style.backgroundImage = "url(" + lastcommand.slice(8) + ")";
          logonbg.style.backgroundSize = 'cover';
          localStorage.setItem('userfwp', lastcommand.slice(8));
        }, 000);
      }

      if (terminal.value.slice(0, 13).includes("set -username")) {
        setTimeout(() => {
          createTerminalLine(windowId, 'Setting username to ' + lastcommand.slice(14) + '...');
          localStorage.setItem('username', lastcommand.slice(14));
          document.getElementById('logon-screen-username').innerHTML = lastcommand.slice(14);
          document.getElementById('terminal-window-content-prompt').innerText = lastcommand.slice(14) + '$:';
        }, 000);
      }

      if (terminal.value.slice(0, 16).includes("set -w igorcareca")) {
        const desktop = document.getElementById('owner-user');

        setTimeout(() => {
          createTerminalLine(windowId, 'Setting wallpaper to ../../resources/images/background/igor careca.png...');
          desktop.style.backgroundColor = 'black';
          desktop.style.backgroundImage = "url('../../resources/images/background/igor careca.png')";
          desktop.style.backgroundSize = 'contain';
          localStorage.setItem('userwp', '../../resources/images/background/igor careca.png');
        }, 000);
      }

      if (terminal.value.slice(0, 16).includes("set -w ioripeito")) {
        const desktop = document.getElementById('owner-user');

        setTimeout(() => {
          createTerminalLine(windowId, 'Setting wallpaper to ../../resources/images/background/peitudoiori.jpeg...');
          desktop.style.backgroundColor = 'black';
          desktop.style.backgroundImage = "url('../../resources/images/background/peitudoiori.jpeg')";
          desktop.style.backgroundSize = 'contain';
          localStorage.setItem('userwp', '../../resources/images/background/peitudoiori.jpeg');
        }, 000);
      }

      if (terminal.value.slice(0, 14).includes("set -w default")) {
        const desktop = document.getElementById('owner-user');

        setTimeout(() => {
          createTerminalLine(windowId, 'Setting wallpaper to ../../resources/images/background/default.jpg...');
          desktop.style.backgroundColor = 'black';
          desktop.style.backgroundImage = "url('../../resources/images/background/default.jpg')";
          desktop.style.backgroundSize = 'cover';
          localStorage.setItem('userwp', '../../resources/images/background/default.jpg');
        }, 000);
      }

      if (terminal.value.slice(0, 15).includes("set -w default1")) {
        const desktop = document.getElementById('owner-user');

        setTimeout(() => {
          createTerminalLine(windowId, 'Setting wallpaper to ../../resources/images/background/wpp1.jpg...');
          desktop.style.backgroundColor = 'black';
          desktop.style.backgroundImage = "url('../../resources/images/background/wpp1.jpg')";
          desktop.style.backgroundSize = 'cover';
          localStorage.setItem('userwp', '../../resources/images/background/wpp1.jpg');
        }, 000);
      }

      if (terminal.value.slice(0, 15).includes("set -w default2")) {
        const desktop = document.getElementById('owner-user');

        setTimeout(() => {
          createTerminalLine(windowId, 'Setting wallpaper to ../../resources/images/background/wpp2.jpg...');
          desktop.style.backgroundColor = 'black';
          desktop.style.backgroundImage = "url('../../resources/images/background/wpp2.jpg')";
          desktop.style.backgroundSize = 'cover';
          localStorage.setItem('userwp', '../../resources/images/background/wpp2.jpg');
        }, 000);
      }

      if (terminal.value.slice(0, 15).includes("set -w default3")) {
        const desktop = document.getElementById('owner-user');

        setTimeout(() => {
          createTerminalLine(windowId, 'Setting wallpaper to ../../resources/images/background/wpp3.jpg...');
          desktop.style.backgroundColor = 'black';
          desktop.style.backgroundImage = "url('../../resources/images/background/wpp3.jpg')";
          desktop.style.backgroundSize = 'cover';
          localStorage.setItem('userwp', '../../resources/images/background/wpp3.jpg');
        }, 000);
      }

      if (terminal.value.slice(0, 15).includes("set -w default4")) {
        const desktop = document.getElementById('owner-user');

        setTimeout(() => {
          createTerminalLine(windowId, 'Setting wallpaper to ../../resources/images/background/wpp4.jpg...');
          desktop.style.backgroundColor = 'black';
          desktop.style.backgroundImage = "url('../../resources/images/background/wpp4.jpg')";
          desktop.style.backgroundSize = 'cover';
          localStorage.setItem('userwp', '../../resources/images/background/wpp4.jpg');
        }, 000);
      }

      if (terminal.value.slice(0, 15).includes("set -w default5")) {
        const desktop = document.getElementById('owner-user');

        setTimeout(() => {
          createTerminalLine(windowId, 'Setting wallpaper to ../../resources/images/background/wpp5.jpg...');
          desktop.style.backgroundColor = 'black';
          desktop.style.backgroundImage = "url('../../resources/images/background/wpp5.jpg')";
          desktop.style.backgroundSize = 'cover';
          localStorage.setItem('userwp', '../../resources/images/background/wpp5.jpg');
        }, 000);
      }

      if (terminal.value.slice(0, 15).includes("set -w default6")) {
        const desktop = document.getElementById('owner-user');

        setTimeout(() => {
          createTerminalLine(windowId, 'Setting wallpaper to ../../resources/images/background/wpp6.jpg...');
          desktop.style.backgroundColor = 'black';
          desktop.style.backgroundImage = "url('../../resources/images/background/wpp6.jpg')";
          desktop.style.backgroundSize = 'cover';
          localStorage.setItem('userwp', '../../resources/images/background/wpp6.jpg');
        }, 000);
      }
    }

    if (terminal.value.slice(0, 16).includes("ecos -lockscreen")) {
      const desktop = document.getElementById('owner-user');
      const loginwindow = document.getElementById('logon-screen');
      const logininput = document.getElementById('logon-screen-input-text');
      setTimeout(() => {
        createTerminalLine(windowId, 'Done');
        desktop.style.display = 'none';
        loginwindow.style.display = 'block';
        logininput.focus();
      }, 000);
    }

    if (terminal.value.slice(0, 14).includes("ecos -sysbuild")) {
      var date = new Date();
      var compyear = date.getFullYear();
      var compmonths = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
      var compdays = 0;
      var comphours = 0;
      var compminutes = 0;

      if (date.getDate() < 10) { compdays = '0' + date.getDate(); } else { compdays = date.getDate(); }
      if (date.getHours() < 10) { comphours = '0' + date.getHours(); } else { comphours = date.getHours(); }
      if (date.getMinutes() < 10) { compminutes = '0' + date.getMinutes(); } else { compminutes = date.getMinutes(); }

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

    if (terminal.value.slice(0, 15).includes("shutdown -h now")) {
      const desktop = document.getElementById('owner-user');
      setTimeout(() => {
        createTerminalLine(windowId, 'Done');
      }, 000);
    }

    lastcommand = terminal.value;
    prelastcommand = lastcommand;
    terminalLine(windowId, inputId);
    setTimeout(() => {
      document.getElementById(`terminal${windowId}-window-content`).scrollTo(0, document.getElementById(`terminal${windowId}-window-content`).scrollHeight);
    }, 00);
    terminal.value = '';
  }

  if (event.keyCode == 13 && evaul === true) {
    prelastcommand = lastcommand;
    lastcommand = terminal.value;

    createTerminalLine(windowId, `<span style="color: orange;">js-console$:</span> '${terminal.value}<br><span style="color: lightgreen;">console:</span>${eval(terminal.value)}`);
    terminal.value = '';
    eval(terminal.value);

    lastcommand = terminal.value;
    prelastcommand = lastcommand;
    terminalLine(windowId, inputId);
    setTimeout(() => {
      document.getElementById(`terminal${windowId}-window-content`).scrollTo(0, document.getElementById(`terminal${windowId}-window-content`).scrollHeight);
    }, 00);
    terminal.value = '';
  }

  if (event.keyCode === 38) {
    terminal.value = lastcommand;
  }
}

function terminalPromptFocus(windowId) {
  document.getElementById(`terminal${windowId}-window-terminal`).focus();
}


// Terminal Functions

function echo(text) {
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