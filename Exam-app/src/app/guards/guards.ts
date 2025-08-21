import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../user/user.service';

export const isAuthForLoginRegsiter: CanActivateFn = () => {
  const userService = inject(UserService);
  return !userService.isLogged;
};

export const isAuthForCreate: CanActivateFn = () => {
  const userService = inject(UserService);
  return userService.isLogged;
};
export const canActivateLogged: CanActivateFn = (route, state) => {
  const user = inject(UserService);
  const router = inject(Router);
  const userId = localStorage.getItem('user');

  if (!userId) {
    return router.createUrlTree(['/login']);
  }
  return true;
};
export const canActivateNotLogged: CanActivateFn = (route, state) => {
  const user = inject(UserService);
  const router = inject(Router);
  const userId = localStorage.getItem('user');

  if (userId) {
    return router.createUrlTree(['/']);
  }

  return true;
};
