import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ContentProjectionApp';

  fancyBtnClicked($event: any) {
    console.log($event);
    alert('fancy button clicked');
  }

  doSomething($event: string) {
    alert($event);
  }

}
