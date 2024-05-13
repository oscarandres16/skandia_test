import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Interceptor HTTP personalizado.
 */
@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  /**
   * Intercepta una petición HTTP.
   * @param request - Petición HTTP
   * @param next - Handler HTTP
   * @returns - Observable de eventos HTTP
   */
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      url: 'https://62e152f8fa99731d75d44571.mockapi.io/api/v1' + request.url,
    });
    return next.handle(request);
  }
}
