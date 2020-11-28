import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { StaffComponent } from './staff/staff.component';

import {HttpClientModule} from '@angular/common/http';

import { GuarantorComponent } from './guarantor/guarantor.component';

import { MemberComponent } from './member/member.component';

import { LoanPolicyComponent } from './loan-policy/loan-policy.component';
import {GuarantorListComponent} from './guarantor/guarantor-list/guarantor-list.component';
import { LoanPolicyListComponent } from './loan-policy/loan-policy-list/loan-policy-list.component';
import { MemberListComponent } from './member/member-list/member-list.component';
import { UpdateGuarantorComponent } from './guarantor/update-guarantor/update-guarantor.component';
import { MemberUpdateComponent } from './member/member-update/member-update.component';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    CustomerComponent,
    StaffComponent,
    GuarantorComponent,
    MemberComponent,
    LoanPolicyComponent,
    GuarantorListComponent,
    LoanPolicyListComponent,
    MemberListComponent,
    UpdateGuarantorComponent,
    MemberUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }
