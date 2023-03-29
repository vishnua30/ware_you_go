import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';
import {  Location} from "../../app/Location";
import { ManualentryService } from './manualentry.service';
import { RelocationApiService } from "../relocation/relocation-api.service";
import { PlaceAvailComponent } from "../place-avail/place-avail.component";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-manual-entry',
  templateUrl: './manual-entry.component.html',
  styleUrls: ['./manual-entry.component.css']
})
export class ManualEntryComponent implements OnInit{
  // title = 'demo';
  // name='hi';
  // locations!: Location[];
  // @Input() location:Location=new Location()
  // @Input() i!:number;
  

  // constructor(public appapi:ManualentryService,private http:HttpClient){
  
     
  //   this.http.get("http://localhost:3000/locationDB").subscribe((data: any)=>{
  //     this.locations=data
  //     console.warn(this.locations)
  //   })

  
  // }
  // ngOnInit(): void {
      
  // }
  // dat:any;
  
  // toggleComp(location:Location)
  // {
  //  if(location.active==true)
  //  {
  //   let index=this.locations.indexOf(location)
  //   this.locations[index].active=!this.locations[index].active
  //  }
  //  this.dat=this.location
  //   console.log(location)
    

    
  // }
  // submit()
  // {
  //   console.log(this.dat)
  //   this.appapi.posts(this.dat).subscribe((data)=>
  //   {
  //     console.warn(data)
  //   })
    
  // }


  locations!: Location[];
  
  loc:any
  @Input() location:Location=new Location()
  @Output() tempBl:EventEmitter<Location>=new EventEmitter();
  list: any;
  constructor(private locationapi:ManualentryService,private router:Router,private http:HttpClient)
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
    this.tempBl.emit(this.data)
    this.router.navigate(['blocking'])
  }

 ngOnInit(): void {
   
 }  
  
}
