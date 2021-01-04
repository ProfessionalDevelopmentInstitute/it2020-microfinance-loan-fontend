import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../service/login.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginModel} from '../model/Login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router, private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    });
  }

  summit(): void {
    const loginModel: LoginModel = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
    this.loginService.signIn(loginModel).subscribe(
      value => {
        console.log(value.staffEmail);
        this.router.navigate(['main']);
      }
    );
  }
}
