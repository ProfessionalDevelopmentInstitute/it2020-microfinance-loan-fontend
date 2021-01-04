import { Component, OnInit } from '@angular/core';
import {GuarantorService} from '../../service/guarantor.service';
import {Guarantor} from '../../model/guarantor';
import {FormControl, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-guarantor-list',
  templateUrl: './guarantor-list.component.html',
  styleUrls: ['./guarantor-list.component.css']
})
export class GuarantorListComponent implements OnInit {
guarantors: Guarantor[];
myF: FormGroup;
  constructor(public guarantorService: GuarantorService) {
    this.myF = new FormGroup({
      guarantorName : new FormControl('', Validators.required)});
  }
  ngOnInit(): void {
    this.guarantorService.getGuarantorList().subscribe(
      value => {
        this.guarantors = value.result;
        console.log(value.result);
      },
error => console.log(error),
      () => console.log('Finished Request Procress')
    );

  }
  searchName(): void{
    const guarantorName = this.myF.value.guarantorName;
    console.log(guarantorName);
    this.guarantorService.getByGuarantorName(guarantorName).subscribe(
      value => {
        this.guarantors = value;
        console.log(value);
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('SCF!!!!');
      }
    );
  }
  }



