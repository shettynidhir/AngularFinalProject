import { Component,Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MainserviceService } from 'src/app/services/mainservice.service';


@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent {
  
@Input() ans:any;
id:any;

answers:any;
answer:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {id:any},private ms:MainserviceService)

 {
  // console.log(this.data.id)
  this.id=this.data.id;
  console.log("ID ans: ",this.id)
  this.ms.getAnswers().subscribe(
        {
          next:(data:any)=>{this.answers=data
          console.log(data)},
        
          error:()=>this.answers=[]
        }
      )
 

  
 }
}
// constructor( private ms:MainserviceService,private ar:ActivatedRoute)
//  {
//   this.ar.params.subscribe(
//     {
//       next: (params)=>{ 
//        this.id =params['id']
      
//       },
//       error: () => this.id = 0
//     }
//   ),
  
//   console.log("ID: ",this.id)
//  
  
//  }
 

  


 


