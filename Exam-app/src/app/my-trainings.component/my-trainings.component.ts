import { Component } from '@angular/core';
import { TrainingType } from '../../types/training';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-my-trainings-component',
  imports: [],
  templateUrl: './my-trainings.component.html',
  styleUrl: './my-trainings.component.css',
})
export class MyTrainingsComponent {
  trainings: TrainingType[] = [];
  constructor(private service: TrainingService) {}
  cookies: any = {};

  ngOnInit(): void {
    this.cookies = document.cookie;
    console.log(this.cookies);

    this.service.getAll().subscribe((data) => {
      this.trainings = data;
    });
  }
}
