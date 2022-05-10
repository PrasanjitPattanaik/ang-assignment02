import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductsComponent } from './products/products.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path : "dashboard",
    component : DashboardComponent
  },
  {
    path : "users",
    component : UsersComponent
  },
  {
    path : "user-create",
    component : UserCreateComponent
  },
  {
    path : "product-create",
    component : ProductCreateComponent
  },
  {
    path : "products",
    component : ProductsComponent
  },
  {
    path : "user/:id",
    component : UserViewComponent
  },
  {
    path : "products/:id",
    component : UserViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
