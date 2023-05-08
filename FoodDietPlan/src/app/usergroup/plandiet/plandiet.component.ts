import { Component } from '@angular/core';
import { MainserviceService } from 'src/app/services/mainservice.service';

@Component({
  selector: 'app-plandiet',
  templateUrl: './plandiet.component.html',
  styleUrls: ['./plandiet.component.css']
})
export class PlandietComponent {
  products:any;
  selected:any;
  txtarea:any;
  quanselect:any;
  quantity:any[]=[
    "1 qt",
    "1/2 cup",
    "1 cup",
    "2 cups",
    "1T.",
    "1 slice",
    "1 oz",
    "2 oz",
    "3 oz",
    "1 pie"
  ]
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

}
