import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import {  Location} from "../Location";
import { LocationAnalyserApiService } from './location-analyser-api.service';

@Component({
  selector: 'app-location-analyser',
  templateUrl: './location-analyser.component.html',
  styleUrls: ['./location-analyser.component.css']
})
export class LocationAnalyserComponent implements OnInit{

  locations!: Location[];
  
  loc:any
  @Input() location:Location=new Location()
  @Output() tempBl:EventEmitter<Location>=new EventEmitter();
  list: any;
  constructor(private locationapi:LocationAnalyserApiService,private router:Router,private http:HttpClient)
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
    this.locationapi.post(this.data).subscribe((data)=>{
      this.loc=JSON.stringify(data)
      console.warn(data)

    })
    this.tempBl.emit(this.data)
    this.router.navigate(['blocking'])
  }

 ngOnInit(): void {
   
 }
}
