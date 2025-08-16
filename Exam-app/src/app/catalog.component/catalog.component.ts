import { Component, Input, OnInit } from '@angular/core';
import { TrainingType } from '../../types/training';
import { TrainingService } from '../training.service';
import { SingleTrainingComponent } from '../single.training.component/single.training.component';

@Component({
  selector: 'app-catalog.component',
  imports: [SingleTrainingComponent],
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
