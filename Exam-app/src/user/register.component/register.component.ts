import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { ErrorMessageService } from '../../error-message.component/error-message.service';

@Component({
  standalone: true,
  selector: 'app-register-component',
  imports: [RouterLink, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  msg: string = '';
  constructor(
    private userservice: UserService,
    private router: Router,
    private error: ErrorMessageService
  ) {}
  register(form: NgForm) {
    const { username, email, password, repeatPassword } = form.value;

    this.userservice
      .register(username, email, password, repeatPassword)
      .subscribe((data) => {
        this.router.navigate(['/']);
      });
  }

  ngOnInit(): void {
    this.error.apiError$.subscribe((error: any) => {
      console.log(error.error.message);

      if (error) {
        this.msg = error.error.message;
      } else {
        this.msg = '';
      }
    });
  }
}
