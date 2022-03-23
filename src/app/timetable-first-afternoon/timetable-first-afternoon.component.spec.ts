import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableFirstAfternoonComponent } from './timetable-first-afternoon.component';

describe('TimetableFirstAfternoonComponent', () => {
  let component: TimetableFirstAfternoonComponent;
  let fixture: ComponentFixture<TimetableFirstAfternoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimetableFirstAfternoonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableFirstAfternoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
