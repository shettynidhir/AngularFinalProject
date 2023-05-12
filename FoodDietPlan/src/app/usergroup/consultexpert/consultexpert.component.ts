import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MainserviceService } from 'src/app/services/mainservice.service';

@Component({
  selector: 'app-consultexpert',
  templateUrl: './consultexpert.component.html',
  styleUrls: ['./consultexpert.component.css']
})
export class ConsultexpertComponent {
consultexp:any;
temp:any;
qid:any;
id:any;
uid:any;
userid:any;
questions:any;
answers:any;


 constructor(private fb:FormBuilder, private ms:MainserviceService,private ar:ActivatedRoute)
 {
  this.consultexp=this.fb.group({
    qid:[''],
    question:['']
  

  });
  this.uid=sessionStorage.getItem('userid');
  console.log("Uid", this.uid) 
  this.ms.getQuestion().subscribe(
    {
      next:(data:any)=>
      {
        this.questions=data,
        console.log(data)
      },
      error:()=>this.questions=[]
    }
  )

 }

 saveQues()
 {
 this.temp=
  {
    qid:Math.round(Math.random()*100000),
    question: this.consultexp.value.question,
    uid:sessionStorage.getItem('userid')
    // userid:this.consultexp.value.userid
      
  }




  this.ms.postQues(this.temp).subscribe(
    { 
     next: data=>{
       alert('Your Question is saved')
       location.reload();
     },
     error:(error)=>alert('Not saved ---some Error')
   }

   )

  

 }

}
