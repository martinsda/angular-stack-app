import { Component } from '@angular/core';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent {
  stack: string[] = [];
  stackInput: string = '';
  stackDisplay: string = 'Nothing in the stack';

  pushToStack() {
    if (this.stackInput) {
      this.stack.push(this.stackInput);
      this.stackInput = '';
      this.updateStackDisplay();
    }
  }

  popFromStack() {
    if (this.stack.length > 0) {
      this.stack.pop();
      this.updateStackDisplay();
    }
  }

  updateStackDisplay() {
    this.stackDisplay = this.stack.join(', ');
  }
}