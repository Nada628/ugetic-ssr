import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountSectionComponent } from './discount-section.component';

describe('DiscountSectionComponent', () => {
  let component: DiscountSectionComponent;
  let fixture: ComponentFixture<DiscountSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiscountSectionComponent]
    });
    fixture = TestBed.createComponent(DiscountSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
