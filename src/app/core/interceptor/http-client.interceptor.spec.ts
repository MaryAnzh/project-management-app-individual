import { TestBed } from '@angular/core/testing';

import { HTTPClientInterceptor } from './http-client.interceptor';

describe('HTTPClientInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HTTPClientInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HTTPClientInterceptor = TestBed.inject(HTTPClientInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
