import { Component, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MainserviceService } from 'src/app/services/mainservice.service';
import { AnswerComponent } from '../answer/answer.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  @Input() ques:any;
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AnswerComponent, {
      data: {
        id: this.ques.qid,
      },
    });
  }
  
}
