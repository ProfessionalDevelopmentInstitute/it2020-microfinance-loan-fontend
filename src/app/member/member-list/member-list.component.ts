import { Component, OnInit } from '@angular/core';
import {Member} from '../../model/member';
import {MemberListService} from '../../service/member-list.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
members: Member[];
  constructor(private mService: MemberListService) { }

  ngOnInit(): void {
    this.mService.getMemberList().subscribe(
      value => this.members = value.result,
      error => console.log(error),
      () => console.log('Finished Request Procress')
    );
  }

}
