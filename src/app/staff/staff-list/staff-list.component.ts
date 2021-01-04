import { Component, OnInit } from '@angular/core';
import {StaffService} from '../../service/staff.service';
import {StaffModel} from '../../model/StaffModel';
import {ResponseModel} from '../../model/response.model';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {

  students: StaffModel[];

  constructor(private staffService: StaffService) {
  }

  ngOnInit(): void {
    this.staffService.getStaff().subscribe(
      value => this.students = value
    );
  }


}
