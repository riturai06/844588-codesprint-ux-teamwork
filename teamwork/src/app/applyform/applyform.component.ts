import { Component, OnInit } from '@angular/core';
import { ServicenameService } from '../servicename.service';
import {AptModel} from '../Appointment'
@Component({
  selector: 'app-applyform',
  templateUrl: './applyform.component.html',
  styleUrls: ['./applyform.component.css']
})
export class ApplyformComponent implements OnInit {

  aptmodel:AptModel=new AptModel();
  constructor(private service : ServicenameService) {
    console.log("constructor invoked");
   }
  ngOnInit(): void {
  }
  createappoinment()
  {
    console.log("data inserted");
  
   this.service.Insertdata(this.aptmodel).subscribe(aptmodel=>this.aptmodel=this.aptmodel);

  }
  
}

