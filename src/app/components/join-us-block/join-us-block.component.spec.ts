import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinUsBlockComponent } from './join-us-block.component';

describe('JoinUsBlockComponent', () => {
  let component: JoinUsBlockComponent;
  let fixture: ComponentFixture<JoinUsBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoinUsBlockComponent]
    });
    fixture = TestBed.createComponent(JoinUsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
