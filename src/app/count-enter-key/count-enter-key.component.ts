import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-count-enter-key',
  templateUrl: './count-enter-key.component.html',
  styleUrls: ['./count-enter-key.component.css']
})
export class CountEnterKeyComponent {

  counter = 0;

  @HostListener('window:keydown.enter', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    this.counter++;
  }

  resetCounter() {
    this.counter = 0;
  }
}
