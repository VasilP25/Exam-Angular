import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { catchError } from 'rxjs';
@Component({
  selector: 'app-login-component',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private userservice: UserService, private router: Router) {}

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const { email, password } = form.value;
    this.userservice
      .login(email, password)
      .pipe(
        catchError((err) => {
          // може да върнеш празен масив или някаква стойност по подразбиране
          return [];
        })
      )
      .subscribe(() => this.router.navigate(['/']));
  }
}
