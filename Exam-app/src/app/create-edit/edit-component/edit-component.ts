import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { TrainingType } from '../../types/training';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-edit-component',
  imports: [FormsModule],
  templateUrl: './edit-component.html',
  styleUrl: './edit-component.css',
})
export class EditComponent implements OnInit {
  training: TrainingType[] = [
    {
      title: '',
      typeTraining: '',
      description: '',
      timeToComplete: 0,
      owner: '',
      _id: '',
      subscribers: [],
    },
  ];
  trainingId: string | null = '';
  constructor(
    private trainingservice: TrainingService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('trainingId');

    this.trainingservice.getAll().subscribe((training) => {
      this.training = training.filter((t) => t._id === id);
    });
  }

  edit(form: NgForm) {
    const training = form.value;
    this.trainingId = this.route.snapshot.paramMap.get('trainingId');
    this.trainingservice.edit(training, this.trainingId).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
