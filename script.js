console.log("Hello");

//gameboard as object. Inside an array as the tic toc board

//players stored in objects

// Little global varialbles as possible

const gameBoard = () => {
  //the gameboard

  //let gameBrd = Array(9);

  //array with different nummbers so there wont be comparison conflicts
  let gameBrd = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  let CirclePlayer = document.querySelector(".CirHold");
  let CrossPlayer = document.querySelector(".XHold");
  let UwinMessageCircle = document.querySelector(".UWinCircle");
  let UwinMessageX = document.querySelector(".UWinX");

  let currentPlayer = 1;
  let currentRound = 1;

  //We need to initiate the first player

  const GameRound = (positionClick) => {
    if (currentPlayer == "1") {
      console.log("Im in player 1");

      CrossPlayer.style.display = "inline";
      CirclePlayer.style.display = "none";

      // players 1 is supposed to be circle. So we must pass o in the array at the specified position.

      //positionClick is the players selection location on the board. So we will take gameBrd, which is our gameboard in the form of an array.

      // We also need to add protection against a player selecting the an area that is already occupied.
      // So if the position is a null (empty). The player will be able to select that spot.

      gameBrd[positionClick] = "O";

      //we will place an O at the gameboard.
      const placingO = document.querySelector(`.butt${positionClick}`);

      placingO.textContent = "O";

      //we need to move to the 2nd player next turn so we end with +1. to change from player 1.
      currentPlayer++;
    } else if (currentPlayer == "2") {
      console.log("Im in player 2");

      CirclePlayer.style.display = "inline";
      CrossPlayer.style.display = "none";

      //players 2 supposed to be a cross(x). So we must pass x in the array at the specified position.

      // We also need to add protection against a player selecting the an area that is already occupied.
      // So if the position is a null (empty). The player will be able to select that spot.

      gameBrd[positionClick] = "X";

      //we will place an X at the gameboard.
      const placingX = document.querySelector(`.butt${positionClick}`);

      placingX.textContent = "X";

      //we need to jump to 1st player. so we do -1.
      currentPlayer--;
    }

    currentRound++;
  };

  //function that will check to see if a win condition has been met
  const checkforWin = () => {
    console.log("This is where we check to see if any player has won");

    //we will check our arrayGameboard and scan for win conditions. There will be 8 win conditions. We will hard-code these win conditions.
    //These hard coded win patterns will reflect what a horizontal, vertical, and cross, 3 in a role, on the game board.

    //Issue  with this code is that by default the gameBrd holds null at teh start. And when the equal comparisons are made. null == null == null will trigger a win
    //condition in our game. So inorder to solve this issue. I will fill the gameBrd array with different numbers so we wont get a false win condition. And since our gameboard
    //will work with char 'X' and 'O' there will be no comparison conflicts since numeric and alphabeticals are different.

    //we also have to look for a draw scenerio. Since we know that a draw game will happen when all places on the board are occupied
    //without 3 in a row condition. So if our gameround reaches 9(positions in gameboard) our game is a draw.

    if (!(currentRound == 10)) {
      if (gameBrd[0] == gameBrd[1] && gameBrd[1] == gameBrd[2]) {
        console.log("Did this trigger: Loc 1");

        console.log("Win!!! GAME");
        Wingame();
      } else if (gameBrd[3] == gameBrd[4] && gameBrd[4] == gameBrd[5]) {
        console.log("Did this trigger: Loc 2");
        console.log("Win!!! GAME");
        Wingame();
      } else if (gameBrd[6] == gameBrd[7] && gameBrd[7] == gameBrd[8]) {
        console.log("Win!!! GAME");
        Wingame();
      } else if (gameBrd[0] == gameBrd[3] && gameBrd[3] == gameBrd[6]) {
        console.log("Win!!! GAME");
        Wingame();
      } else if (gameBrd[1] == gameBrd[4] && gameBrd[4] == gameBrd[7]) {
        console.log("Win!!! GAME");
        Wingame();
      } else if (gameBrd[2] == gameBrd[5] && gameBrd[5] == gameBrd[8]) {
        console.log("Win!!! GAME");
        Wingame();
      } else if (gameBrd[0] == gameBrd[4] && gameBrd[4] == gameBrd[8]) {
        console.log("Win!!! GAME");
        Wingame();
      } else if (gameBrd[2] == gameBrd[4] && gameBrd[4] == gameBrd[6]) {
        console.log("Win!!! GAME");
        Wingame();
      }
    } else {
      console.log("Game is a draw!");
      drawGame();
    }
    console.log(gameBrd);
  };

  const Wingame = () => {
    // This is what needs to happen in a game win.
    // Declare a message on which player won.
    // Stop user from being able to click on game board.
    // Have reset option available.

    CirclePlayer.style.display = "none";
    CrossPlayer.style.display = "none";
    //UwinMessage.style.display = "inline";

    if (currentPlayer == 2) {
      UwinMessageCircle.style.display = "inline";
    } else if (currentPlayer == 1) {
      UwinMessageX.style.display = "inline";
    }

    //Now we must close gameboard
    const displayClose = document.querySelector(".TicTacToeContainer");
    displayClose.style.display = "none";
  };

  const drawGame = () => {
    // This are the conditions when we draw game
    CirclePlayer.style.display = "none";
    CrossPlayer.style.display = "none";

    //set Draw message.

    const drawMessage = document.querySelector(".DrawMsg");
    drawMessage.style.display = "inline";

    //Now we must close gameboard
    const displayClose = document.querySelector(".TicTacToeContainer");
    displayClose.style.display = "none";
  };

  //we will reset game ***need to work on this***
  const resetGame = () => {
    console.log("Reset GAME");
  };

  return { GameRound, checkforWin };
};

const Player = (name, playernum, markPosition) => {
  //set player name
  let tname = name;

  //player 1 or player 2?
  let player1or2 = playernum;

  // player mark
  this.markPosition = markPosition;

  //get mark
  const getMarkPos = () => {
    return markPosition;
  };

  //get player 1 or 2
  const getPlayer = () => {
    return player1or2;
  };

  return { getMarkPos, getPlayer, name };
};

const startGame = document.querySelector(".startButton");

startGame.addEventListener("click", begingame);

function begingame() {
  alert("starting game");
  const displayEna = document.querySelector(".TicTacToeContainer");

  let CirclePlayer = document.querySelector(".CirHold");
  CirclePlayer.style.display = "inline";
  //Previous the gameboard display is none. The next statement will enable the gameboard.
  displayEna.style.display = "grid";
}

const buttons = document.querySelectorAll(".but");

buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    //oof, made a bug. our button id's started with 1, instead of 0. This created an index missmatch. We corrected the ids in HTML page.
    alert(button.id);

    //we need place a safeguard so that a player will not select a spot on the board that is already taken.
    //SO we will select the button by id and see if text content is empty. If empty, the player can select that position. If not a console error will display
    //we might show an error message as well.
    const placing = document.querySelector(`.butt${button.id}`);

    if (placing.textContent == "") {
      // We will pass the position that is clicked on the board to the gameboard object  function,into the array.
      theMainGameBoard.GameRound(button.id);
      theMainGameBoard.checkforWin();
    } else {
      console.log("Sorry that spot is alreaddy taken.");
    }
  });
});

// this will be the index postion in our TicTokboard. When we click our eventHandler it will return its position clicked depending on location.
let boardPosition = null;

let theMainGameBoard = gameBoard();

let player1 = Player("tempName1", 1, boardPosition);
let player2 = Player("tempName1", 2, boardPosition);

//
