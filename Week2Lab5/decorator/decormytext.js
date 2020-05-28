function clickButton() {
    const areaTex = document.getElementById("textid");
    const text = document.getElementById("butid");
    areaTex.innerHTML = areaTex.value;
    const fsize= window.getComputedStyle(areaTex,null).getPropertyValue('font-size');
    const style =parseFloat(fsize) * 0.75 + 2;
    areaTex.style.fontSize=style +"pt";
   

}
 var timeIn =null;
function callInterval(){
    if(timeIn ==null){
      timeIn = setInterval(clickButton,500);
    }
}
function checkBox() {
    const checkBx = document.getElementById("checkid");
    const areaTex = document.getElementById("textid");

    areaTex.innerHTML = areaTex.value;
    if (checkBx.checked == true) {
        areaTex.style.fontWeight = "bold";
        areaTex.style.color = "green";
        areaTex.style.textDecoration = "underline";
    }
    else {
        areaTex.style.fontWeight = "normal";
        areaTex.style.textDecoration= "none";
        areaTex.style.color ="black";

    }


    //alert(checkBx.value);

}

