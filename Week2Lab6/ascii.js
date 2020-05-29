
(function () {
    "use strict";

    const playButton = document.getElementById("play");
    const stopButton = document.getElementById("stop");
    const anim = document.getElementById("animation_tp");
    const turboSelector = document.getElementById("speedselc");
    let speed = 250;
    let timer = null;
    let framePl;
    window.onload = function () {
        document.getElementById("animation_tp").onchange = animationSelect;
        document.getElementById("sizeid").onchange = changeText;
        document.getElementById("play").onclick = playAnimation;
        document.getElementById("stop").onclick = stopAnimate;
        turboSelector.onchange = speedoSelect;
    };
    function animationSelect() {

        let selected = anim.options[anim.selectedIndex].value;
        let valueselect = anim.options[anim.selectedIndex].text;
        let viewText = document.getElementById("textbox");

        viewText.innerHTML = ANIMATIONS[selected];

    }
    function speedoSelect() {
        if (turboSelector.checked) {
            speed = 50;
        }
        else {
            speed = 250;
        }
        if (!stopButton.disabled) {
            clearInterval(timer);
            timer = setInterval(functime, speed);
        }
    };

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
            timer = setInterval(functime, speed);
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