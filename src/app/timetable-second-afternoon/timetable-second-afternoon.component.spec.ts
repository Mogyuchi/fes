import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableSecondAfternoonComponent } from './timetable-second-afternoon.component';

describe('TimetableSecondAfternoonComponent', () => {
  let component: TimetableSecondAfternoonComponent;
  let fixture: ComponentFixture<TimetableSecondAfternoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimetableSecondAfternoonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableSecondAfternoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
