import { Component, OnInit } from '@angular/core';
import {Form, FormControl} from '@angular/forms';

@Component({
  selector: 'app-angular-material',
  templateUrl: './angular-material.component.html',
  styleUrls: ['./angular-material.component.css']
})
export class AngularMaterialComponent implements OnInit {
  myControl: FormControl;
  options:Array<any> = [1,2,3]
  constructor() { 
    this.myControl = new FormControl();
  }

  ngOnInit() {
  }

}
