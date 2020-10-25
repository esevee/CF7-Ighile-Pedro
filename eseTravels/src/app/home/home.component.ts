import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  info = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    age: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {  //taking the values
    if(this.info.valid) {
      var formDetails = this.info.value;
    console.log(formDetails)
    }
  }

}
