import { Component } from '@angular/core';
import { MainserviceService } from 'src/app/services/mainservice.service';

@Component({
  selector: 'app-dietplan',
  templateUrl: './dietplan.component.html',
  styleUrls: ['./dietplan.component.css']
})
export class DietplanComponent {
  diets:any;
  constructor(private prd:MainserviceService)
  {
    this.prd.getDietPlan().subscribe(
      {
        next:(data:any)=>this.diets=data,
        error:()=>this.diets=[]
      }
    )
  }

}
