import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LoginCredentials } from '@propertium/common';

@Component({
  selector: 'app-login-container',
  template: `
    <propertium-login-page
      [backgroundUrl]="loginBackgroundUrl"
      [logoUrl]="logoUrl"
      [loginTitle]="loginTitle"
      (login)="onLogin($event)"
    ></propertium-login-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginContainerComponent {
  loginBackgroundUrl = '../../../assets/images/login-background.jpg';
  logoUrl = '../../../assets/images/logo_transparent.png';
  loginTitle = 'Admin Login';
  constructor() {}

  onLogin(credentials: LoginCredentials) {
    console.log('CREDENTIALS: ', credentials);
  }
}
