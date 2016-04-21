// Coding standard for this project defined @ https://github.com/MatthewSH/standards/blob/master/JavaScript.md
const $ai       = require('./lib/ai');
const $board    = require('./lib/board');
const $helpers  = require('./lib/helpers');
const $player   = require('./lib/player');
const $terminal = require('./lib/terminal');

// Create new instances of each module.
var Board     = new $board();
var Computer  = new $ai();
var Terminal  = new $terminal();

// Reserve player variable. Initiated in CreatePlayer().
var Player;

// Start game.
FirstRun();

// Application Functions
function FirstRun () {
  Terminal.out('== Tic-Tac-Toe ==');
  Terminal.break();
  Terminal.out('Welcome to Tic-Tac-Toe, written by me (http://matthewh.in).');
  Terminal.out('You can find the source on GitHub: https://github.com/MatthewSH/TTT-JS');
  Terminal.break();
  Terminal.in('Would you like to play a new game? (yes/no)', function(error, response) {
    if(error) {
      throw new Error(error);
    }

    switch(response.toLowerCase()) {
      case 'yes': case 'y':
        Terminal.break();
        CreatePlayer();
        break;
      case 'no': case 'n':
        Terminal.break();
        Terminal.out('Very well then.');
        process.exit(1);
        break;
      default:
        break;
    }
  });
}

function CreatePlayer () {
  Terminal.in('Now, what the hell do I call you?', function(error, response) {
    if(error) {
      throw new Error(error);
    }

    Player = new $player(response);
    InitiateGame();
  });
}

function InitiateGame () {
  Terminal.break();
  Terminal.out('Thanks. Shall we get started?');
  Terminal.break();
  Terminal.out('Here\'s the board as of now:');
  Board.display();
  Terminal.break();

  // Make decision on who goes first.
  var choice = $helpers.random(10, true);
  if(choice <= 5) {
    // Player goes first.
    switchTurn(1);
  } else {
    // Computer goes first.
    Terminal.out(Computer.getName() + ' goes first.');
    switchTurn(0);
  }
}

function switchTurn(nextPlayer) {
  // 0 - Computer
  // 1 - Player
  if(isNaN(nextPlayer)) {
    throw new Error('nextPlayer must be a number.');
  }

  if(!Board.checkForWin()) {
    if(nextPlayer == 0) {
      Computer.makeMove(Board, function(error) {
        if(error) {
          throw new Error(error);
        }
        Board.display();
        Terminal.out('------------------------');
        Terminal.break();
        switchTurn(1);
      });
    } else if(nextPlayer == 1) {
      Player.makeMove(Board, function(error) {
        if(error) {
          throw new Error(error);
        }
        Board.display();
        Terminal.out('------------------------');
        Terminal.break();
        switchTurn(0);
      });
    }
  } else {
    Terminal.break();
    Terminal.out('Game over.');
  }
}
