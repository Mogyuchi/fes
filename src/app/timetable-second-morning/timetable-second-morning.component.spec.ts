import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableSecondMorningComponent } from './timetable-second-morning.component';

describe('TimetableSecondMorningComponent', () => {
  let component: TimetableSecondMorningComponent;
  let fixture: ComponentFixture<TimetableSecondMorningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimetableSecondMorningComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableSecondMorningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
