import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,FormBuilder,Validators,AbstractControl} from '@angular/forms';
import { ShiruService } from '../shiru.service';


@Component({
  selector: 'app-pro1',
  templateUrl: './pro1.component.html',
  styleUrls: ['./pro1.component.css']
})
export class Pro1Component implements OnInit {
  [x: string]: any;
  pro1form: FormGroup;
  emails: AbstractControl;
  pwds: AbstractControl;

  constructor(
    //private spinner:NgxSpinnerService,
    //private router:Router,
    private formbuilder:FormBuilder,
    private ShiruService:ShiruService
  ) {
    this.pro1form=formbuilder.group({
      emails: ['',[Validators.required, Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]],
      pwds: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]]
    });
    this.emails = this.pro1form.controls['emails'];
    this.pwds = this.pro1form.controls['pwds'];
   }

  ngOnInit() {
  }
  pro1(){
    console.log("Method Running........");
    if( this.pro1form.value.emails && this.pro1form.value.pwds)
    {
    let sendData ={
      emails: this.pro1form.value.emails,
      pwds:this.pro1form.value.pwds
    }
    console.log('My Data Prepared........',sendData);
    let data =this.ShiruService.pro1(sendData);
  }  
  else
  {
    console.log("EMPTY FIELD!!");
    
  }
}
}
