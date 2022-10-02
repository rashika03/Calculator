let screen=document.getElementById("screen");
screen.addEventListener('keypress',function (e){
    e.preventDefault();
    return false;
})
let screenval="";
let btn=document.querySelectorAll("button")
for(items of btn){
items.addEventListener('click',function(e)
{
    buttontxt=e.target.innerText;
    if(buttontxt=='x')
    {
        buttontxt='*';
        screenval=screenval+buttontxt;
        screen.value=screenval;
    }
    else if(buttontxt=='C')
    { screenval=""
        screen.value="";
    }
    else
        if(buttontxt =='=')
        {
            screen.value=eval(screenval);
        }
    
    else{
        screenval=screenval+buttontxt;
        screen.value=screenval
    }
})
}