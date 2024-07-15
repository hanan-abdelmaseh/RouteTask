import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ViewCustomerComponent } from './components/view-customer/view-customer.component';



//using lazy loading 
const routes: Routes = [
  {path:'' , redirectTo:'home', pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {path:'view/:id' , component:ViewCustomerComponent}
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
