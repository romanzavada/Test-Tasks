import { createAction, props } from '@ngrx/store';
import { Product } from '../../models';

export const load = createAction('[Product] Load');

export const loadFailure = createAction(
  '[Products API] Load Failure',
  props<{ error: string }>()
);

export const loadSuccess = createAction(
  '[Products API] Load Success',
  props<{ products: Product[] }>()
);

export const refresh = createAction('[Products Page] Refresh');

export const select = createAction(
  '[Products Page] Select',
  props<{ id: number }>()
);
