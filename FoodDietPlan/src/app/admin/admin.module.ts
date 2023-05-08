import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddproductComponent } from './addproduct/addproduct.component';
import { MenubarComponent } from '../usergroup/menubar/menubar.component';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResponseComponent } from './response/response.component';
import { RespchildComponent } from './response/respchild/respchild.component';

@NgModule({
  declarations: [
    AddproductComponent,
    AdminmenuComponent,
    HomeComponent,
    RespchildComponent,
    ResponseComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
   
  ],
  exports:[
    AdminmenuComponent,
    AddproductComponent,
    HomeComponent,
    RespchildComponent,
    ResponseComponent
  ]
})
export class AdminModule { }
