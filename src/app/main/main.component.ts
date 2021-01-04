import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoginModel} from '../model/Login';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../service/login.service';
import {Router} from '@angular/router';
import {LoginManagerService} from '../service/login-manager.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
  title = 'microfinanceAndLoan';
  isAuthenticated = false;

  constructor(private loginManager: LoginManagerService, private router: Router) {
  }

  ngOnInit(): void {
    this.loginManager.isAuth.subscribe(value => this.isAuthenticated = value);
    this.loginManager.sessionSignIn();
  }

  logout(): void {
    this.loginManager.logOut();
    this.router.navigate(['home']);
  }

  ngOnDestroy(): void {
    this.loginManager.isAuth.unsubscribe();
  }
}
