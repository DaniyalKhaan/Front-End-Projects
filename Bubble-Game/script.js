function makeBubbles(){
    let hit = Math.floor(Math.random() * 10);
let bubbles = "";


for ( let i =0; i<=174; i++){
    let randomBubbleNumber = Math.floor(Math.random() * 10);
    bubbles += `<div class="bubble">${randomBubbleNumber}</div>`;

}

document.querySelector("#bottomPanel").innerHTML = bubbles;
document.getElementsByClassName("box").innerHTML = hit;


document.querySelector(".bubble").onClick = function (){
    console.log("You are going wright");
}
}
let hitVal = 0;
function makeNewHit(){
    hitVal = Math.floor(Math.random() * 10);
    document.getElementById("hitVal").textContent = hitVal;
    // document.querySelector("#hitVal").innerHTML = hitVal;
}

function runTimer (){
    let timer = 3;
    let timerInterval = setInterval(function(){
        if (timer > 0){
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        } else {
            clearInterval(timerInterval);
        }
    }, 1000)
}



let score = 0;
function increaseScore () {
    document.getElementById("bottomPanel")
    .addEventListener("click", function(details){
       let bubbleClicked = Number(details.target.textContent);
       if (hitVal == bubbleClicked){
        score += 10;
        document.getElementById("scoreVal").textContent = score;
       }
    })
}



runTimer();
makeBubbles();
makeNewHit();
makeNewHit();
makeNewHit();
increaseScore();
