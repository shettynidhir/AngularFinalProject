import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarComponent } from './usergroup/menubar/menubar.component';
import { UsergroupModule } from './usergroup/usergroup.module';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MiniprodComponent } from './usergroup/nutritionvalue/miniprod/miniprod.component';
import { DietComponent } from './usergroup/dietplan/diet/diet.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { AdminModule } from './admin/admin.module';
import { AdminmenuComponent } from './admin/adminmenu/adminmenu.component';
import { PlandietComponent } from './usergroup/plandiet/plandiet.component';
import { LoginComponent } from './login/login.component';





@NgModule({
  declarations: [
    AppComponent,
    MainmenuComponent,
    LoginComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UsergroupModule,
    AdminModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
