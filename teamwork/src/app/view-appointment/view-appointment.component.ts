import { Component, OnInit } from '@angular/core';
import { ServicenameService } from '../servicename.service';
import {AptModel } from '../Appointment';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {

  apts:AptModel=new AptModel();
  aptService: any;
  
 constructor(private dataService: ServicenameService) { 
    console.log("constructor invoked");
  }

  
  
  Appointment() {
    

  }
 
  

  ngOnInit(): void {
    this.dataService.getAll().subscribe(apts=>this.apts=apts);
  }

  

}
