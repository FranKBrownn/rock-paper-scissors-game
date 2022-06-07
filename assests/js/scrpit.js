function loseLife(){
let lives = parseInt(document.getElementById("player-lives").innerText)

 if (lives > 1) {
       document.getElementById("player-lives").innerText = --lives;
} else{document.getElementById("player-lives").innerText = --lives;
    alert("GAME OVER!!!!!! Better luck next time")
    playAgain()
}
}
function aiLoseLife(){
    let lives = parseInt(document.getElementById("ai-lives").innerText)

 if (lives > 1) {
    document.getElementById("ai-lives").innerText = --lives;
} else{
    document.getElementById("ai-lives").innerText = --lives;
    alert("CONGRATULATIONS!!!!!! you beat the AI. want to try again")
    playAgain()
}

}

function playAgain(){
    let playerlives = document.getElementById("player-lives").innerText
    let ailives = (document.getElementById("ai-lives").innerText)
    if (playerlives < 3){
        document.getElementById("player-lives").innerText = ++playerlives;
        
    } if (ailives < 3){
        document.getElementById("ai-lives").innerText = ++ailives
        playAgain()
    }
        
    
}  

function rockPlayed(){
    let aimove = Math.floor(Math.random()*3) 
    if (aimove === 0){
        alert ("rock was played. No lives lost")
    } else if(aimove === 1){
        alert("paper was played. You lose 1 life")
        loseLife()
    } else if (aimove === 2){
        alert("scissors was played. The AI loses a life")
        aiLoseLife()
    } 

}
function paperPlayed(){
    let aimove = Math.floor(Math.random()*3) 
    if (aimove === 0){
        alert ("rock was played. The AI loses a life")
        aiLoseLife()
    } else if(aimove === 1){
        alert("paper was played. No lives lost")
    } else if (aimove === 2){
        alert("scissors was played. You lose a life")
        loseLife()
    } 
    
}

function scissorPlayed(){
    let aimove = Math.floor(Math.random()*3) 
    if (aimove === 0){
        alert ("rock was played. You lose a life")
        loseLife()
    } else if(aimove === 1){
        alert("paper was played. AI loses a life")
        aiLoseLife()
    } else if (aimove === 2){
        alert("scissors was played. No Lives Lost")
        
    } 
}