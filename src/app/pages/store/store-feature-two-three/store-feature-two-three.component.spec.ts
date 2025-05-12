import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreFeatureTwoThreeComponent } from './store-feature-two-three.component';

describe('StoreFeatureTwoThreeComponent', () => {
  let component: StoreFeatureTwoThreeComponent;
  let fixture: ComponentFixture<StoreFeatureTwoThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoreFeatureTwoThreeComponent]
    });
    fixture = TestBed.createComponent(StoreFeatureTwoThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
