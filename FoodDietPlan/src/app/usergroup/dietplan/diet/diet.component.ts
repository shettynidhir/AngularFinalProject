import { Component ,Input} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DietdescComponent } from '../../dietdesc/dietdesc.component';


@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.css']
})
export class DietComponent {
@Input() dietplan:any;
constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DietdescComponent, {
      data: {
        id: this.dietplan.id,
      },
    });
  }
}
