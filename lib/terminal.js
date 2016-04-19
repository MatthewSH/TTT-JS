// Coding standard for this project defined @ https://github.com/MatthewSH/standards/blob/master/JavaScript.md
const readline = require('readline');

var Terminal = function Terminal () {};

Terminal.prototype.break = function () {
  console.log('\n');
};

Terminal.prototype.in = function Input (_question, _callback) {
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question(_question + '\n', function UserInput (response) {
    rl.close();
    return _callback(null, response);
  });
};

Terminal.prototype.out = function Output (_message) {
  console.log(_message);
  // TODO: Add loop to replace all the %s with the arguments passed through
  //console.log(arguments);
};

exports = module.exports = Terminal;
