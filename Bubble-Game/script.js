
let bubbles = "";


for ( let i =0; i<=174; i++){
    let randomBubbleNumber = Math.floor(Math.random() * 10);
    bubbles += `<div class="bubble">${randomBubbleNumber}</div>`;

}

document.querySelector("#bottomPanel").innerHTML = bubbles;