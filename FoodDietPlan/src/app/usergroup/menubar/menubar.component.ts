import { Component } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {
  uname:any;
 constructor()
 {
  // let username=sessionStorage.getItem("name");
  //     let usertype=sessionStorage.getItem("usertype");
  //     let token=sessionStorage.getItem("token");
  //     let email=sessionStorage.getItem("email");
  //     let userid=sessionStorage.getItem("userid")
    
  this.uname= sessionStorage.getItem('name');
 }


 logout():void
 {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("usertype");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("userid");
 
 }

}
