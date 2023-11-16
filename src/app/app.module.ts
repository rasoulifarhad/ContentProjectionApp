import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtnComponent } from './btn/btn.component';
import { FancyBtnComponent } from './fancy-btn/fancy-btn.component';
import { CardComponent } from './card/card.component';
import { CountClicksDirective } from './count-clicks.directive';
import { CountEnterKeyComponent } from './count-enter-key/count-enter-key.component';
import { HighLightDirective } from './high-light.directive';
import { CardCssSelectorComponent } from './card-css-selector/card-css-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    BtnComponent,
    FancyBtnComponent,
    CardComponent,
    CountClicksDirective,
    CountEnterKeyComponent,
    HighLightDirective,
    CardCssSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
