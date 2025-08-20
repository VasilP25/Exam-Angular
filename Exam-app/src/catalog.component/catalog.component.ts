import { Component, Input, OnInit } from '@angular/core';
import { SingleTrainingComponent } from '../single.training.component/single.training.component';
import { TrainingService } from '../app/training.service';
import { TrainingType } from '../types/training';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-catalog.component',
  imports: [SingleTrainingComponent, RouterLink],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
  standalone: true,
})
export class CatalogComponent implements OnInit {
  trainings: TrainingType[] = [];
  constructor(private service: TrainingService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((data) => {
      this.trainings = data;
    });
  }
}
