function menutrigger(menumain = document.getElementById('desktop-menu-main')){
    if(menumain.style.display === "none"){
        menumain.style.display = "block";
    } else {
        menumain.style.display = "none";
    }
}