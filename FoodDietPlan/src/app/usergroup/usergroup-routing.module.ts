import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { NutritionvalueComponent } from './nutritionvalue/nutritionvalue.component';
import { DietplanComponent } from './dietplan/dietplan.component';
import { DietdescComponent } from './dietdesc/dietdesc.component';
import { ConsultexpertComponent } from './consultexpert/consultexpert.component';
import { AnswerComponent } from './consultexpert/answer/answer.component';
import { QuestionComponent } from './consultexpert/question/question.component';
import { PlandietComponent } from './plandiet/plandiet.component';
import { ForumComponent } from './forum/forum.component';

const routes: Routes = [
  // {path:"",component:ProductsComponent},
  {path:"nutrition/:id",component:NutritionvalueComponent},
  {path:"products",component:ProductsComponent},
  {path:"dietplan",component:DietplanComponent},
  {path:"dietdesc/:id",component:DietdescComponent},
  {path:"consultexp",component:ConsultexpertComponent},
  {path:"answer/:id",component:AnswerComponent},
  {path:"expert",component:ConsultexpertComponent},
  {path:"plandiet",component:PlandietComponent},
  {path:"forum",component:ForumComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsergroupRoutingModule { }
