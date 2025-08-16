import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserForAuth } from '../../../types/user';
import { UserService } from '../user.service';

@Component({
  standalone: true,
  selector: 'app-register.component',
  imports: [RouterLink, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private userservice: UserService, private router: Router) {}
  register(form: NgForm) {
    const { username, email, password, repeatPassword } = form.value;

    this.userservice
      .register(username, email, password, repeatPassword)
      .subscribe((data) => {
        this.router.navigate(['/']);
      });
  }
}
