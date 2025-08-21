import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { TrainingType } from '../../types/training';

@Component({
  selector: 'app-single-training-component',
  imports: [RouterLink],
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
    owner: '',
    _id: '',
    subscribers: [],
  };

  constructor() {}
  ngOnInit(): void {}
}
