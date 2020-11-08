import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LadriphoneAboutComponent } from './ladriphone-about/ladriphone-about.component';
import { LadriphoneProductsComponent } from './ladriphone-products/ladriphone-products.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
    //component: LadriphoneProductsComponent
  },
  {
    path: 'products',
    component: LadriphoneProductsComponent
  },
  {
    path: 'about',
    component: LadriphoneAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
