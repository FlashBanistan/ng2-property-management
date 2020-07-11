import { Component, OnInit } from '@angular/core';
import { LoginCredentials } from '@propertium/common';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss'],
})
export class LoginContainerComponent implements OnInit {
  loginBackgroundUrl = '../../../assets/images/login-background.jpg';
  logoUrl = '../../../assets/images/logo_transparent.png';
  loginTitle = 'Admin Login';
  constructor() {}

  ngOnInit() {}

  onLogin(credentials: LoginCredentials) {}
}
