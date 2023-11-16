import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'button[counting]'
})
export class CountClicksDirective {

  numberOfClicks = 0;
  constructor() { }

  @HostListener('click', ['$event.target'])
  onClick(btn: any) {
    console.log('button', btn, 'number  of clicks', this.numberOfClicks++);
  }

}
