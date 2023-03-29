import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import {  Location} from "../Location";
import { OutLocApiService } from "./out-loc-api.service";

@Component({
  selector: 'app-out-location',
  templateUrl: './out-location.component.html',
  styleUrls: ['./out-location.component.css']
})
export class OutLocationComponent implements OnInit{
  // title = 'demo';
  // list!:any
  // locations:Location[]= [
  //   {sno:1, Rack:  53, Shelf :240, active:true},
  //   {sno:2, Rack:  33, Shelf :202, active:false},
  //   {sno:3, Rack:  63, Shelf :204, active:true},
  //   {sno:4, Rack:  50, Shelf :820, active:true},
  //   {sno:5, Rack:  5, Shelf :50, active:false},
   
    
  // ];
 

  // constructor(private outLocApi:OutLocApiService){
  //   outLocApi.getPosts().subscribe((data)=>
  //   {
  //     console.warn(data)
  //   })
  // }
  // ngOnInit(): void {
      
  // }
  // submit(obj:any)
  // {
  //   console.log(obj)
  // }
  // toggleComp(location:Location)
  // {
   
  //   let index=this.locations.indexOf(location)
  //   this.locations[index].active=!this.locations[index].active
   
  //   console.log(location)

  //   this.outLocApi.post(location).subscribe((data)=>
  //   {
  //     this.list=JSON.stringify(data)
  //     console.warn(this.list)
  //   })
  // }
  locations!: Location[];
  
  loc:any
  @Input() location:Location=new Location()
  @Output() tempBl:EventEmitter<Location>=new EventEmitter();
  list: any;
  constructor(private locationapi:OutLocApiService,private router:Router,private http:HttpClient)
  {
    
    this.http.get("http://localhost:3000/locationDB").subscribe((data: any)=>{
      this.locations=data
      console.warn(this.locations)
    })
      
  }
 
  
  data:any
  toggleComp(location:any)
  {
    
    let index=this.locations.indexOf(location)
    this.locations[index].active=!this.locations[index].active
    console.log("inside toogle")
    console.log(location)
   this.data=location;



   
  
    
  }
  submit()
  {
    this.locationapi.posts(this.data).subscribe((data)=>{
      this.loc=JSON.stringify(data)
      console.warn(data)

    })
  
    
  }

 ngOnInit(): void {
   
 }  
}