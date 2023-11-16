import { Directive, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective implements OnInit{

  constructor() { }
  @HostBinding('style.border') border? : string;

  ngOnInit(): void {
    this.border = "5px solid blue";
  }

}
