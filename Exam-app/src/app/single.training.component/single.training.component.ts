import { Component, Input, OnInit } from '@angular/core';
import { TrainingType } from '../../types/training';

@Component({
  selector: 'app-single-training-component',
  imports: [],
  templateUrl: './single.training.component.html',
  styleUrl: './single.training.component.css',
  standalone: true,
})
export class SingleTrainingComponent implements OnInit {
  @Input() training: TrainingType = {
    title: '',
    typeTraining: '',
    description: '',
    timeToComplete: 0,
  };

  constructor() {}
  ngOnInit(): void {}
}
