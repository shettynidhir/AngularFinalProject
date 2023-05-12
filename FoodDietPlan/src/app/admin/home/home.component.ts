import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MainserviceService } from 'src/app/services/mainservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products:any;
  dataSource:any;
  displayedColumns: string[] = ['id','Food','Category','image'];
  constructor(private prd:MainserviceService)
  {
    this.prd.getProducts().subscribe(
      {
        next:(data:any)=>
        {
          this.products=data
        this.dataSource=new MatTableDataSource(this.products)},
        error:()=>this.products=[]
      }
    )
  }

}
