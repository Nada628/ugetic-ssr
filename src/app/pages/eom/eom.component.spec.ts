import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EOMComponent } from './eom.component';

describe('EOMComponent', () => {
  let component: EOMComponent;
  let fixture: ComponentFixture<EOMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EOMComponent]
    });
    fixture = TestBed.createComponent(EOMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
