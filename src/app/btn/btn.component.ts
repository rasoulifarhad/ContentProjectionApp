import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent {
  @Output()
  someEvent: EventEmitter<string> = new EventEmitter<string>();

  raiseSomeEvent() {
    console.log('raiseSomeEvent caled');
    this.someEvent.emit('some event raised');
  }

}
