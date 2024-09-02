function button2() {
    let backColor1 = document.getElementById("formFile1").value;
    cngbutton.style.backgroundColor = backColor1;

    let fontClr = document.getElementById("fColor").value;
    cngbutton.style.color = fontClr;

    let fontsize  =  parseInt (document.getElementById("fsize").value)+"px";
    cngbutton.style.fontSize = fontsize;
    
    let btnmgn  =  parseInt (document.getElementById("mrg").value)+"px";
    cngbutton.style.margin = btnmgn;

    let btpadding  =  (document.getElementById("pdd").value)+"px";
    cngbutton.style.padding = btpadding;

    let  btrd = parseInt( document.getElementById("redius").value)+"px";
    cngbutton.style.borderRadius = btrd;
}