import { Component, OnInit } from '@angular/core';
import {GuarantorService} from '../../service/guarantor.service';
import {Guarantor} from '../../model/guarantor';



@Component({
  selector: 'app-guarantor-list',
  templateUrl: './guarantor-list.component.html',
  styleUrls: ['./guarantor-list.component.css']
})
export class GuarantorListComponent implements OnInit {
guarantors: Guarantor[];
  constructor(public guarantorService: GuarantorService) { }
  ngOnInit(): void {
    this.guarantorService.getGuarantorList().subscribe(
      value => this.guarantors = value.result,
      error => console.log(error),
      () => console.log('Finished Request Procress')
    );

  }
  }



