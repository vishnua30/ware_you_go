import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginapiService } from './loginapi.service';




@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent {

  requiredForm!: FormGroup;
  users!:any
  jjf:any[]=[88,99,99]

   constructor(private loginapi: LoginapiService,private router:Router) {
      
   }
  
   //Create required field validator for name
   submit(data:any) {
    this.loginapi.getPosts().subscribe((res =>{
      
      const user=data
      this.users=res
      // console.log(data)
      // console.warn(this.users)
      const result=this.users.find((a:any)=>
      {
        return a.username === user.username && a.password === user.password
      })
      if(result)
      {
        alert("login SucessFull")
        this.router.navigate(['navbar'])
      }
      else
      {
        alert("invalid username or password")
      }
      

     

    }
     ))
      
   }
   
  //  validate(uusers:any,user:any)
  //  {
  //   uusers.forEach((element: any) => {

  //     if(element.username==user.username && element.password==user.password)
  //     {
  //       return true
  //     }
  //     else{
  //       return false
        
  //     }

  //   });
  //  }
   posts(data:any)
   {
    this.loginapi.post(data).subscribe((data)=>console.log(data))
   }

}
