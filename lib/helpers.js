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
  var names = ['Rudolph', 'Reginald', 'Kenneth', 'Galen', 'Margarito', 'Wayne', 'Porter', 'Ernest', 'Fabian', 'Moises', 'Titus', 'Harold', 'Paul', 'Abraham', 'Zack', 'Kristopher', 'Leland', 'Johnnie', 'Kory', 'Judson', 'Omar', 'Micah', 'Darell', 'Joshua', 'Carlos', 'Michael', 'Curtis', 'Leopoldo', 'Jordan', 'Daniel', 'Earl', 'Dean', 'Arlen', 'Darius', 'Quinton', 'Eddie', 'Wilford', 'Terence', 'Jeffrey', 'Alfredo', 'Nicolas', 'Dwain', 'Chong', 'Craig', 'Mariano', 'Thaddeus', 'Eugene', 'Owen', 'Quintin', 'Jan'];
  return names[this.random(names.length, true)];
};
