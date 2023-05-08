import { Component } from '@angular/core';
import { MainserviceService } from 'src/app/services/mainservice.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent {
  ques:any;
  constructor(private ms:MainserviceService)
  {
    this.ms.getQuestion().subscribe(
      {
        next:(data:any)=>this.ques=data,
        error:()=>this.ques=[]
      }
    )
  }


}


