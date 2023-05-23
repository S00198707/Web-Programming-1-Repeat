import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'x-rapidapi-key': 'a05c246910mshec7946f887b07dap19339ejsn6454110749cd',
        'x-rapidapi-host': 'https://rawg.io/api/',
      },

      setParams: {
        key: 'ad9d535f47ab4c6b80fc662377c4645d',
      }
    });
    return next.handle(req);
  }
}