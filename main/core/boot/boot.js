$(document).ready(function () {
    setTimeout(function ()	  {
       $("body").append("<a class=kernel-prompt>#</a>").fadeIn();
    }, 1000);
 });

window.addEventListener('keyup', event => {
   let kernelterminal = document.getElementById("kernel-terminal");

   if(event.keyCode == 84, event.ctrlKey, event.altKey){
      window.stop();
      kernelterminal.readOnly = false;
      kernelterminal.value = '> ';
   }

   if(event.keyCode == 13){
      if(kernelterminal.value.includes("exit")){
         kernelterminal.value = (kernelterminal.value).toUpperCase() + '\n[EXIT] Exitting terminal...\n';
         location.reload();
      }

      if(kernelterminal.value.includes("info")){
         kernelterminal.value = (kernelterminal.value).toUpperCase() + '\n[OS INFO] Eclipse Cloud Operating System (ECOS), Codename Sunset\n[VERSION] 1.0.0, Build 1, 11/12/2021\n';
      }

      if(kernelterminal.value.includes("andre")){
         kernelterminal.value = (kernelterminal.value).toUpperCase() + '\n[~EUCLACIANO~]\n';
      }

      if(kernelterminal.value.includes("clear")){
         kernelterminal.value = '';
      }

      if(kernelterminal.value.includes("isworking")){
         kernelterminal.value = (kernelterminal.value).toUpperCase() + '\nyes\n';
      }

      if(kernelterminal.value.includes("uniaoss")){
         kernelterminal.value = (kernelterminal.value).toUpperCase() + '\na bond that will never be broken.\n';
      }

      if(kernelterminal.value.includes("jaco")){
         kernelterminal.value = (kernelterminal.value).toUpperCase() + '\nMaybe i am too lazy for it. Maybe it is just not my destiny.\n';
      }

      if(kernelterminal.value.includes("igorcareca")){
         kernelterminal.value = (kernelterminal.value).toUpperCase() + '\nRunning igorcareca.png...\n';
      }
      kernelterminal.value = (kernelterminal.value) + '> ';
   }
})

//   