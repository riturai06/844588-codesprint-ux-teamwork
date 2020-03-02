import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicenameService {
  private baseUrl='http://localhost:3000/AptModel';
  constructor(private http: HttpClient) { }
  
  getAll():Observable<any>
  {   
    
      console.log("in service method");
      return this.http.get(`${this.baseUrl}`);
  }
 Insertdata(aptmodel:Object) : Observable<any>
 {
   //console.log("inserting data..."+JSON.stringify(emp));
    return this.http.post(`${this.baseUrl}`,aptmodel);
  }
  }

