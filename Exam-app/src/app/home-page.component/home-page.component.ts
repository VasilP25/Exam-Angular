import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home-page.component',
  imports: [RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  get isLoggedin(): boolean {
    return this.userservice.isLogged;
  }
  constructor(private userservice: UserService) {}
}
