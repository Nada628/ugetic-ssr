import { ComponentFixture, TestBed } from '@angular/core/testing';

import { featureOneComponent } from './feature-one.component';

describe('featureOneComponent', () => {
  let component: featureOneComponent;
  let fixture: ComponentFixture<featureOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [featureOneComponent]
    });
    fixture = TestBed.createComponent(featureOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
