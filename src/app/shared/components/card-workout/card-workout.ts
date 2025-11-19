import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para [ngClass]

@Component({
  standalone: true, 
  selector: 'app-card-workout', 
  templateUrl: './card-workout.html',
  styleUrls: ['./card-workout.css'],
  imports: [CommonModule] 
})
export class CardWorkoutComponent {
  @Input() title: string = 'Upper Body Strength';
  @Input() subtitle: string = 'Strength Training';
  @Input() duration: string = '45-60 minutes';
  @Input() exercises: number = 6;
  @Input() lastPerformed: string = 'Today';

  isMenuOpen: boolean = false;
  
  isHovered: boolean = false; 

  constructor() { }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onMouseEnter(): void {
    this.isHovered = true;
    console.log('Mouse ENTER: isHovered = true'); 
  }

  onMouseLeave(): void {
    if (!this.isMenuOpen) {
      this.isHovered = false;
      console.log('Mouse LEAVE: isHovered = false');
    }
  }

  editWorkout(): void {
    this.isMenuOpen = false; 
    console.log('Editando:', this.title);
  }

  duplicateWorkout(): void {
    this.isMenuOpen = false;
    console.log('Duplicando:', this.title);
  }

  deleteWorkout(): void {
    if (confirm(`¿Eliminar "${this.title}"?`)) {
        console.log('Eliminando:', this.title);
    }
    this.isMenuOpen = false;
  }
}