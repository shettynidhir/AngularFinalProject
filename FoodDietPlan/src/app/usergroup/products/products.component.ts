import { Component,  } from '@angular/core';
import { MainserviceService } from 'src/app/services/mainservice.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  selected:any="All"
  searched:any=""
types:string[]=[
  "All",
  "Dairy products",
  "Fats, Oils, Shortenings",
  "Meat, Poultry",
  "Fish, Seafood",
  "Vegetables A-E",
  "Vegetables F-P",
  "Vegetables R-Z",
  "Fruits A-F",
  "Fruits G-P",
  "Fruits R-Z",
  "Breads, cereals, fastfood,grains",
  "Soups",
  "Desserts, sweets",
  "Jams, Jellies",
  "Seeds and Nuts",
  "Drinks,Alcohol, Beverages",

]


  products:any;
  constructor(private prd:MainserviceService)
  {
    this.prd.getProducts().subscribe(
      {
        next:(data:any)=>this.products=data,
        error:()=>this.products=[]
      }
    )
  }

}
