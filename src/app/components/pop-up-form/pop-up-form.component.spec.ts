import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpFormComponent } from './pop-up-form.component';

describe('PopUpFormComponent', () => {
  let component: PopUpFormComponent;
  let fixture: ComponentFixture<PopUpFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpFormComponent]
    });
    fixture = TestBed.createComponent(PopUpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
