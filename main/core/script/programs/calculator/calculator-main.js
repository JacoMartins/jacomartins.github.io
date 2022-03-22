// Calculator Program - Main Code

var calculatorrestoreheight;
var calculatorrestorewidth;
var calculatorrestoretop;
var calculatorrestoreleft;
var calculatorwindowopen = false;

function callcalculatorscripts(){
    var appname = 'calculator';
    createDOMScript(`${appname}-startstop`, 'text/javascript', '../script/programs/calculator/bin/window/startstop.js');
    createDOMScript(`${appname}-window-functions`, 'text/javascript', '../script/programs/calculator/bin/window/window-functions.js');
    createDOMScript(`${appname}-core`, 'text/javascript', '../script/programs/calculator/bin/calculator-core.js');
}

callcalculatorscripts();