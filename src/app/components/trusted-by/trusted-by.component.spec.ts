import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustedByComponent } from './trusted-by.component';

describe('TrustedByComponent', () => {
  let component: TrustedByComponent;
  let fixture: ComponentFixture<TrustedByComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrustedByComponent]
    });
    fixture = TestBed.createComponent(TrustedByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
