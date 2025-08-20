import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../user/user.service';
import { ErrorMessage } from '../../app/error/error-message/error-message';
import { ErrorMessageService } from '../../error-message.component/error-message.service';

@Component({
  selector: 'app-header',
  standalone: true,

  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  // get isLoggedin(): boolean {
  //   return this.userservice.isLogged;
  // }
  msg: string = '';

  get isLoggedin(): boolean {
    return !!localStorage.getItem('user');
  }
  constructor(private userservice: UserService, private router: Router) {}

  logout() {
    this.userservice.logout().subscribe(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/home']);
    });
  }
}
