import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EomFeature1Component } from './eom-feature1.component';

describe('EomFeature1Component', () => {
  let component: EomFeature1Component;
  let fixture: ComponentFixture<EomFeature1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EomFeature1Component]
    });
    fixture = TestBed.createComponent(EomFeature1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
