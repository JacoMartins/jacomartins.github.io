let build = 32;
let isbeta = true;
let betastage = 1;
let version = '1.0.0';
let systemname = 'Eclipse Cloud Operating System (ECOS)';
let versionname = 'Beta';
var username = localStorage.getItem('username');
var userpw = localStorage.getItem('userpw');
var date = new Date();

if (localStorage.getItem('boot') == undefined) {
   localStorage.setItem('boot', '../ui/ecos.html')
}

if (localStorage.getItem('rebootT') == undefined) {
   localStorage.setItem('rebootT', '0')
}
 

setInterval(function time() {
   if(window.innerHeight > window.innerWidth){
     var date = new Date();
     var DateMonths = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
     var DateDays = 0;
     var DateHours = 0;
     var DateMinutes = 0;
     var DateSeconds = 0;
     if (date.getDate() < 10) {DateDays = '0' + date.getDate();} else {DateDays = date.getDate();}
     if (date.getHours() < 10) {DateHours = '0' + date.getHours();} else {DateHours = date.getHours();}
     if (date.getMinutes() < 10) {DateMinutes = '0' + date.getMinutes();} else {DateMinutes = date.getMinutes();}
     if (date.getSeconds() < 10) {DateSeconds = '0' + date.getSeconds();} else {DateSeconds = date.getSeconds();}
   
   } else {
     var date = new Date();
     var DateMonths = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
     var DateDays = 0;
     var DateHours = 0;
     var DateMinutes = 0;
     var DateSeconds = 0;
     if (date.getDate() < 10) {DateDays = '0' + date.getDate();} else {DateDays = date.getDate();}
     if (date.getHours() < 10) {DateHours = '0' + date.getHours();} else {DateHours = date.getHours();}
     if (date.getMinutes() < 10) {DateMinutes = '0' + date.getMinutes();} else {DateMinutes = date.getMinutes();}
     if (date.getSeconds() < 10) {DateSeconds = '0' + date.getSeconds();} else {DateSeconds = date.getSeconds();}
   }
 }, 1000);
 
 let today = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
 
 setTimeout(() => {
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
 
  }, 250);

window.addEventListener('load', event => {
   let kernelterminal = document.getElementById("kernel-terminal-input");
   var lastcommand;
   var input = document.getElementById("kernel-terminal-input");
   var container = document.getElementById("kernel-terminal-container");
   var prompt = document.getElementById("kernel-terminal-prompt")

   setTimeout(() => {
      if(localStorage.getItem('rebootT') == 1){
         window.stop();
         kernelterminal.readOnly = false;
         kernelterminal.focus();
         prompt.innerText = "$:";
         prompt.style.animation = 'none';
      } else {
         setTimeout(() => {
            location.assign(localStorage.getItem('boot'));
         }, 250);
      }
   }, 2750);
})

