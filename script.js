const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(event){
    jump();
});
// function jump
function jump(){
    if (dino.classList != "jump"){
        dino.classList.add("jump")
    }
    setTimeout(function(){
        dino.classList.remove("jump")
    }, 300)
}
// Game Over
let isAlive = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140){
        alert("Game Over!")
    }
}, 10)

// Логика общего счета
const scoreElement = document.getElementById('score')

let score = 0;

document.addEventListener('keydown',function(event){
    if (event.code === 'Space'){
        increaseScore();
    }
});
function increaseScore(){
    score++;
    scoreElement.textContent = score;
}
