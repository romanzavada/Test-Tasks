import { JokeStoreState } from './joke-store';
import { ProductStoreState } from './product-store';

export interface State {
  joke: JokeStoreState.State;
  product: ProductStoreState.State;
}
