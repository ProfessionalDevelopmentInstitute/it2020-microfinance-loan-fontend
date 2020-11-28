import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {GuarantorService} from '../service/guarantor.service';
import {Router} from '@angular/router';

class Guarantor{
  constructor(public id: number, public guarantorName: string, public guarantorNRC: string, public guarantorAddress: string,
              public guarantorPhone: string, public guarantorOccupation: string) {
  }
}

@Component({
  selector: 'app-guarantor',
  templateUrl: './guarantor.component.html',
  styleUrls: ['./guarantor.component.css']
})
export class GuarantorComponent implements OnInit {
  myForm: FormGroup;

  constructor(public guarantorService: GuarantorService, public router: Router) {
    this.myForm = new FormGroup({
      guarantorName : new FormControl(null),
      guarantorNRC: new FormControl(null),
      guarantorAddress: new FormControl( null),
      guarantorPhone: new FormControl( null),
      guarantorOccupation: new FormControl( null)
    });
  }

  ngOnInit(): void {
  }

  submit(): void {
    const guarantors: Guarantor = new Guarantor(this.myForm.value.id, this.myForm.value.guarantorName, this.myForm.value.guarantorNRC,
      this.myForm.value.guarantorAddress, this.myForm.value.guarantorPhone, this.myForm.value.guarantorOccupation );
    console.log(guarantors);

    this.guarantorService.createGuarantor(guarantors).subscribe(
      value => {
        console.log(value);
      },
      error => {
        console.log(error);
      },
      () => {
        this.myForm.reset();
        this.router.navigate(['guarantor-list']);
      }
    );
  }
}

