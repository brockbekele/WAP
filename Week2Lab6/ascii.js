
(function () {
    "use strict";

    const playButton = document.getElementById("play");
    const stopButton = document.getElementById("stop");
    const anim = document.getElementById("animation_tp");
    let timer = null;
    let framePl;
    window.onload = function () {
        document.getElementById("animation_tp").onchange = animationSelect;
        document.getElementById("sizeid").onchange = changeText;
        document.getElementById("play").onclick = playAnimation;
        document.getElementById("stop").onclick = stopAnimate;
    };
    function animationSelect() {

        let selected = anim.options[anim.selectedIndex].value;
        let valueselect = anim.options[anim.selectedIndex].text;
        let viewText = document.getElementById("textbox");

        viewText.innerHTML = ANIMATIONS[selected];

    }
    function changeText() {
        const chtxt = document.getElementById("sizeid");
        let valchtxt = chtxt.options[chtxt.selectedIndex].value;
        const textsize = document.getElementById("textbox");
        textsize.style.fontSize = valchtxt;

    }

    function playAnimation() {

        let valAnimtype = anim.options[anim.selectedIndex].text;
        if (valAnimtype != "Blank") {
            console.log(valAnimtype);
            playButton.disabled = true;
            stopButton.disabled = false;
            anim.disabled = true;
            framePl = ANIMATIONS[valAnimtype].split("=====\n");
            let millsec;
            if (document.getElementById("speedselc").checked) {
                millsec = 50;
            } else {
                millsec = 250;
            }
            timer = setInterval(functime, millsec);
        }
    }

    function functime() {
        const fm = framePl.shift();
        let viewText = document.getElementById("textbox");
        viewText.innerHTML = fm;
        framePl.push(fm);
    }

    function stopAnimate() {
        clearInterval(timer);
        animationSelect();
        stopButton.disabled = true;
        playButton.disabled = false;
        anim.disabled = false;

    }





})();