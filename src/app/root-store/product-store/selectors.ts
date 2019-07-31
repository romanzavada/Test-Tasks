import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from '../../models';
import { featureAdapter, State } from './state';

export const selectProductState = createFeatureSelector<State>('product');

export const selectAllProductItems: (
  state: object
) => Product[] = featureAdapter.getSelectors(selectProductState).selectAll;

const selectSelectedProductId = createSelector(
  selectProductState,
  (state: State): number => state.selectedProductId
);

export const selectCurrentProduct = createSelector(
  selectAllProductItems,
  selectSelectedProductId,
  (allProduct: Product[], selectedProductId: number) => {
    if (allProduct && selectedProductId) {
      return allProduct.find(p => p.id === selectedProductId);
    } else {
      return null;
    }
  }
);

export const selectProductError = createSelector(
  selectProductState,
  (state: State): any => state.error
);

export const selectProductIsLoading = createSelector(
  selectProductState,
  (state: State): boolean => state.isLoading
);
