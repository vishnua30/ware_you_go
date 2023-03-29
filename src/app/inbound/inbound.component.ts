import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "../Location";
import { InboundApiService } from './inbound-api.service';


@Component({
  selector: 'app-inbound',
  templateUrl: './inbound.component.html',
  styleUrls: ['./inbound.component.css']
})
export class InboundComponent implements OnInit {

  @Input() location:Location=new Location;
 list:any
 inboundinfo!:any
 constructor(public inboundapi:InboundApiService,private router:Router){

  // inboundapi.getPosts().subscribe((data)=>
  // {
  //     this.inboundinfo=data
  //     console.warn(data)
  // })

 }
 
  ngOnInit(){
    
  }
  submit(data:any)
  {
    console.log(data)
    this.inboundapi.post(data).subscribe((data:any)=>
    {
     console.log(data)
    })
    this.router.navigate(["locanalyse"])
  }
}
