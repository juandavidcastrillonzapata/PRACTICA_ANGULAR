import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWorkout } from './card-workout';

describe('CardWorkout', () => {
  let component: CardWorkout;
  let fixture: ComponentFixture<CardWorkout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardWorkout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardWorkout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
