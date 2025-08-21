import { Component, Input, OnInit } from '@angular/core';
import { SingleTrainingComponent } from '../single.training.component/single.training.component';
import { RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { TrainingType } from '../../types/training';
import { TrainingService } from '../../create-edit/training.service';

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
    this.service
      .getAll()
      .pipe(
        map((data) =>
          data.sort((a, b) => b.subscribers.length - a.subscribers.length)
        )
      )
      .subscribe((data) => {
        this.trainings = data;
      });
  }
}
