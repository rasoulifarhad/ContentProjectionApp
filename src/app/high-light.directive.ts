import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective implements OnInit{

  constructor() { }
  @HostBinding('style.border') border? : string;

  ngOnInit(): void {
    this.border = "5px solid blue";
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.border = "5px solid green";
    console.log("Mouse Over");
  }


  @HostListener('mouseleave')
  onMouseLeave() {
    this.border =  "5px solid blue";
    console.log("Mouse Leave");
  }
}
