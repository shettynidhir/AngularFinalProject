import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { HomeComponent } from './home/home.component';
import { ResponseComponent } from './response/response.component';

const routes: Routes = [
  {path:"addproduct", component:AddproductComponent},
  {path:"home",component:HomeComponent},
  {path:"response",component:ResponseComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
