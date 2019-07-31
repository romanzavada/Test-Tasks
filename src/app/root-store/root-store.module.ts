import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { JokeStoreModule } from './joke-store';
import { ProductStoreModule } from './product-store';
@NgModule({
  imports: [
    CommonModule,
    JokeStoreModule,
    ProductStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 20,
      name: 'NgRx Test Store DevTools',
      logOnly: true
    })
  ],
  declarations: []
})
export class RootStoreModule {}