window.addEventListener('keyup', event => {
   let kernelterminal = document.getElementById("kernel-terminal-input");
   var lastcommand;
   var input = document.getElementById("kernel-terminal-input");
   var container = document.getElementById("kernel-terminal-container");
   var prompt = document.getElementById("kernel-terminal-prompt")

   if(event.keyCode == 84, event.ctrlKey, event.altKey){
      window.stop();
      kernelterminal.readOnly = false;
      kernelterminal.focus();
      prompt.innerText = "$:";
      prompt.style.animation = 'none';
      localStorage.setItem('rebootT', '1');
   }
   var createtext = document.createElement('div');
   var createtextclass = document.createAttribute('class');
   var createtextclassvalue = createtextclass.value = 'kernel-terminal-text';
   var textelements = document.getElementsByClassName('kernel-terminal-text');
   
   var returncommand = document.createElement('div');
   var returncommandclass = document.createAttribute('class');
   var returncommandclassvalue = returncommandclass.value = 'kernel-terminal-text';
   
     
   
   if(event.keyCode == 13){
   
       lastcommand = input.value;
   
       if(input.value.includes("exit")){
         setTimeout(() => {
           container.appendChild(returncommand);
           returncommand.returncommandclassvalue;
           returncommand.setAttributeNode(returncommandclass);
           returncommand.innerText = '\nExitting terminal...\n';
         }, 000);
          location.assign(localStorage.getItem('boot'));
       }

       if(input.value.includes("location")){

         if(input.value.includes("location boot -l ")){
           setTimeout(() => {
             appcontainer.appendChild(returncommand);
             returncommand.returncommandclassvalue;
             returncommand.setAttributeNode(returncommandclass);
             returncommand.innerHTML = 'Setting boot location to' + input.value.slice(17) + '...';
           }, 000);
           localStorage.setItem('boot', input.value.slice(17));
           location.assign('../ui/bootmgr.html');

           if(input.value.includes("location boot -l -t")){
              
            if(input.value.includes("location boot -l -t 0")){
               setTimeout(() => {
                 appcontainer.appendChild(returncommand);
                 returncommand.returncommandclassvalue;
                 returncommand.setAttributeNode(returncommandclass);
                 returncommand.innerHTML = 'Setting boot location to' + input.value.slice(22) + '...';
               }, 000);
               localStorage.setItem('boot', input.value.slice(22));
               localStorage.setItem('rebootT', '0');
               location.assign('../boot/bootmgr.html');
             }
     
             if(input.value.includes("location boot -l -t 1")){
               setTimeout(() => {
                 appcontainer.appendChild(returncommand);
                 returncommand.returncommandclassvalue;
                 returncommand.setAttributeNode(returncommandclass);
                 returncommand.innerHTML = 'Setting boot location to' + input.value.slice(22) + '...';
               }, 000);
               localStorage.setItem('boot', input.value.slice(22));
               localStorage.setItem('rebootT', '1');
               location.assign('../boot/bootmgr.html');
             }
           }

         }
   
         if(input.value.includes("location reboot")){
   
           setTimeout(() => {
             appcontainer.appendChild(returncommand);
             returncommand.returncommandclassvalue;
             returncommand.setAttributeNode(returncommandclass);
             returncommand.innerHTML = 'Rebooting operating system...';
             location.assign('../boot/bootmgr.html');
           }, 000);
     
           if(input.value.includes("location reboot -t ")){
             setTimeout(() => {
               appcontainer.appendChild(returncommand);
               returncommand.returncommandclassvalue;
               returncommand.setAttributeNode(returncommandclass);
               returncommand.innerHTML = 'Rebooting operating system...';
             }, 000);
             localStorage.setItem('rebootT', input.value.slice(19));
             location.assign('../boot/bootmgr.html');
           }
     
         }
   
       }
   
       if(input.value.includes("info")){
         setTimeout(() => {
           container.appendChild(returncommand);
           returncommand.returncommandclassvalue;
           returncommand.setAttributeNode(returncommandclass);
           returncommand.innerText = '\n- System Info: \n[System Name] ' + systemname + '\n[Version Name] ' + versionname + '\n[Build] '+ build + '\n[Compilation] ' + today;
         }, 000);
       }
   
       if(input.value.includes("help")){
         setTimeout(() => {
           container.appendChild(returncommand);
           returncommand.returncommandclassvalue;
           returncommand.setAttributeNode(returncommandclass);
           returncommand.innerText = '\n- Available commands: \ninfo: This comand shows the main system information\n\nclear: Wipes terminal text\n\nexit: Closes terminal application\n\nterminal: Shows terminal status. Sintax: terminal [command]\n\nchange: Customizes the selected element in the operating system. Syntax: change [-w, -uname].\n\ncomp update: Updates the operating system current compilation data\n\nPlease type all commands in lowercase.\n';
         }, 000);
       }
   
       if(input.value.includes("andre")){
         setTimeout(() => {
           container.appendChild(returncommand);
           returncommand.returncommandclassvalue;
           returncommand.setAttributeNode(returncommandclass);
           returncommand.innerText = '\nMelhor prof\n';
         }, 000);
       }
   
       if(input.value.includes("antonio")){
         setTimeout(() => {
           container.appendChild(returncommand);
           returncommand.returncommandclassvalue;
           returncommand.setAttributeNode(returncommandclass);
           returncommand.innerText = '\nAntonio deu certo\n';
         }, 000);
       }
   
       if(input.value.includes("clear")){
         input.value = '';
         while(textelements.length > -1) container.removeChild(textelements[0]);
       }
   
       if(input.value.includes("terminal")){
         setTimeout(() => {
           container.appendChild(returncommand);
           returncommand.returncommandclassvalue;
           returncommand.setAttributeNode(returncommandclass);
           returncommand.innerHTML = '<span style="color: red;">Wrong Sintax</span>, please use "terminal [command]".';
         }, 000);
       }
   
       if(input.value.includes("terminal") && input.value.includes("isworking")){
         setTimeout(() => {
           container.appendChild(returncommand);
           returncommand.returncommandclassvalue;
           returncommand.setAttributeNode(returncommandclass);
           returncommand.innerHTML = '<span style="color: lightgreen;">Yes</span>.';
         }, 000);
       }
   
       if(input.value.includes("abnt")){
         setTimeout(() => {
           container.appendChild(returncommand);
           returncommand.returncommandclassvalue;
           returncommand.setAttributeNode(returncommandclass);
           returncommand.innerHTML =  '<span style="color: lightblue; font-size: 128px; font-family: Inter Med;">' + lastcommand.slice(4) + '</span>';
         }, 000);
       }
   
       if(input.value.includes("write")){
         setTimeout(() => {
           container.appendChild(returncommand);
           returncommand.returncommandclassvalue;
           returncommand.setAttributeNode(returncommandclass);
           returncommand.innerText =  lastcommand.slice(5);
         }, 000);
       }
   
       if(input.value.includes("gutem")){
         setTimeout(() => {
           container.appendChild(returncommand);
           returncommand.returncommandclassvalue;
           returncommand.setAttributeNode(returncommandclass);
           returncommand.innerHTML =  'pelo q vc sabe uma ova! Como vc tem coragem de queimar o cara pelos boatos dos outros??? pelas msg q eu li aqui, vc ta descontando nele a dor q vc sofreu antes! os seus argumentos e msg são tudo coisa de criança, é ridiculo d++++, eu conheço esse mlk a mt tempo e ele é uma pessoa incrivel, tu conhece a um ano, se é que conhece, e acha q pode julgar e dar a sua opinião baseado em FOFOCA. você não entende q isso é um assunto serio, q pode acabar com a vida dele na escola, uma difamação q tem MTTTTR mentira no meio e vc espalha esses boatos pelo simples fato de vc se sentir confortável fazendo isso so pq ja aconteceu algo parecido com vc? acha q isso te da o direito de se intrometer no problema de outras pessoas so pra piorar tudo. isso não é coisa que se faça, se vc ta esculhambando ele por puro odio e não está interessado em entender a verdade fique quieto e não se meta, o guto não precisa das suas opiniões tóxicas mexendo no psicólogico dele, aliás, ngm precisa da sua opinião aqui, até pq vc não está interessado em ajudar a resolver isso, vc so quer acabar com a reputação de um mlk q vc nem conhece direito e eu não vou deixar vc nem ngm fazer isso, e se os amigos dele forem amigos de vdd não vão deixar tmb. Reveja seus atos e pare de falar nesse caso que não te pertence.';
         }, 000);
       }
   
       if(input.value.includes("change -w")){
         const desktop = document.getElementById('owner-user');
         
         setTimeout(() => {
           container.appendChild(returncommand);
           returncommand.returncommandclassvalue;
           returncommand.setAttributeNode(returncommandclass);
           returncommand.innerHTML = 'Setting wallpaper to' + lastcommand.slice(9) + '...';
           desktop.style.backgroundImage = "url(" + lastcommand.slice(9) + ")";
           desktop.style.backgroundSize = 'cover';
         }, 000);
       }
   
       if(input.value.includes("change -lsw")){
         const logonbg = document.getElementById('logon-screen');
         
         setTimeout(() => {
           container.appendChild(returncommand);
           returncommand.returncommandclassvalue;
           returncommand.setAttributeNode(returncommandclass);
           returncommand.innerHTML = 'Setting wallpaper to' + lastcommand.slice(11) + '...';
           logonbg.style.backgroundImage = "url(" + lastcommand.slice(11) + ")";
           logonbg.style.backgroundSize = 'cover';
         }, 000);
       }
   
       if(input.value.includes("change -uname")){
         setTimeout(() => {
           container.appendChild(returncommand);
           returncommand.returncommandclassvalue;
           returncommand.setAttributeNode(returncommandclass);
           returncommand.innerHTML = 'Setting username to ' + lastcommand.slice(13) + '...';
           localStorage.setItem('username', lastcommand.slice(13));
           document.getElementById('logon-screen-username').innerHTML = lastcommand.slice(13);
           document.getElementById('kernel-terminal-prompt').innerText = lastcommand.slice(13) + '$:';
         }, 000);
       }
   
       if(input.value.includes("change -userpw")){
         setTimeout(() => {
           container.appendChild(returncommand);
           returncommand.returncommandclassvalue;
           returncommand.setAttributeNode(returncommandclass);
           returncommand.innerHTML = 'Setting your password to ' + lastcommand.slice(15) + '...';
           localStorage.setItem('userpw', lastcommand.slice(15));
           userpwinput = lastcommand.slice(15);
         }, 000);
       }
   
       if(input.value.includes("system lock")){
         const desktop = document.getElementById('owner-user');
         const loginwindow = document.getElementById('logon-screen');
         const logininput = document.getElementById('logon-screen-input-text');
         setTimeout(() => {
           container.appendChild(returncommand);
           returncommand.returncommandclassvalue;
           returncommand.setAttributeNode(returncommandclass);
           returncommand.innerHTML = 'Done';
           desktop.style.display = 'none';
           loginwindow.style.display = 'block';
           logininput.focus();
         }, 000);
       }
   
       if(input.value.includes("system off")){
         const desktop = document.getElementById('owner-user');
         setTimeout(() => {
           container.appendChild(returncommand);
           returncommand.returncommandclassvalue;
           returncommand.setAttributeNode(returncommandclass);
           returncommand.innerHTML = 'Done';
         }, 000);
       }
       
       if(input.value.includes("-w igorcareca")){
         const desktop = document.getElementById('owner-user');
         
         setTimeout(() => {
           container.appendChild(returncommand);
           returncommand.returncommandclassvalue;
           returncommand.setAttributeNode(returncommandclass);
           returncommand.innerHTML = 'Setting wallpaper to ../../resources/images/background/igor careca.png...';
           desktop.style.backgroundColor = 'black';
           desktop.style.backgroundImage = "url('../../resources/images/background/igor careca.png')";
           desktop.style.backgroundSize = 'contain';
         }, 000);
       }
   
       if(input.value.includes("-w ioripeito")){
         const desktop = document.getElementById('owner-user');
         
         setTimeout(() => {
           container.appendChild(returncommand);
           returncommand.returncommandclassvalue;
           returncommand.setAttributeNode(returncommandclass);
           returncommand.innerHTML = 'Setting wallpaper to ../../resources/images/background/peitudoiori.jpeg...';
           desktop.style.backgroundColor = 'black';
           desktop.style.backgroundImage = "url('../../resources/images/background/peitudoiori.jpeg')";
           desktop.style.backgroundSize = 'contain';
         }, 000);
       }
   
       if(input.value.includes("-w default")){
         const desktop = document.getElementById('owner-user');
   
         setTimeout(() => {
           container.appendChild(returncommand);
           returncommand.returncommandclassvalue;
           returncommand.setAttributeNode(returncommandclass);
           returncommand.innerHTML = 'Setting wallpaper to ../../resources/images/background/default.jpg...';
           desktop.style.backgroundColor = 'black';
           desktop.style.backgroundImage = "url('../../resources/images/background/default.jpg')";
           desktop.style.backgroundSize = 'cover';
         }, 000);
       }
   
       if(input.value.includes("-w default1")){
         const desktop = document.getElementById('owner-user');
   
         setTimeout(() => {
           container.appendChild(returncommand);
           returncommand.returncommandclassvalue;
           returncommand.setAttributeNode(returncommandclass);
           returncommand.innerHTML = 'Setting wallpaper to ../../resources/images/background/wpp1.jpg...';
           desktop.style.backgroundColor = 'black';
           desktop.style.backgroundImage = "url('../../resources/images/background/wpp1.jpg')";
           desktop.style.backgroundSize = 'cover';
         }, 000);
       }
   
       if(input.value.includes("-w default2")){
         const desktop = document.getElementById('owner-user');
   
         setTimeout(() => {
           container.appendChild(returncommand);
           returncommand.returncommandclassvalue;
           returncommand.setAttributeNode(returncommandclass);
           returncommand.innerHTML = 'Setting wallpaper to ../../resources/images/background/wpp2.jpg...';
           desktop.style.backgroundColor = 'black';
           desktop.style.backgroundImage = "url('../../resources/images/background/wpp2.jpg')";
           desktop.style.backgroundSize = 'cover';
         }, 000);
       }
   
       if(input.value.includes("-w default3")){
         const desktop = document.getElementById('owner-user');
         
         setTimeout(() => {
           container.appendChild(returncommand);
           returncommand.returncommandclassvalue;
           returncommand.setAttributeNode(returncommandclass);
           returncommand.innerHTML = 'Setting wallpaper to ../../resources/images/background/wpp3.jpg...';
           desktop.style.backgroundColor = 'black';
           desktop.style.backgroundImage = "url('../../resources/images/background/wpp3.jpg')";
           desktop.style.backgroundSize = 'cover';
         }, 000);
       }
   
       if(input.value.includes("-w default4")){
         const desktop = document.getElementById('owner-user');
         
         setTimeout(() => {
           container.appendChild(returncommand);
           returncommand.returncommandclassvalue;
           returncommand.setAttributeNode(returncommandclass);
           returncommand.innerHTML = 'Setting wallpaper to ../../resources/images/background/wpp4.jpg...';
           desktop.style.backgroundColor = 'black';
           desktop.style.backgroundImage = "url('../../resources/images/background/wpp4.jpg')";
           desktop.style.backgroundSize = 'cover';
         }, 000);
       }
   
       if(input.value.includes("-w default5")){
         const desktop = document.getElementById('owner-user');
   
         setTimeout(() => {
           container.appendChild(returncommand);
           returncommand.returncommandclassvalue;
           returncommand.setAttributeNode(returncommandclass);
           returncommand.innerHTML = 'Setting wallpaper to ../../resources/images/background/wpp5.jpg...';
           desktop.style.backgroundColor = 'black';
           desktop.style.backgroundImage = "url('../../resources/images/background/wpp5.jpg')";
           desktop.style.backgroundSize = 'cover';
         }, 000);
       }
   
       if(input.value.includes("-w default6")){
         const desktop = document.getElementById('owner-user');
         
         setTimeout(() => {
           container.appendChild(returncommand);
           returncommand.returncommandclassvalue;
           returncommand.setAttributeNode(returncommandclass);
           returncommand.innerHTML = 'Setting wallpaper to ../../resources/images/background/wpp6.jpg...';
           desktop.style.backgroundColor = 'black';
           desktop.style.backgroundImage = "url('../../resources/images/background/wpp6.jpg')";
           desktop.style.backgroundSize = 'cover';
         }, 000);
       }
   
       if(input.value.includes("comp update")){
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
           container.appendChild(returncommand);
           returncommand.returncommandclassvalue;
           returncommand.setAttributeNode(returncommandclass);
           returncommand.innerHTML = '<span style="color: lightgreen;">The current compilation date is ' + compdays + compmonths[date.getMonth()] + compyear + comphours + compminutes + '</span>';
         }, 000);
       }
   
       container.appendChild(createtext);
       createtext.createtextclassvalue;
       createtext.setAttributeNode(createtextclass);
       createtext.innerHTML = '<span style="color: yellow;">' + (prompt.innerText) + '</span> ' + (input.value);
       input.value = '';
    }
   
    if(event.keyCode == 38) {
     input.value = lastcommand;
   }
})
