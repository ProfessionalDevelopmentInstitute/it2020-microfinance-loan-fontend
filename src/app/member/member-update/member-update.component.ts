import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Member} from '../../model/member';
import {MemberListService} from '../../service/member-list.service';

@Component({
  selector: 'app-member-update',
  templateUrl: './member-update.component.html',
  styleUrls: ['./member-update.component.css']
})
export class MemberUpdateComponent implements OnInit {
  myForm: FormGroup;
  id: number;

  constructor(private router: Router, private mService: MemberListService, private route: ActivatedRoute) {
    this.myForm = new FormGroup({
      memberGroupName : new FormControl(null),
      memberType : new FormControl(null)
      }
    );
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      param => {
        const idparam = 'id';
        this.id = param[idparam] ;
        let members: Member = null;
        console.log(members);
        console.log(this.id);
        this.mService.MemberById(this.id).subscribe(
          value => {
            console.log(value);
            members = value.result;
            this.myForm.reset(members);
          }
        );
      }
    );
  }
  submit(): void {
    const member: Member = new Member(this.id,
      this.myForm.value.memberGroupName,
      this.myForm.value.memberType
    );
    this.mService.updateMember(member).subscribe(
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
