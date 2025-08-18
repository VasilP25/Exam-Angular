import { Component, OnInit } from '@angular/core';
import { SingleTrainingComponent } from '../single.training.component/single.training.component';
import { FormsModule } from '@angular/forms';
import { TrainingType } from '../types/training';
import { TrainingService } from '../app/training.service';

@Component({
  selector: 'app-search-component',
  imports: [SingleTrainingComponent, FormsModule],
  templateUrl: './search-component.html',
  styleUrl: './search-component.css',
  standalone: true,
})
export class SearchComponent implements OnInit {
  selectedOption: string = '';
  trainings: TrainingType[] = [];
  constructor(private service: TrainingService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((data) => {
      this.trainings = data;
    });
  }
  filterItems() {
    this.service.getAll().subscribe((data) => {
      this.trainings = data.filter(
        (training) => training.typeTraining === this.selectedOption
      );
    });
  }
}
