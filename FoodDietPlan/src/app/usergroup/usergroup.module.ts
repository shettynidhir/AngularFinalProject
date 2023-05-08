import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsergroupRoutingModule } from './usergroup-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProdComponent } from './products/prod/prod.component';
import { MaterialModule } from '../material/material.module';
import { NutritionvalueComponent } from './nutritionvalue/nutritionvalue.component';
import { MiniprodComponent } from './nutritionvalue/miniprod/miniprod.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypefilterPipe } from './typefilter.pipe';
import { DietplanComponent } from './dietplan/dietplan.component';
import { DietComponent } from './dietplan/diet/diet.component';
import { DietdescComponent } from './dietdesc/dietdesc.component';
import { TypesearchPipe } from './typesearch.pipe';
import { ConsultexpertComponent } from './consultexpert/consultexpert.component';
import { MenubarComponent } from './menubar/menubar.component';
import { QuestionComponent } from './consultexpert/question/question.component';
import { AnswerComponent } from './consultexpert/answer/answer.component';
import { PlandietComponent } from './plandiet/plandiet.component';
import { DispProdComponent } from './plandiet/disp-prod/disp-prod.component';





@NgModule({
  declarations: [
    ProductsComponent,
    ProdComponent,
    NutritionvalueComponent,
    MiniprodComponent,
    TypefilterPipe,
    DietplanComponent,
    DietComponent,
    DietdescComponent,
    TypesearchPipe,
    ConsultexpertComponent,
    MenubarComponent,
    QuestionComponent,
    AnswerComponent,
   
   PlandietComponent,
       DispProdComponent
  
    
 
   
  ],
  imports: [
    CommonModule,
    UsergroupRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
   
  

  ],
  exports:[
    ProductsComponent,
    ProdComponent,
    NutritionvalueComponent,
    MiniprodComponent,
    TypefilterPipe,
    DietdescComponent,
    MenubarComponent,
    QuestionComponent,
    AnswerComponent,
    ConsultexpertComponent
  ]
})
export class UsergroupModule { }
