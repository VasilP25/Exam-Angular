import { HttpInterceptorFn } from '@angular/common/http';
import { envirmonets } from './envirmonets';
import { inject } from '@angular/core';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';
import { ErrorMessageService } from '../error-message.component/error-message.service';

const { apiUrl } = envirmonets;

export const appInterceptor: HttpInterceptorFn = (req, next) => {
  const API = '/api';
  if (req.url.startsWith(API)) {
    req = req.clone({
      url: req.url.replace(API, apiUrl),
      withCredentials: true,
    });
  }

  const errorMsgService = inject(ErrorMessageService);
  const router = inject(Router);
  return next(req).pipe(
    catchError((err) => {
      //
      console.log(err);
      if (err.url.includes('/login')) {
        router.navigate(['/login']);
      }
      if (err.url.includes('/register')) {
        router.navigate(['/register']);
      }
      if (err.url.includes('/create')) {
        router.navigate(['/create']);
      }

      errorMsgService.setError(err);

      return [err];
    })
  );
};
