import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TrainingService } from '../training.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create.component',
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  constructor(private service: TrainingService, private router: Router) {}

  create(form: NgForm) {
    const { title, typeTraining, description, timeToComplete } = form.value;
    this.service
      .create(title, typeTraining, description, timeToComplete)
      .subscribe((data) => {
        this.router.navigate(['/']);
      });
  }
}
