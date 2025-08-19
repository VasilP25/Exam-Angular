import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from './user/user.service';

export const isAuthForLoginRegsiter: CanActivateFn = () => {
  const userService = inject(UserService);
  return !userService.isLogged;
};

export const isAuthForCreate: CanActivateFn = () => {
  const userService = inject(UserService);
  return userService.isLogged;
};
