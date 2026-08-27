import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css'
})
export class Calculator {
  displayValue: string = '0';

  appendNum(num: string) {
    if (this.displayValue === '0' && num !== '.') {
      this.displayValue = num;
    } else {
      this.displayValue += num;
    }
  }

  appendOp(op: string) {
    const lastChar = this.displayValue.slice(-1);
    if (['+', '-', '*', '/', '%'].includes(lastChar)) {
      this.displayValue = this.displayValue.slice(0, -1) + op;
    } else {
      this.displayValue += op;
    }
  }

  clear() {
    this.displayValue = '0';
  }

  delete() {
    if (this.displayValue.length > 1) {
      this.displayValue = this.displayValue.slice(0, -1);
    } else {
      this.displayValue = '0';
    }
  }

  calculate() {
    try {
      this.displayValue = eval(this.displayValue).toString();
    } catch {
      this.displayValue = 'Error';
    }
  }
}