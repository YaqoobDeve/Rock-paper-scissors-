let user = 0;
let comp = 0;
const compscore = document.querySelector("#compscore")
const userscore = document.querySelector("#userscore")
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const gencompchoice =()=>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx]
}

const drawgame = ()=>{
    console.log("the game is draw");
    msg.innerText="Draw Game Play Again"
    msg.style.backgroundColor="pink"

}

const showwinner = (userwin,userChoice,compChoice) =>{
    if(userwin){
        console.log("you win!");
        msg.innerText = `You Won! ${userChoice} beats ${compChoice} `
        user++;
        console.log(user)
        userscore.innerText=`${user}`
        msg.style.backgroundColor="green"
    }else{
        console.log("you lose")
        msg.innerText = `You Loss ${compChoice} beats ${userChoice}`
        comp++;
        compscore.innerText=`${comp}`
        msg.style.backgroundColor="red"

    }
}
const playgame = (userChoice)=>{
    console.log("userChoice =",userChoice)
    const compChoice = gencompchoice();
    console.log("xomputer choices =",compChoice)
    if(userChoice===compChoice){
        drawgame();
    }else{
        let userwin = true;
        if(userChoice === "rock"){
           userwin = compChoice === "paper"? false:true
        }else if(userChoice=== "paper"){
            userwin = compChoice === "scissors" ? false:true;
        }else {
            userwin = compChoice === "rock" ? false:true;
        }
        showwinner(userwin,userChoice,compChoice);
    }
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        playgame(userChoice);
    })
})

