import { Component, AfterViewInit, TemplateRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardWorkout } from './shared/components/card-workout/card-workout';

declare const lucide: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardWorkout],
  templateUrl: './app.component.html',
  styleUrls: ['./app.css'],
})

export class AppComponent implements AfterViewInit {
    title = "workout-tracker-app";
    ngAfterViewInit(): void {
        lucide.createIcons();
    }
}