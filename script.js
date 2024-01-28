const choices = document.querySelectorAll(".choice");
const playerscore = document.querySelector("#playerscore");

const compscore = document.querySelector("#compscore");
const msg = document.querySelector("#msg");
const reset=document.querySelector(".reset-btn");
let pscore = 0;
let cscore = 0;

const gameDraw = (compchoice) => {
  msg.innerText = ` C.P.U chose ${compchoice}.It is A Draw`;
  msg.style.backgroundColor = "brown";
};

const showWinner = (isUserwin, compchoice) => {
  if (isUserwin) {
    pscore++;
    playerscore.innerText = pscore;
    msg.innerText = `C.P.U Chose ${compchoice}. You Won!`;
    msg.style.backgroundColor = "green";
  } else {
    cscore++;
    compscore.innerText = cscore;
    msg.innerText = `C.P.U Chose ${compchoice}. You Lost!`;
    msg.style.backgroundColor = "red";
  }
};

const compplay = () => {
  const options = ["rock", "paper", "scissor"];
  const index = Math.floor(Math.random() * 3);
  return options[index];
};

const gameplay = (playerchoice) => {
  const compchoice = compplay();

  if (compchoice === playerchoice) {
    gameDraw(compchoice);
  } else {
    let isUserwin = false;

    if (playerchoice === "rock") {
      isUserwin = compchoice === "paper" ? false : true;
    } else if (playerchoice === "paper") {
      isUserwin = compchoice === "scissor" ? false : true;
    } else {
      isUserwin = compchoice === "rock" ? false : true;
    }

    showWinner(isUserwin, compchoice);
  }
};
//event for each choice
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const playerchoice = choice.getAttribute("id");

    gameplay(playerchoice);
  });
});
const resetGame = () => {
  console.log("reset");
  msg.innerText="Chose A option";
  msg.style.backgroundColor="black";
  playerscore.innerText="0";
  compscore.innerText="0";
  pscore=0;
  cscore=0;

  
};

reset.addEventListener("click",resetGame);