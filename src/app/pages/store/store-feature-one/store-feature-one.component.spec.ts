import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreFeatureOneComponent } from './store-feature-one.component';

describe('StoreFeatureOneComponent', () => {
  let component: StoreFeatureOneComponent;
  let fixture: ComponentFixture<StoreFeatureOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoreFeatureOneComponent]
    });
    fixture = TestBed.createComponent(StoreFeatureOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
