import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NutritionvalueComponent } from './usergroup/nutritionvalue/nutritionvalue.component';
import { ProductsComponent } from './usergroup/products/products.component';
import { DietplanComponent } from './usergroup/dietplan/dietplan.component';
import { DietdescComponent } from './usergroup/dietdesc/dietdesc.component';
import { ConsultexpertComponent } from './usergroup/consultexpert/consultexpert.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // 
  {path:"", component:LoginComponent},
  {path:"user",
  loadChildren:() => import('./usergroup/usergroup.module').then(m => m.UsergroupModule)},
  {path:"admin",loadChildren: 
  () => import('./admin/admin.module').then(m => m.AdminModule)},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
