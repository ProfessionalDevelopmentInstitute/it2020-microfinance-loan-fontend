import {Component, OnInit, ViewChild} from '@angular/core';
import {MemberListService} from '../service/member-list.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Member} from '../model/member';


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
    const members: Member = {
     memberGroupName: this.myForm.value.memberGroupName,
      memberType: this.myForm.value.memberType
    };
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

