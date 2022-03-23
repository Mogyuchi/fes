import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentspageComponent } from './contentspage.component';

describe('ContentspageComponent', () => {
  let component: ContentspageComponent;
  let fixture: ComponentFixture<ContentspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentspageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
