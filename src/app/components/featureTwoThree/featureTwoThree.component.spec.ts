import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTwoThreeComponent } from './featureTwoThree.component';

describe('FeatureTwoThreeComponent', () => {
  let component: FeatureTwoThreeComponent;
  let fixture: ComponentFixture<FeatureTwoThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeatureTwoThreeComponent]
    });
    fixture = TestBed.createComponent(FeatureTwoThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
