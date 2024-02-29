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

function makeNewHit(){
    let hitVal = 0;
    hitVal = Math.floor(Math.random() * 10);
    document.getElementById("hitVal").innerHTML = hitVal;
    // document.querySelector("#hitVal").innerHTML = hitVal;
}

makeBubbles();
makeNewHit();
makeNewHit();
makeNewHit();