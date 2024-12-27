exports._check = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Arguments must be numbers');
  }
};

exports.add = (a, b) => {
  exports._check(a, b);
  return a + b;
};

exports.subtract = (a, b) => {
  exports._check(a, b);
  return a - b;
};

exports.multiply = (a, b) => {
  exports._check(a, b);
  return a * b;
};

exports.divide = (a, b) => {
  exports._check(a, b);
  if (b === 0) throw new Error('Cannot divide by zero');
  return a / b;
};

module.exports = exports;
