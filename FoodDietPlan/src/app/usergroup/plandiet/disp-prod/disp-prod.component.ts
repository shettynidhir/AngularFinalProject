import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-disp-prod',
  templateUrl: './disp-prod.component.html',
  styleUrls: ['./disp-prod.component.css']
})
export class DispProdComponent {
  @Input() prod:any;

}
