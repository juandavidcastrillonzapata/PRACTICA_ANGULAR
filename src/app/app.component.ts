import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardWorkoutComponent } from './shared/components/card-workout/card-workout'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, CardWorkoutComponent, CommonModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}