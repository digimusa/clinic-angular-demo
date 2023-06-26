import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.headers.get("No-Auth") === "True") {
      return next.handle(request.clone());
    }

    const token = this.userService.getToken();

    request = this.addToken(request, token);

    return next.handle(request).pipe(
      catchError(
        (err: HttpErrorResponse) => {
          console.log(err.status);
          if (err.status === 401) {
            this.router.navigate(['/login'])
          } else if (err.status === 403) {
            this.router.navigate(['/forbidden'])
          }
          return throwError("Something is wrong");
        }
      )
    );

  }

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone(
      {
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  }
}
