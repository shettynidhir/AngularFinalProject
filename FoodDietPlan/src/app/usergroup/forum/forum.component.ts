import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MainserviceService } from 'src/app/services/mainservice.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent {
  curdate=new Date();
  forumques:any;
  comments:any;
  uname:any;
  temp:any;
  constructor(private fb:FormBuilder, private ms:MainserviceService)
  {
    this.uname=sessionStorage.getItem('name');
    this.forumques=this.fb.group({
      comment:['',[Validators.required]]

  });
  this.ms.getComments().subscribe(
    {
      next:(data:any)=>
      {
        this.comments=data,
        console.log(data)
      },
      error:()=>this.comments=[]
    }
  )

  }

  saveQues()
  {
  this.temp=
  {
    qid:Math.round(Math.random()*100000),
    cdate:this.curdate,
    uname:sessionStorage.getItem('name'),
    comment: this.forumques.value.comment,
    
  }

  this.ms.postComments(this.temp).subscribe(
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
