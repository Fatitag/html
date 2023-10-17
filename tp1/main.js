var i = 1;
var cpt = 1;
function slider()
{
    i++;
    var img = document.getElementById('img' + cpt).style.zIndex = i++ ;
    cpt++;
    if (cpt == 6){
        cpt = 1 ;
    }                 
}
setInterval(slider, 2000);

        
