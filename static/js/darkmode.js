var titles=document.getElementsByClassName('darkmode')
var toggler = document.getElementById("theme-button")
var enable=false
if(toggler.classList.contains('bx-sun'))
{
    for (var i = 0; i < titles.length; i++) titles[i].style.color = "#C7D1CC";
    enable=true
}

toggler.addEventListener('click', ()=>{
    if(enable)
    {
        for(var i=0; i<titles.length; i++)
            titles[i].style.color = "#2c2c54";
        enable=false
    } else{
        for(var i=0; i<titles.length; i++)
            titles[i].style.color = "#C7D1CC";
        enable=true
    }
})