import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountEnterKeyComponent } from './count-enter-key.component';

describe('CountEnterKeyComponent', () => {
  let component: CountEnterKeyComponent;
  let fixture: ComponentFixture<CountEnterKeyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountEnterKeyComponent]
    });
    fixture = TestBed.createComponent(CountEnterKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
