import { Component , Inject} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MainserviceService } from 'src/app/services/mainservice.service';

@Component({
  selector: 'app-forumans',
  templateUrl: './forumans.component.html',
  styleUrls: ['./forumans.component.css']
})
export class ForumansComponent {
  forumans:any;
  temp:any;
  id:any;
  curdate=new Date();
  answers:any;
constructor(private ms:MainserviceService, private fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public data: {id:any}){
  this.id=this.data.id;
   this.forumans=this.fb.group({
      answer:['',[Validators.required]]

  });
  
  this.ms.getResponses().subscribe(
    {
      next:(data:any)=>{this.answers=data
      console.log(data)},
    
      error:()=>this.answers=[]
    }
  )
}
saveAns()
{
  this.temp=
  {
    qid:this.id,
    answer: this.forumans.value.answer,
    uname:sessionStorage.getItem("name"),
    cdate:this.curdate
  }
  this.ms.postResponses(this.temp).subscribe(
    { 
     next: data=>{
       alert('Your Comment is saved')
       location.reload();
     },
     error:(error)=>alert('Not saved ---some Error')
   }

   )
}
}
