import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Product } from '../../models';

export const featureAdapter: EntityAdapter<Product> = createEntityAdapter<
  Product
>({
  selectId: model => model.id,
  sortComparer: (a: Product, b: Product): number =>
    b.id.toString().localeCompare(a.id.toString())
});

export interface State extends EntityState<Product> {
  isLoading?: boolean;
  error?: any;
  selectedProductId: number;
}

export const initialState: State = featureAdapter.getInitialState({
  isLoading: false,
  error: null,
  selectedProductId: null
});
