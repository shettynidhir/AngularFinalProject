import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ForumansComponent } from '../forumans/forumans.component';

@Component({
  selector: 'app-forumbox',
  templateUrl: './forumbox.component.html',
  styleUrls: ['./forumbox.component.css']
})
export class ForumboxComponent {
  @Input() comments:any;
  id:any;

  
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ForumansComponent, {
      data: {
        id: this.comments.qid,
      },
    });
  }
 



}
