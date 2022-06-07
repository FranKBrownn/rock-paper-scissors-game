document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

   for (let button of buttons){
       button.addEventListener("click" , function(){
        if (this.getAttribute("data-type") === "reset"){
            playAgain()
        } else{ 
            runGame()
        } 
        
        
       })

   }

           
       runGame()
        
        
})


function runGame(){
    
   } 

    
   function aiPickObject(){
    
    
}

function loseLife(){
console.log("you lose a life")
}

function aiLoseLife(){
    console.log("AI lose a life")

}

function playAgain(){

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