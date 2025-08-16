import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../app/user/user.service';

@Component({
  selector: 'app-header',
  standalone: true,

  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  get isLoggedin(): boolean {
    return this.userservice.isLogged;
  }
  constructor(private userservice: UserService, private router: Router) {}

  logout() {
    this.userservice.logout().subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}
