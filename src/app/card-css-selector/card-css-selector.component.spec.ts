import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCssSelectorComponent } from './card-css-selector.component';

describe('CardCssSelectorComponent', () => {
  let component: CardCssSelectorComponent;
  let fixture: ComponentFixture<CardCssSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCssSelectorComponent]
    });
    fixture = TestBed.createComponent(CardCssSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
