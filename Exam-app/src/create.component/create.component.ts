import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserForAuth } from '../types/user';
import { TrainingService } from '../app/training.service';
import { UserService } from '../user/user.service';
@Component({
  selector: 'app-create.component',
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  user: UserForAuth | null = null;
  constructor(
    private service: TrainingService,
    private router: Router,
    private userservice: UserService
  ) {}

  create(form: NgForm) {
    this.user = this.userservice.userId;

    const { title, typeTraining, description, timeToComplete } = form.value;
    this.service
      .create(title, typeTraining, description, timeToComplete)
      .subscribe((data) => {
        this.router.navigate(['/']);
      });
  }
}
