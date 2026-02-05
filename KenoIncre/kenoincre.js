// ==== INITIALISATION + GENERATION OF STUFF ====
document.addEventListener("DOMContentLoaded", initialise);

function initialise() {
  loadGame();
  generateGrid(boardSize);
  attachListeners();
  updateMoneyDisplay();
}

function generateGrid(boardSize) {
  let table = document.getElementById("table");
  table.innerHTML = "";

  for (let i = 1; i <= boardSize; i++) {
    const td = document.createElement("div");
    // const td = document.createElement("td")
    td.className = "cell";
    td.id = "cell" + i;
    td.textContent = i;
    table.appendChild(td);
  }
  enableInputs();
}

// ==== GAME STATE ====
// Keeps all status. Read and write to this, calculate based on this
const gameState = {
  currency: {
    money: 10000,
    prestige: 0,
  },

  upgrades: {
    autoPlay: false,
    //   autoPick: false,
    fasterDraw: 0, // level, not ms
    //   fasterRounds: 0,  // level
    //    ballsDrawn: 10,    // starts at 10, upgrades increase
    boardSize: 80,
  },

  //  stats: {
  //     totalRounds: 0,
  //    totalWins: 0,
  //  }
};
