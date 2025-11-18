import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-card-workout',
  imports: [RouterOutlet],
  templateUrl: './card-workout.html',
  styleUrl: './card-workout.css',
})

export class CardWorkout {
  workout = {
    id: 1,
    title: "Workout-tracker-app",
    type: "Strength Training",
    duration: "45-60 minutes",
    exerciseCount: 6,
    lastPerformed: "Today",
    description: "Complete upper body workout focusing on chest, back, shoulders, and arms"
  }
}

