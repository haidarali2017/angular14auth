import { Component, OnInit } from '@angular/core';
import {FormControl,FormControlName ,FormGroup } from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="reactive form"

  loginForm= new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),

  })

  userLogin(){
    console.warn(this.loginForm.value);
  }

}
