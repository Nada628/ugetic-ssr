import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyJopComponent } from './apply-jop.component';

describe('ApplyJopComponent', () => {
  let component: ApplyJopComponent;
  let fixture: ComponentFixture<ApplyJopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyJopComponent]
    });
    fixture = TestBed.createComponent(ApplyJopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
