import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { delay, catchError, map } from 'rxjs/operators';
import { environment } from '@env/environment';
import { ApiService } from '@app/services/api.service';
import { Product, ProductResult } from '@app/models';

@Injectable({
  providedIn: 'root'
})
export class ApiProductService {
  constructor(private api: ApiService) {}

  list(): Observable<Array<Product>> {
    return this.api
      .get(`/assets/data/products.json`)
      .pipe(map(result => result.data));
  }
}
