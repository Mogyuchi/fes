import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumpageComponent } from './museumpage.component';

describe('MuseumpageComponent', () => {
  let component: MuseumpageComponent;
  let fixture: ComponentFixture<MuseumpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MuseumpageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
