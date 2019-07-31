import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, tap } from 'rxjs/operators';
import { ApiProductService } from '@app/services/api/product.service';
import * as featureActions from './actions';

@Injectable()
export class ProductStoreEffects {
  constructor(
    private productService: ApiProductService,
    private actions$: Actions,
    private router: Router
  ) {}

  productRequestEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(featureActions.load),
      concatMap(_ =>
        this.productService.list().pipe(
          map(products =>
            featureActions.loadSuccess({
              products
            })
          ),
          catchError(error => of(featureActions.loadFailure({ error })))
        )
      )
    )
  );

  productRefreshEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(featureActions.refresh),
      map(_ => featureActions.load())
    )
  );

  productNavigateToDetailOnSelectEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(featureActions.select),
        tap(_ => this.router.navigate(['/products', 'detail']))
      ),
    { dispatch: false }
  );
}
