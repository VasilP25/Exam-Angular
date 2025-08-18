import { Component } from '@angular/core';
import { SingleTrainingComponent } from '../single.training.component/single.training.component';
import { TrainingType } from '../types/training';
import { UserForAuth } from '../types/user';
import { TrainingService } from '../app/training.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-my-trainings-component',
  imports: [SingleTrainingComponent],
  templateUrl: './my-trainings.component.html',
  styleUrl: './my-trainings.component.css',
})
export class MyTrainingsComponent {
  trainings: TrainingType[] = [];
  user: UserForAuth = { username: '', email: '', password: '', _id: '' };
  constructor(
    private service: TrainingService,
    private userservice: UserService
  ) {}

  ngOnInit(): void {
    this.user = this.userservice.userId;

    this.service.getAll().subscribe((data) => {
      this.trainings = data.filter(
        (training) => this.user._id == training.owner
      );
    });
  }
}
