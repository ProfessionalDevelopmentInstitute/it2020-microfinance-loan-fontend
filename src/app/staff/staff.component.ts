import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {StaffService} from '../service/staff.service';
import {ROLES, StaffModel} from '../model/StaffModel';
import {ValidatorService} from '../service/validator.service';



@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  registerForm: FormGroup;
  roles = ROLES;
  constructor(private router: Router, private validatorService: ValidatorService, private sService: StaffService) {}
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      staffName: new FormControl(null, Validators.required),
      staffEmail: new FormControl(null, [Validators.required, Validators.email]),
      staffNRCNo: new FormControl(null),
      passwords: new FormGroup({
        password: new FormControl(null),
        confirmPassword: new FormControl(null)
      }, [Validators.required, this.validatorService.confirmPasswordValidator]),
      staffPhone: new FormControl(null, Validators.required),
      staffAddress: new FormControl(null, Validators.required),
      role: new FormControl(null, Validators.required),
    });
  }

 public submit(): void {
   const studentModel: StaffModel = {
     staffAddress: this.registerForm.value.staffAddress,
     staffEmail: this.registerForm.value.staffEmail,
     staffName: this.registerForm.value.staffName,
     staffPhone: this.registerForm.value.staffPhone,
     staffNRCNo: this.registerForm.value.staffNRCNo,
     role: this.registerForm.value.role,
     password: this.registerForm.value.passwords.password
   };
   this.sService.register(studentModel).subscribe(
     value => {
       console.log(value);
       this.router.navigate(['staff-list']);
     },
     error => console.log(error)
   );
 }

}
