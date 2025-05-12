import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveUsCallComponent } from './give-us-call.component';

describe('GiveUsCallComponent', () => {
  let component: GiveUsCallComponent;
  let fixture: ComponentFixture<GiveUsCallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiveUsCallComponent]
    });
    fixture = TestBed.createComponent(GiveUsCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
