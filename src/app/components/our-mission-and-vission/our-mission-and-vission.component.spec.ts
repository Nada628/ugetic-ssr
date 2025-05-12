import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurMissionAndVissionComponent } from './our-mission-and-vission.component';

describe('OurMissionAndVissionComponent', () => {
  let component: OurMissionAndVissionComponent;
  let fixture: ComponentFixture<OurMissionAndVissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurMissionAndVissionComponent]
    });
    fixture = TestBed.createComponent(OurMissionAndVissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
