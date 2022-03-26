function calculatorResizeWindow(id) {
  var wd = document.getElementById(id);

  if (wd.style.width === '100%') {
    wd.style.width = calculatorrestorewidth;
		wd.style.height = calculatorrestoreheight;
    wd.style.left = calculatorrestoreleft;
    wd.style.top = calculatorrestoretop;
    wd.style.resize = "both";
    wd.style.borderRadius = "4px";
    wd.style.animation = 'maximizewindow 0.25s';
    wd.style.transition = "0.15s";
    setTimeout(function () {
      wd.style.transition = "none";
    }, 150)
  } else {
    calculatorrestorewidth = wd.style.width;
    calculatorrestoreheight = wd.style.height;
    calculatorrestoreleft = wd.style.left;
    calculatorrestoretop = wd.style.top;
    wd.style.width = '100%';
    wd.style.height = 'calc(100% - 40px)';
    wd.style.top = "40px";
    wd.style.left = "0px";
    wd.style.resize = "none";
    wd.style.borderRadius = "0px";
    wd.style.transition = "0.15s";
    setTimeout(function () {
      wd.style.transition = "none";
    }, 150)
  }
}