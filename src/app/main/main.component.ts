import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {GuarantorService} from '../service/guarantor.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Guarantor} from '../model/guarantor';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  myForm: FormGroup;
  guarantorName: string;
  constructor(public gService: GuarantorService, private router: Router , private route: ActivatedRoute ) {
  }

  ngOnInit(): void {
this.myForm = new FormGroup({
  guarantorName : new FormControl(null)
});

      }
  click(): void {
    this.guarantorName = this.myForm.value.guarantorName;
    console.log(this.guarantorName);
    this.route.params.subscribe(
      param => {
        const idparam = 'guarantorName';
        this.guarantorName = param[idparam] ;
        let guarantors: Guarantor = null;
        console.log(guarantors);
        console.log(this.guarantorName);
        this.gService.getByGuarantorName(this.guarantorName).subscribe(
          value => {
            console.log(value);
            guarantors = value.result;
            this.myForm.reset(guarantors);
          }
        );
      }
    );
  }
}
