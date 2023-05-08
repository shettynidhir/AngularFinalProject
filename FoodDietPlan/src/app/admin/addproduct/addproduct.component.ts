import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MainserviceService } from 'src/app/services/mainservice.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  selected:any="All"
  addproduct:any;
  imgfile:any;
 
 
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
constructor(private fb:FormBuilder, private ms:MainserviceService,private ar:ActivatedRoute )
{
 this.addproduct=this.fb.group({
   Food:['',[Validators.required]],
   Measure:['',[Validators.required]],
   Grams:['',[Validators.required]],
   Calories:['',[Validators.required]],
   Protein:['',[Validators.required]],
   Fat:['',[Validators.required]],
   SatFat:['',[Validators.required]],
   Fiber:['',[Validators.required]],
   Carbs:['',[Validators.required]],
   Category:['',[Validators.required]]


  
 });


}

uploadimg(image:any)
{
this.imgfile=image.files[0];
 
}

 
saveProd()
{
 var temp:any={
 
   
   Food:this.addproduct.value.Food,
   Measure:this.addproduct.value.Measure,
   Grams:this.addproduct.value.Grams,
   Calories:this.addproduct.value.Calories,
   Protein:this.addproduct.value.Protein,
   Fat:this.addproduct.value.Fat,
   SatFat:this.addproduct.value.SatFat,
   Fiber:this.addproduct.value.Fiber,
   Carbs:this.addproduct.value.Carbs,
   Category:this.addproduct.value.Category,
   image:this.imgfile.name
  
 }


 this.ms.postProduct(temp).subscribe(
   { 
    next: data=>{
      alert('Product added successfully!!')
      location.reload();
    },
    error:(error)=>alert('Not saved ---some Error')
  }

  )

}

}
