const box1 = document.querySelector("div.board div:nth-child(1)");
const box2 = document.querySelector("div.board div:nth-child(2)");
const box3 = document.querySelector("div.board div:nth-child(3)");
const box4 = document.querySelector("div.board div:nth-child(4)");
const box5 = document.querySelector("div.board div:nth-child(5)");
const box6 = document.querySelector("div.board div:nth-child(6)");
const box7 = document.querySelector("div.board div:nth-child(7)");
const box8 = document.querySelector("div.board div:nth-child(8)");
const box9 = document.querySelector("div.board div:nth-child(9)");

let player = "X";

const switchPlayer = () => {player = player === "X" ? "O" : "X";}

const gameWinner = () => {
  return (
    // Completing a row
    (box1.textContent !== "" &&
      box1.textContent === box2.textContent &&
      box2.textContent === box3.textContent) ||
    (box4.textContent !== "" &&
      box4.textContent === box5.textContent &&
      box5.textContent === box6.textContent) ||
    (box7.textContent !== "" &&
      box7.textContent === box8.textContent &&
      box8.textContent === box9.textContent) ||
    // Completing a column
    (box1.textContent !== "" &&
      box1.textContent === box4.textContent &&
      box4.textContent === box7.textContent) ||
    (box2.textContent !== "" &&
      box2.textContent === box5.textContent &&
      box5.textContent === box8.textContent) ||
    (box3.textContent !== "" &&
      box3.textContent === box6.textContent &&
      box6.textContent === box9.textContent) ||
    // Completing a diagonal
    (box1.textContent !== "" &&
      box1.textContent === box5.textContent &&
      box5.textContent === box9.textContent) ||
    (box3.textContent !== "" &&
      box3.textContent === box5.textContent &&
      box5.textContent === box7.textContent)
  );
};

const tieGame = () => {
  return (
    box1.textContent &&
    box2.textContent &&
    box3.textContent &&
    box4.textContent &&
    box5.textContent &&
    box6.textContent &&
    box7.textContent &&
    box8.textContent &&
    box9.textContent
  );
};

const handleClick = (div) => {
  if (!div.textContent && player !== "") {
    div.textContent = player;
    switchPlayer();
  }
  const isWinner = gameWinner();
  const isTie = tieGame();

  console.log(isTie);

  if (isWinner) {
    switchPlayer();
    document.querySelector("h1.winner").textContent = `Player ${player} won!`;
    player = "";
  }

  else if (isTie) {
    document.querySelector("h1.winner").textContent = "Tie Game!";
  }
};
box1.onclick = () => {
  handleClick(box1);
};
box2.onclick = () => {
  handleClick(box2);
};
box3.onclick = () => {
  handleClick(box3);
};
box4.onclick = () => {
  handleClick(box4);
};
box5.onclick = () => {
  handleClick(box5);
};
box6.onclick = () => {
  handleClick(box6);
};
box7.onclick = () => {
  handleClick(box7);
};
box8.onclick = () => {
  handleClick(box8);
};
box9.onclick = () => {
  handleClick(box9);
};

document.querySelector('button').onclick = ()=>{location.reload()};