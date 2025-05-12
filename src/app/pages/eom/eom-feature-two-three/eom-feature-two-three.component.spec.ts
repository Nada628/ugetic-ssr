import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EomFeatureTwoThreeComponent } from './eom-feature-two-three.component';

describe('EomFeatureTwoThreeComponent', () => {
  let component: EomFeatureTwoThreeComponent;
  let fixture: ComponentFixture<EomFeatureTwoThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EomFeatureTwoThreeComponent]
    });
    fixture = TestBed.createComponent(EomFeatureTwoThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
