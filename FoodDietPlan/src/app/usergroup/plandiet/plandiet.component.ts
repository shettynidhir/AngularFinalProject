import { Component } from '@angular/core';
import { MainserviceService } from 'src/app/services/mainservice.service';


@Component({
  selector: 'app-plandiet',
  templateUrl: './plandiet.component.html',
  styleUrls: ['./plandiet.component.css']
})
export class PlandietComponent {
  products:any;
  selectprod:any;
  quan:any;
  quantity:any=[]
  selected:any=[]
  calorie:number=0;
  protein:number=0;
  fat:number=0;
  satfat:number=0;
  fiber:number=0;
  carbs:number=0;
 
  constructor(private prd:MainserviceService)
  {
    this.prd.getProducts().subscribe(
      {
        next:(data:any)=>
        {
          this.products=data
          console.log(data)
        },
        error:()=>this.products=[]
      }
    )
  }

  calc()
  { 
   this.selected.push(this.selectprod)
   this.quantity.push(this.quan)
    for(let x of this.products)
    {
      if(x.Food==this.selectprod)
      {
        this.calorie+=x.Calories
        this.protein+=x.Protein
        this.fat+=x.Fat
        this.satfat+=x.SatFat
        this.fiber+=x.Fiber
        this.carbs+=x.Carbs
     
      }

    }

  }

}
