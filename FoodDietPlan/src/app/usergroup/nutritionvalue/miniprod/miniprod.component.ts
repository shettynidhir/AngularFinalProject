import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-miniprod',
  templateUrl: './miniprod.component.html',
  styleUrls: ['./miniprod.component.css']
})
export class MiniprodComponent {
@Input() prod:any;
}
