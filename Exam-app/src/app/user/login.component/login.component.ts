import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../user.service';
import { ErrorMessageService } from '../../error/error-message.service';
@Component({
  selector: 'app-login-component',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
})
export class LoginComponent implements OnInit {
  msg: string = '';
  constructor(
    private userservice: UserService,
    private router: Router,
    private error: ErrorMessageService
  ) {}

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { email, password } = form.value;
    this.userservice.login(email, password).subscribe({
      next: (data) => {
        localStorage.setItem('user', data._id);

        this.router.navigate(['/']);
      },
      error: (error: HttpErrorResponse) => {
        this.router.navigate(['/login']);
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
