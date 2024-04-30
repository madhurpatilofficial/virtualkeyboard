import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.css'
})
export class KeyboardComponent {

  @Output() keyInserted = new EventEmitter<string>();

  clear() {
    this.keyInserted.emit('clear');
  }

  textInput: string = '';

  insertKey(key: string) {
    if (key === 'clear') {
      this.textInput = '';
    } else {
      this.textInput += key;
    }
  }
}