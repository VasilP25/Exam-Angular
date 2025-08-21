import { Component } from '@angular/core';
import { TrainingType } from '../../types/training';
import { UserForAuth } from '../../types/user';
import { TrainingService } from '../../create-edit/training.service';
import { map } from 'rxjs';
import { RouterLink } from '@angular/router';
import { UserService } from '../../user/user.service';
import { SingleTrainingComponent } from '../single.training.component/single.training.component';

@Component({
  selector: 'app-my-trainings-component',
  imports: [SingleTrainingComponent, RouterLink],
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

    this.service
      .getAll()
      .pipe(
        map((data) =>
          data.filter(
            (training) => localStorage.getItem('user') == training.owner
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
