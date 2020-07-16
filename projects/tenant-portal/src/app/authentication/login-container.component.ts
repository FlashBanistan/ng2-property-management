import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginCredentials } from '@propertium/common';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-login-container',
  template: `
    <propertium-login-page
      [backgroundUrl]="loginBackgroundUrl"
      [logoUrl]="logoUrl"
      [loginTitle]="loginTitle"
      (login)="onSubmit($event)"
    ></propertium-login-page>
  `,
})
export class LoginContainerComponent {
  loginBackgroundUrl = '../../../assets/images/login-background.jpg';
  logoUrl = '../../../assets/images/logo_transparent.png';
  loginTitle = 'Tenant Login';

  constructor(private authService: AuthenticationService, private router: Router) {}

  onSubmit(credentials: LoginCredentials) {
    this.authService.getTokenFromServer(credentials).subscribe(
      (res) => {
        this.router.navigate(['/connect']);
      },
      (err) => {}
    );
  }
}
