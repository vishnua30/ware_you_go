import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupapiService } from './signupapi.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(public signupapi:SignupapiService,private router:Router){}
  ngOnInit(): void {
    
  }
  submit(obj: any) {
    this.signupapi.post(obj).subscribe((data=>{
      console.warn(data)
      this.router.navigate([''])
    }))
    console.log(obj);
  }
}
