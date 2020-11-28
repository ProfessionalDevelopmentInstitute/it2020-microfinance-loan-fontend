import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Guarantor} from '../../model/guarantor';
import {ActivatedRoute, Router} from '@angular/router';
import {GuarantorService} from '../../service/guarantor.service';

@Component({
  selector: 'app-update-guarantor',
  templateUrl: './update-guarantor.component.html',
  styleUrls: ['./update-guarantor.component.css']
})
export class UpdateGuarantorComponent implements OnInit {
  myForm: FormGroup;
  id: number;

  constructor(private router: Router, private gService: GuarantorService, private route: ActivatedRoute) {
    this.myForm = new FormGroup({
      guarantorName: new FormControl(null),
      guarantorNRC: new FormControl(null),
      guarantorAddress: new FormControl(null),
      guarantorPhone: new FormControl(null),
      guarantorOccupation: new FormControl(null)
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      param => {
        const idparam = 'id';
        this.id = param[idparam] ;
        let guarantors: Guarantor = null;
        console.log(guarantors);
        console.log(this.id);
        this.gService.getGuarantorById(this.id).subscribe(
          value => {
            console.log(value);
            guarantors = value.result;
            this.myForm.reset(guarantors);
          }
        );
      }
    );
  }

  onSubmit(): void {
     const guarantor: Guarantor = new Guarantor(this.id,
       this.myForm.value.guarantorName,
       this.myForm.value.guarantorNRC,
       this.myForm.value.guarantorAddress,
       this.myForm.value.guarantorPhone,
       this.myForm.value.guarantorOccupation,
       );
     this.gService.updateGuarantor(guarantor).subscribe(
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
