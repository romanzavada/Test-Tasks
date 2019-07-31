import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, of, throwError, pipe } from 'rxjs';
import { environment } from '@env/environment';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private endpoint: string = '';
  constructor(private http: HttpClient) {
    this.endpoint = environment.baseUrl;
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http
      .get(`${this.endpoint}${path}`, { params })
      .pipe(catchError(this.handleError));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http
      .put(`${this.endpoint}${path}`, JSON.stringify(body))
      .pipe(catchError(this.handleError));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(`${this.endpoint}${path}`, JSON.stringify(body)).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  delete(path): Observable<any> {
    return this.http
      .delete(`${this.endpoint}${path}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    /**
     * put your code for customize error
     */
    return throwError(error);
  }
}
