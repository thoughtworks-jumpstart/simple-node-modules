exports.add = function(number1, number2) {
  return number1 + number2;
};

console.log(exports === module.exports);
console.log(exports.add === module.exports.add);
