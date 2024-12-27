exports._check = function(a,b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Arguments must be numbers');
  }
};

exports.add = function (a, b) {
  exports._check(a, b);
  return a + b;
};

exports.subtract = function (a, b) {
  exports._check(a, b);
  return a - b;
};

exports.multiply = function (a, b) {
  exports._check(a, b);
  return a * b;
};

exports.divide = function (a, b) {
  exports._check(a, b);
  if (b === 0) throw new Error('Cannot divide by zero');
  return a / b;
};


module.exports = exports;
