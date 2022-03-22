// Calculator Program - Core Code

function calculatorinsert(x, input = document.getElementById("calculator-window-content-input-text1")) {
    input.value = input.value + x; 
  }
  
  var calculatorpar = false;
  
  function calculatorinsertorg(input = document.getElementById("calculator-window-content-input-text1")) {
    if (input.value.includes('(') && calculatorpar === true){
      input.value = input.value + ')';
      calculatorpar = false;
    } else if (calculatorpar === false) {
      if (calculatorpar === false) {
        input.value = input.value + '(';
        calculatorpar = true;
      } else {
        input.value = input.value + ')';
        calculatorpar = false;
      }
    }
  }
  
  function calculatordelete(x, input = document.getElementById("calculator-window-content-input-text1")) {
    input.value = input.value.slice(0, x); 
  }
  
  function calculatorclear(input = document.getElementById("calculator-window-content-input-text1")) {
    input.value = input.value.substr(0, -1); 
  }
  
  function calculatorequal(x, input = document.getElementById("calculator-window-content-input-text1")) {
    input.value = eval(input.value); 
  }
  
  
  window.onload = function(){
    document.getElementById("calculator-window-content-input-text1").addEventListener("keydown", function (){
      if(event.keyCode == 13){
        calculatorequal();
      }
    });
  }