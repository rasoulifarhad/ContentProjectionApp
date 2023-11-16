import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-fancy-btn',
  templateUrl: './fancy-btn.component.html',
  styleUrls: ['./fancy-btn.component.css']
})
export class FancyBtnComponent {
  @Output()
  someEvent: EventEmitter<string> = new EventEmitter<string>();

  raiseSomeEvent() {
    console.log('raiseSomeEvent caled');
    this.someEvent.emit('some event raised');
  }

  @HostListener("click",["$event"])
  clickeEvent(event: any) {
    this.raiseSomeEvent();
  }

}
