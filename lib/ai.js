// Coding standard for this project defined @ https://github.com/MatthewSH/standards/blob/master/JavaScript.md
const $helpers  = require('./helpers');
const $terminal = require('./terminal');
var terminal    = new $terminal();

var AI = function AI () {
  this.name = $helpers.randomName();
}

AI.prototype.getName = function () {
  return this.name;
};

AI.prototype.makeMove = function (_board, _callback) {
  var row = $helpers.random(3, true);
  var column = $helpers.random(3, true);
  do {
    row = $helpers.random(3, true);
    column = $helpers.random(3, true);
  } while (!_board.isSpaceOpen(row, column));
  terminal.out(this.name + ' is choosing a spot.');
  setTimeout(function () {
    _board.makeMove(row, column, 0, function(error) {
      if(error) {
        throw new Error(error);
      }
      return _callback(null);
    });
  }, (Math.floor(Math.random() * 11) * 1000));
};

exports = module.exports = AI;
