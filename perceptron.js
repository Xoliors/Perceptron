// perceptron.js
class Perceptron {
  constructor(weights, bias) {
    this.weights = weights;
    this.bias = bias;
  }

  activate(inputs) {
    if (inputs.length !== this.weights.length) {
      throw new Error('Invalid number of inputs');
    }

    let sum = 0;
    for (let i = 0; i < inputs.length; i++) {
      sum += inputs[i] * this.weights[i];
    }
    sum += this.bias;

    return sum >= 0 ? 1 : 0;
  }
}

module.exports = Perceptron;
