// Coding standard for this project defined @ https://github.com/MatthewSH/standards/blob/master/JavaScript.md
const $terminal = require('./terminal');
var terminal    = new $terminal();

var Board = function Board () {
  this.board = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1]
  ];
}

Board.prototype.isSpaceOpen = function (_row, _column) {
  return (this.board[_row][_column] == -1);
};

Board.prototype.display = function DisplayBoard () {
  terminal.out('-------------');
  for (var row = 0; row < this.board.length; row++) {
    var rowOut = [];
    for(var col = 0; col < this.board[row].length; col++) {
      if (col == 0) {
        rowOut[col] = '| ' + getColumnType(this.board[row][col]) + ' ';
      } else if (col == this.board[row].length - 1) {
        rowOut[col] = ' ' + getColumnType(this.board[row][col]) + ' |';
      } else {
        rowOut[col] = '| ' + getColumnType(this.board[row][col]) + ' |';
      }
    }
    terminal.out(rowOut[0] + rowOut[1] + rowOut[2]);
  }
  terminal.out('-------------');
};

Board.prototype.makeMove = function (_row, _column, _player, _callback) {
  if(isNaN(_player)) {
    throw new Error('The player parameter must be either 0 or 1');
  }
  if(this.isSpaceOpen(_row, _column)) {
    this.board[_row][_column] = (_player === 1) ? 1 : 0;
    return _callback(null);
  } else {
    return _callback({
      code: 21,
      message: 'The space you requested is not available.'
    });
  }
};

Board.prototype.checkForWin = function () {
  return (this.checkRowsForWin() || this.checkColumnsForWin() || this.checkDiagonalsForWin());
};

Board.prototype.checkRowsForWin = function () {
  for (var i = 0; i < 3; i++) {
    if (this.checkRowCol(this.board[i][0], this.board[i][1], this.board[i][2])) {
      return true;
    }
  }
  return false;
};

Board.prototype.checkColumnsForWin = function () {
  for (var i = 0; i < 3; i++) {
    if (this.checkRowCol(this.board[0][i], this.board[1][i], this.board[2][i])) {
      return true;
    }
  }
  return false;
};

Board.prototype.checkDiagonalsForWin = function () {
  return ((this.checkRowCol(this.board[0][0], this.board[1][1], this.board[2][2])) || (this.checkRowCol(this.board[0][2], this.board[1][1], this.board[2][0])));
};

Board.prototype.checkRowCol = function (_char1, _char2, _char3) {
  return ((_char1 !== -1) && (_char1 === _char2) && (_char2 === _char3));
};

// Local Functions
function getColumnType (_input) {
  switch(_input) {
    case 0:
      return 'o';
      break;
    case 1:
      return 'x';
      break;
    default:
      return ' ';
      break;
  }
}

exports = module.exports = Board;
