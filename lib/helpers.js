// Coding standard for this project defined @ https://github.com/MatthewSH/standards/blob/master/JavaScript.md
exports = module.exports;

exports.random = function RandomNumber (max, floor) {
  if(isNaN(max)) {
    throw new Error('The max parameter must be a number.');
  }
  if(max <= 0) {
    throw new Errr('The max parameter must be greater than 0');
  }
  if(typeof floor != 'boolean') {
    throw new Error('The floor parameter must be true or false.');
  }

  if(floor) {
    return Math.floor(Math.random() * max);
  } else {
    return (Math.random() * max);
  }
}

exports.randomName = function RandomName () {
  // TODO: Add name generation.
  return 'Albert';
};
