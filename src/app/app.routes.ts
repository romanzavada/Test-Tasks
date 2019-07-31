import { Routes } from '@angular/router';
import { JokeDetailComponent } from './containers/joke-detail/joke-detail.component';
import { JokesComponent } from './containers/jokes/jokes.component';
import { ProductListComponent } from './containers/product/list/product-list.component';
import { LayoutComponent } from '@app/containers/layout/layout.component';
export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'jokes',
        component: JokesComponent
      },
      {
        path: 'jokes/detail',
        component: JokeDetailComponent
      },
      {
        path: 'products',
        component: ProductListComponent
      }
    ]
  }
];
