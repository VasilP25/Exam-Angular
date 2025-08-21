import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserForAuth } from '../../types/user';
import { TrainingService } from '../training.service';
import { TrainingType } from '../../types/training';
import { ErrorMessageService } from '../../error/error-message.service';
import { UserService } from '../../user/user.service';
@Component({
  selector: 'app-create.component',
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent implements OnInit {
  user: UserForAuth | null = null;
  msg: string = '';

  constructor(
    private service: TrainingService,
    private router: Router,
    private userservice: UserService,
    private error: ErrorMessageService
  ) {}

  create(form: NgForm) {
    this.user = this.userservice.userId;

    const { title, typeTraining, description, timeToComplete } = form.value;
    this.service
      .create(title, typeTraining, description, timeToComplete)
      .subscribe({
        next: () => {
          this.router.navigate(['/catalog']);
        },
        error: (err) => {
          console.error('Грешка при заявката:', err);
        },
      });
  }

  ngOnInit(): void {
    this.error.setError(null);

    this.error.apiError$.subscribe((error: any) => {
      if (error) {
        this.msg = error.error.message;
      } else {
        this.msg = '';
      }
    });
  }
}
