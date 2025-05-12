import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WavesShapeComponent } from './waves-shape.component';

describe('WavesShapeComponent', () => {
  let component: WavesShapeComponent;
  let fixture: ComponentFixture<WavesShapeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WavesShapeComponent]
    });
    fixture = TestBed.createComponent(WavesShapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
