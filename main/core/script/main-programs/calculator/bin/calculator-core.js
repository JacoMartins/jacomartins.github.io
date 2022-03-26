// Calculator Program - Core Code

function calculatorInsert(x, input) {
  var inpt = document.getElementById(input);

  inpt.value = inpt.value + x;
}

var calculatorpar = false;

function calculatorInsertOrg(input) {
  var inpt = document.getElementById(input);

  if (inpt.value.includes('(') && calculatorpar === true) {
    inpt.value = inpt.value + ')';
    calculatorpar = false;
  } else if (calculatorpar === false) {
    if (calculatorpar === false) {
      inpt.value = inpt.value + '(';
      calculatorpar = true;
    } else {
      inpt.value = inpt.value + ')';
      calculatorpar = false;
    }
  }
}

function calculatorDelete(x, input) {
  var inpt = document.getElementById(input);

  inpt.value = inpt.value.slice(0, x);
}

function calculatorClear(input) {
  var inpt = document.getElementById(input);

  inpt.value = inpt.value.substr(0, -1);
}

function calculatorEqual(x, input) {
  var inpt = document.getElementById(input);

  inpt.value = eval(inpt.value);
}

function inputCalculatorEqual(input) {
  if (event.keyCode == 13) {
    calculatorequal('' ,input);
  }
}