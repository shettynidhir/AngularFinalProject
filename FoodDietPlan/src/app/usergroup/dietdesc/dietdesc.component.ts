import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MainserviceService } from 'src/app/services/mainservice.service';

@Component({
  selector: 'app-dietdesc',
  templateUrl: './dietdesc.component.html',
  styleUrls: ['./dietdesc.component.css']
})
export class DietdescComponent {
  id:any;
  singlediet:any;
//   id:number=0;
constructor(@Inject(MAT_DIALOG_DATA) public data: {id:any},private ms:MainserviceService)
 {
  console.log(this.data.id)
  this.ms.getSingleDiet(this.data.id).subscribe({
    next: (data:any)=> this.singlediet=data,
    error: ()=> this.singlediet = {}
 })

 
  
}



//   singlediet:any;
//   constructor(private ds:MainserviceService,private ar:ActivatedRoute){
//     this.ar.params.subscribe(
//       {
//         next: (params)=>{ 
//          this.id =params['id']
//          this.readData()
//         },
//         error: () => this.id = 0
//       }
//     )
//  }

//  readData()
//  {

//   

   
//  }

}
