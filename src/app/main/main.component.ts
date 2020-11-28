import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {GuarantorService} from '../service/guarantor.service';
import {Router} from '@angular/router';
import {Guarantor} from '../model/guarantor';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  myForm: FormGroup;
  guarantorName: string;
  constructor(public gService: GuarantorService, private router: Router ) {
    this.myForm = new  FormGroup({
      guarantorName : new FormControl(null),
    });
  }

  ngOnInit(): void {

      }

  click(): void {
    const name = this.myForm.value.guarantorName;
    console.log(name);

  }
}
