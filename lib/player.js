// Coding standard for this project defined @ https://github.com/MatthewSH/standards/blob/master/JavaScript.md
const $terminal = require('./terminal');
var terminal    = new $terminal();

var Player = function Player (_name) {
  this.name = _name;
}

Player.prototype.makeMove = function (_board, _callback) {
  var messageTemplate = 'Here are the following open spaces: ';
  var message = messageTemplate;
  var space = 1;
  for(var row = 0; row < _board['board'].length; row++) {
    for(var col = 0; col < _board['board'][row].length; col++) {
      if (_board.isSpaceOpen(row, col)) {
        if(row === (_board['board'].length - 1) && col === (_board['board'][row].length - 1)) {
          message += space + '';
        } else {
          message += space + ', ';
        }
      }
      space++;
    }
  }
  terminal.out((message === messageTemplate) ? 'No more spaces are availabled. Tie?' : message);
  terminal.break();
  terminal.in('What space would you like to take?', function(error, response) {
    if (error) {
      throw new Error(error);
    }
    switch(response) {
      case '1':
       _board.makeMove(0, 0, 1, function(error) {
         if(error) {
           throw new Error(error);
         }
         return _callback(null);
       });
      break;
      case '2':
       _board.makeMove(0, 1, 1, function(error) {
         if(error) {
           throw new Error(error);
         }
         return _callback(null);
       });
      break;
      case '3':
       _board.makeMove(0, 2, 1, function(error) {
         if(error) {
           throw new Error(error);
         }
         return _callback(null);
       });
      break;
      case '4':
       _board.makeMove(1, 0, 1, function(error) {
         if(error) {
           throw new Error(error);
         }
         return _callback(null);
       });
      break;
      case '5':
       _board.makeMove(1, 1, 1, function(error) {
         if(error) {
           throw new Error(error);
         }
         return _callback(null);
       });
      break;
      case '6':
       _board.makeMove(1, 2, 1, function(error) {
         if(error) {
           throw new Error(error);
         }
         return _callback(null);
       });
      break;
      case '7':
       _board.makeMove(2, 0, 1, function(error) {
         if(error) {
           throw new Error(error);
         }
         return _callback(null);
       });
      break;
      case '8':
       _board.makeMove(2, 1, 1, function(error) {
         if(error) {
           throw new Error(error);
         }
         return _callback(null);
       });
      break;
      case '9':
       _board.makeMove(2, 2, 1, function(error) {
         if(error) {
           throw new Error(error);
         }
         return _callback(null);
       });
      break;
    }
  });
};

exports = module.exports = Player;
