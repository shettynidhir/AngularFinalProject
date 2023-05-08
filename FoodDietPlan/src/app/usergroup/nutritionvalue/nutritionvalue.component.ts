import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MainserviceService } from 'src/app/services/mainservice.service';

@Component({
  selector: 'app-nutritionvalue',
  templateUrl: './nutritionvalue.component.html',
  styleUrls: ['./nutritionvalue.component.css']
})
export class NutritionvalueComponent {
  id:number=0;
   nvalue:any;
   products:any;
  constructor(private ms:MainserviceService,private ar:ActivatedRoute){
     this.ar.params.subscribe(
       {
         next: (params)=>{ 
          this.id =params['id']
          this.readData()
         },
         error: () => this.id = 0
       }
     ),
     this.ms.getSingleProduct(this.id).subscribe(
      {
        next:(data:any)=>this.products=data,
        error:()=>this.products=[]
      }
    )
  }

  readData(){

     this.ms.getNutrition(this.id).subscribe({
        next: (data:any)=> this.nvalue=data,
        error: ()=> this.nvalue = {}
     })

    
  }
}
