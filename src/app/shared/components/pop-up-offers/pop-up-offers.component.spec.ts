import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpOffersComponent } from './pop-up-offers.component';

describe('PopUpOffersComponent', () => {
  let component: PopUpOffersComponent;
  let fixture: ComponentFixture<PopUpOffersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpOffersComponent]
    });
    fixture = TestBed.createComponent(PopUpOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
