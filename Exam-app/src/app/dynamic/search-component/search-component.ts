import { Component, OnInit } from '@angular/core';
import { SingleTrainingComponent } from '../single.training.component/single.training.component';
import { FormsModule } from '@angular/forms';
import { map } from 'rxjs';
import { RouterLink } from '@angular/router';
import { TrainingType } from '../../types/training';
import { TrainingService } from '../../create-edit/training.service';

@Component({
  selector: 'app-search-component',
  imports: [SingleTrainingComponent, FormsModule, RouterLink],
  templateUrl: './search-component.html',
  styleUrl: './search-component.css',
  standalone: true,
})
export class SearchComponent implements OnInit {
  selectedOption: string = '';
  searchText: string = '';
  trainings: TrainingType[] = [];
  constructor(private service: TrainingService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((data) => {
      this.trainings = data;
    });
  }
  filterItems() {
    this.service
      .getAll()
      .pipe(
        map((data) =>
          data.filter(
            (training) =>
              training.typeTraining === this.selectedOption &&
              training.title.includes(this.searchText)
          )
        ),

        map((data) =>
          data.sort((a, b) => b.subscribers.length - a.subscribers.length)
        )
      )
      .subscribe((data) => {
        this.trainings = data;
      });
  }
}
