import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  btnclick=function()
  {
    this.router.navigateByUrl('/place-appoinment.component.html');
  }

}
