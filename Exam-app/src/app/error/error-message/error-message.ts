import { Component, OnInit, signal } from '@angular/core';
import { ErrorMessageService } from '../error-message.service';

@Component({
  selector: 'app-error-message',
  imports: [],
  templateUrl: './error-message.html',
  styleUrl: './error-message.css',
})
export class ErrorMessage implements OnInit {
  errorMsg = signal('');

  constructor(private errorService: ErrorMessageService) {}

  ngOnInit(): void {
    this.errorService.apiError$.subscribe((err: any) => {
      this.errorMsg.set(err?.message);
    });
  }
}
