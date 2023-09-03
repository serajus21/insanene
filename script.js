// nav hide & show onclick menuIcon
function show()
{
    document.getElementById('showMenu').style.display="none";
    document.getElementById('hideMenu').style.display="inline-block";
    document.getElementById('nav').style.left="0px";
    document.getElementById('nav').style.transition = "all 1s ease";
}
function hide()
{
    document.getElementById('showMenu').style.display="inline-block";
    document.getElementById('hideMenu').style.display="none";
    document.getElementById('nav').style.left="-100%";
    document.getElementById('nav').style.transition = "all 1s ease";  
}