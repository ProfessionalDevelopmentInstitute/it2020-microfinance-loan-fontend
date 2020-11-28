import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MainComponent} from './main/main.component';
import {CustomerComponent} from './customer/customer.component';
import {StaffComponent} from './staff/staff.component';
import {GuarantorComponent} from './guarantor/guarantor.component';
import {MemberComponent} from './member/member.component';
import {LoanPolicyComponent} from './loan-policy/loan-policy.component';
import {GuarantorListComponent} from './guarantor/guarantor-list/guarantor-list.component';
import {LoanPolicyListComponent} from './loan-policy/loan-policy-list/loan-policy-list.component';
import {MemberListComponent} from './member/member-list/member-list.component';
import {UpdateGuarantorComponent} from './guarantor/update-guarantor/update-guarantor.component';
import {MemberUpdateComponent} from './member/member-update/member-update.component';





const routes: Routes = [
  { path : '' , redirectTo : '/home' , pathMatch : 'full'},
  { path : 'home' , component : HomeComponent },
  {path : 'main' , component: MainComponent},
  {path : 'customer' , component: CustomerComponent},
  {path : 'staff' , component : StaffComponent},
  {path : 'guarantor' , component : GuarantorComponent},
  {path: 'guarantor-list', component : GuarantorListComponent},
  { path : 'member' , component : MemberComponent},
  { path : 'loan-policy' , component : LoanPolicyComponent},
  {path : 'loanPolicy-list', component: LoanPolicyListComponent},
  {path: 'member-list' , component: MemberListComponent},
  { path : 'guarantor-update/:id' , component : UpdateGuarantorComponent},
  {path : 'member-update/:id' , component: MemberUpdateComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {HomeComponent ; MainComponent; CustomerComponent ; StaffComponent;
 GuarantorComponent ; MemberComponent; GuarantorListComponent  ;  LoanPolicyComponent; LoanPolicyListComponent;
  MemberListComponent; UpdateGuarantorComponent; MemberUpdateComponent; }
