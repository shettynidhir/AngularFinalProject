import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainserviceService } from '../services/mainservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  lcred: any;
  hide = true;
  temp: any;
  email: string = "";
  password: string = "";
  errors: string = "";
  rerrors: string = "";
  rname: string = "";
  rpass: string = "";
  rcpass: string = "";
  rphone: string = "";
  remail: string = "";
  logform: boolean = true;

  constructor(private route: Router, private ms: MainserviceService) {
    // this.ms.getCredentials().subscribe({
    //   next: (data: any) => this.lcred = data,
    //   error: () => this.lcred = {}
    // })
  }

  change(): void {
    this.logform = this.logform ? false : true;
  }

  login(): void {


    if (this.email.length == 0 || this.password.length == 0) {
      this.errors = "Please enter credentials!!";
    }

    else
     {
      this.ms.login(this.email,this.password).subscribe(
        { next:   (response:any)=>{
            sessionStorage.setItem("name",response.user.name);
            sessionStorage.setItem("usertype",response.user.type);
            sessionStorage.setItem("token",response.accessToken);
            sessionStorage.setItem("email",response.user.email);
            sessionStorage.setItem("userid",response.user.uid);
            // this.ms.username=response.user.username;
            // this.log.usertype=response.user.type;
            // this.log.token=response.accessToken;
            // this.status=true;
            if(response.user.type=="admin")
                this.route.navigate(['admin/home']);
            else
                this.route.navigate(['user/products']);
          },

          error:()=>{
            this.errors="Invalid Credentials";
            // this.status=false;
          }}
     )
      // for (let info of this.lcred) {

      //   if (this.email == info.username && this.password == info.password) {

      //     if (info.type == "user") {
      //       sessionStorage.setItem("userid", info.uid);
      //       sessionStorage.setItem("name", info.name);
      //       this.route.navigate(['user/products']);
      //       break;
      //     }
      //     else {
      //       this.route.navigate(['admin/home']);
      //       break;
      //     }
      //   }
      //   else {
      //     this.errors = "Invalid credentials!!"
      //   }


      // }

    }

  }



  register(): void 
  {
    
    let emailregex: RegExp = /^[a-z][a-z0-9_\.]+@[a-z]{2,5}\.[a-z]{3,5}$/;
    let passregex: RegExp = /^(?=.{6,})(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/;
    let phoneregex: RegExp = /^([0-9]){10}$/;

  
    if (this.rname.length == 0 || this.remail.length == 0 || this.rphone.length == 0 || this.rpass.length == 0 || this.rcpass.length == 0)
      this.rerrors = "Please enter all fields!!";
    else if (!emailregex.test(this.remail))
      this.rerrors = "Invalid email id!!";
    else if (!passregex.test(this.rpass))
      this.rerrors = "Password must be atleast 6 characters long,must contain one uppercase letter, one lowercase letter and a digit!!";
    else if (!phoneregex.test(this.rphone))
      this.rerrors = "Phone number is invalid";
    
    else if (this.rpass != this.rcpass)
      this.rerrors = "Passwords must be same!!"
    
 

     else {
    
    
      this.rerrors = "";
       this.temp =
       {
        uid: Math.round(Math.random() * 100000),
        name:this.rname,
        phone:this.rphone,
        email: this.remail,
        password: this.rpass,
        type: "user"


    

      }

      this.ms.postLogin(this.temp).subscribe(
        {
          next: data => {
            alert('Registered Successfully!!')
            this.logform=true;
            location.reload();
          },
          error: (error) => alert('Sorry! Could not register!!')
        }

      )

    }

  }

}
