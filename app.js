var timer = 60;
var score = 0;
var hitrn = 0;
var audio = new Audio("audio.mp3")
// var overAudio = new Audio("over.mp3")


function makeBubbles() {
    var clutters = ""

    for (var a = 1; a < 2008; a++) {

        var rn = Math.floor(Math.random() * 10)
        clutters += ` <div class="bubbles">${rn}</div>`
    }
    document.getElementById('pannelbottom').innerHTML = clutters;

}



function getHit() {
    hitrn = Math.floor(Math.random() * 10)
    document.getElementById('hitval').textContent = hitrn;
}



function getScore() {

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }

    score += 10;
    document.getElementById('scoreval').textContent = score;
}



document.querySelector("#pannelbottom").addEventListener("click", function (detls) {


    var clickednum = Number(detls.target.textContent);

    if (clickednum === hitrn) {
        getScore()
        makeBubbles()
        getHit()
    }




})








function time() {


    var timeVal = setInterval(function () {


        if (timer > 0 ) {
            timer--;
            document.getElementById("timing").innerHTML = timer;
          


        }
        else {
            clearInterval(timeVal)
            // document.getElementById('pannelbottom').textContent = `Game over`
            document.getElementById('pannelbottom').innerHTML = ` <h1>  Your final score  </br> ${score} </h1> `


        }
        


    }, 1000)
}



time()
makeBubbles()
getHit()

