import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableFirstMorningComponent } from './timetable-first-morning.component';

describe('TimetableFirstMorningComponent', () => {
  let component: TimetableFirstMorningComponent;
  let fixture: ComponentFixture<TimetableFirstMorningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimetableFirstMorningComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableFirstMorningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
