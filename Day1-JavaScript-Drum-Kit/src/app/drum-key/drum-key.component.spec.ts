import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrumKeyComponent } from './drum-key.component';

describe('DrumKeyComponent', () => {
  let component: DrumKeyComponent;
  let fixture: ComponentFixture<DrumKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrumKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrumKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
