import {Component, OnInit, ViewChild} from '@angular/core';
import {MemberListService} from '../service/member-list.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  myForm: FormGroup;
  constructor(private mService: MemberListService, private router: Router) {
    this.myForm = new FormGroup({
      memberGroupName : new FormControl(null),
      memberType: new FormControl(null)
    });
  }


  ngOnInit(): void {
  }

  submit(): void {
    const members: Member = new class implements Member {
      id: number;
      memberGroupName: string;
      memberType: string;
    }
    console.log(members);

    this.mService.createMembers(members).subscribe(
      value => {
        console.log(value);
      },
      error => {
        console.log(error);
      },
      () => {
        this.myForm.reset();
        this.router.navigate(['member-list']);
      }
    );
  }
}
export interface Member{
  id: number;
  memberGroupName: string;
  memberType: string;
}