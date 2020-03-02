import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FormArray} from '@angular/forms';
import { Validators } from '@angular/forms';
//import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  /*contactusform=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
});*/
contactusform = this.fb.group({
  name: [''],
  email: ['',[Validators.required, Validators.email]],
  message:[''],
 // mobilenumber:this.fb.array([this.fb.control('')])
});
  ngOnInit(): void {
  }
  onSubmit()
  {
    console.warn(this.contactusform.value);
  }
  constructor(private fb: FormBuilder) { }
}
/*get aliases() {
  return this.profileForm.get('aliases') as FormArray;
}*/ 
