import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '@app/models';
import {
  ProductStoreActions,
  ProductStoreSelectors,
  RootStoreState
} from '@app/root-store';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;
  error$: Observable<any>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<RootStoreState.State>) {
    this.store.dispatch(ProductStoreActions.load());
  }

  ngOnInit() {
    this.products$ = this.store.pipe(
      select(ProductStoreSelectors.selectAllProductItems)
    );

    this.error$ = this.store.pipe(
      select(ProductStoreSelectors.selectProductError)
    );

    this.isLoading$ = this.store.pipe(
      select(ProductStoreSelectors.selectProductIsLoading)
    );
  }

  onRefresh() {
    this.store.dispatch(ProductStoreActions.refresh());
  }

  onSelect(id: number) {
    this.store.dispatch(ProductStoreActions.select({ id }));
  }
}
