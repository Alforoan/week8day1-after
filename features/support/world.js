import { setWorldConstructor } from '@cucumber/cucumber'

class CustomWorld {
  constructor() {
    this.firstOperand = '';
    this.secondOperand = '';
    this.result = '';
  }

  setFirstOperand(number) {
    this.firstOperand = number;
  }

  addTo(operand) {
    this.secondOperand = operand;
    this.result = 'II';
  }
}

setWorldConstructor(CustomWorld);
