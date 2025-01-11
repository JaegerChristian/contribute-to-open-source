exports._check = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }
};

exports.add = (a, b) => {
  exports._check(a, b); // Validate arguments
  return a + b;
};

exports.subtract = (a, b) => {
  exports._check(a, b); // Validate arguments
  return a - b;
};

exports.multiply = (a, b) => {
  exports._check(a, b); // Validate arguments
  return a * b;
};

exports.divide = (a, b) => {
  exports._check(a, b); // Validate arguments
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
};

module.exports = exports;
