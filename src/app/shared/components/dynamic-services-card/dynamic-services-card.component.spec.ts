import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicServicesCardComponent } from './dynamic-services-card.component';

describe('DynamicServicesCardComponent', () => {
  let component: DynamicServicesCardComponent;
  let fixture: ComponentFixture<DynamicServicesCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicServicesCardComponent]
    });
    fixture = TestBed.createComponent(DynamicServicesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
