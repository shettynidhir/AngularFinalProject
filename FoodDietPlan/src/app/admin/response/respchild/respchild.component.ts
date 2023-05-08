import { Component,Input } from '@angular/core';
import { MainserviceService } from 'src/app/services/mainservice.service';
import { ResponseComponent } from '../response.component';

@Component({
  selector: 'app-respchild',
  templateUrl: './respchild.component.html',
  styleUrls: ['./respchild.component.css']
})
export class RespchildComponent {
  @Input() Ques:any;
  qid:any;
  answer:any;
  errors:string[]=[]
  constructor(private  ms:MainserviceService)
  {}
  submit()
  {
    this.errors=[]
    let obj=
    {
      qid:this.Ques.qid,
      answer:this.answer
    }

    if(this.answer==undefined)
    {
      this.errors.push("Please enter you answer!!")
    }
    else
    {
      this.ms.postAnswer(obj).subscribe(
        { 
         next: data=>{
           alert('Your Answer is saved!! Thank you!!')
           location.reload();
         },
         error:(error)=>alert('Not saved ---some Error')
       }
    
       )

    }

 
    
  }

  
}
