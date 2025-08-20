import { TestBed } from '@angular/core/testing';

import { ErrorMessage } from './error-msg';

describe('ErrorMessage', () => {
  let service: ErrorMessage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorMessage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
